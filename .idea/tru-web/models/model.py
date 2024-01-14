import os
import openai
import pinecone
from dotenv import load_dotenv
from langchain import PromptTemplate
from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Pinecone
from tqdm.notebook import tqdm

load_dotenv()
openai.organization = "org-EIvmdbxBR3CLIWlFMOq4UTQI"
openai.api_key = os.getenv("OPENAI_API_KEY")
pinecone.init(
    api_key=os.getenv('PINECONE_API_KEY'),
    environment=os.getenv('PINECONE_ENV'))

def fparse(chain, content, meta, chunk=1000, overlap=250):
    result = ""
    counter = 0
    while counter < len(content):
        result += chain.run({'previous' : result[max(0, len(result) - overlap):],
                             'transcript' : content[counter : min(counter+chunk, len(content))],
                             'subject' : meta["subject"],
                             'relationship' : meta["relationship"],
                             'pronouns' : meta["pronouns"]})
        counter += chunk
    return result

def fcat(chain, content, meta, chunk=1000):
    result = ""
    counter = 0
    while counter < len(content):
        result += chain.run({'subject' : meta["subject"],
                             'seg' : content[counter : min(len(content), counter + chunk)]})
        counter += chunk
    return result

def fcomb(chain, content, number="5"):
    return chain.run({"topics": content, "number" : number})

# meta: {subject, author, relationship, pronouns, summary, birth_year}
def biography(src, meta):
    print(src)
    print(meta)
    llm = OpenAI(model_name="text-davinci-003")

    t_parse = """
    You are having a conversation with your {relationship} {subject}, and you want to continue writing a segment of {pronouns} biography.
    Continue writing a biography for the subject of the given conversation: {transcript} 
    Using the previous biography segment as context: {previous}
    """
    p_parse = PromptTemplate(
        input_variables=["previous", "transcript", "subject", "relationship", "pronouns"],
        template=t_parse,
    )
    c_parse = LLMChain(llm=llm, prompt=p_parse)

    t_cat = """
    list the main topics the following biography segment {seg}
    """
    p_cat = PromptTemplate(
        input_variables=["seg", "subject"],
        template = t_cat
    )
    c_cat = LLMChain(llm=llm, prompt = p_cat)

    t_comb = """
    You are trying to select {number} topics to be the chapters of a biography.
    List {number} topics that are most representative from the following topics:
    {topics}
    """
    p_comb = PromptTemplate(
        input_variables=["topics", "number"],
        template = t_comb
    )
    c_comb = LLMChain(llm=OpenAI(model_name="gpt-3.5-turbo"), prompt = p_comb)

    t_final = """
    Write a chapter of the biography of {subject} on {topic} using the following context for reference: {reference}
    """
    p_final = PromptTemplate(
        input_variables=["subject", "topic", "reference"],
        template = t_final
    )
    c_final = LLMChain(llm=llm, prompt = p_final)


    parse = fparse(c_parse, src, meta)
    cat = fcat(c_cat, parse, meta)
    comb = fcomb(c_comb, cat, number="5")

    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=250,
        chunk_overlap=100,
    )
    texts = text_splitter.create_documents([parse])
    search = Pinecone.from_documents(texts, OpenAIEmbeddings(), index_name='tru')

    final_bio = ""
    for query in comb.split('\n'):
        chap = c_final.run({"subject" : meta["subject"], "topic" : query, "reference" : search.similarity_search(query)})
        final_bio += chap
        final_bio += "\n"

    return final_bio



if __name__ == "__main__":
    with open('transcript_sample.txt', 'r') as file:
        content = file.read()
    print(biography(content, {"subject" : "Lynn Ruth Miller",
                              "relationship" : "grandma",
                              "author" : "John",
                              "summary" : "Lorem ipsum",
                              "pronouns" : "her",
                              "birth year" : "1969"}))
