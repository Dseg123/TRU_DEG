import React, { useState, useEffect } from 'react';
import { Typography, Paper, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BookReader = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  // const content = "The Early Years \n Anna Eleanor Roosevelt was born in New York City on October 11, 1884. \n Her father was Elliott Roosevelt, President Theodore Roosevelt's younger brother and her mother was Anna Hall, a member of the distinguished Livingston family. Both her parents died when she was a child, her mother in 1892, and her father in 1894. After her mother's death, Eleanor went to live with her grandmother, Mrs. Valentine G. Hall, in Tivoli, New York. She was educated by private tutors until the age of 15, when she was sent to Allenswood, a school for girls in England. The headmistress, Mademoiselle Marie Souvestre, took a special interest in young Eleanor and had a great influence on her education and thinking. At age 18, Eleanor returned to New York with a fresh sense of confidence in herself and her abilities. She became involved in social service work, joined the Junior League and taught at the Rivington Street \n Settlement House. \nOn March 17, 1905, she married her fifth cousin, Franklin Delano Roosevelt, and between 1906 and 1916, they became the parents of six children: Anna Eleanor (1906-75), James (1907-91), Franklin Delano, Jr. (1909), Elliott (1910-90), Franklin, Jr. (1914-88) and John (1916-81). During this period, her public activities gave way to family concerns and her husband's political career. However, with American entry in World War I, she became active in the American Red Cross and in volunteer work in Navy hospitals. In 1921, Franklin Roosevelt was stricken with polio causing Mrs. Roosevelt to become increasingly active in politics in part to help him maintain his interests but also to assert her own personality and goals. She participated in the League of Women Voters, joined the Women's Trade Union League, and worked for the Women's Division of the New York State Democratic Committee. She helped to establish Val-Kill Industries, a non-profit furniture factory in Hyde Park, New York, and taught at the Todhunter School, a private girls' school in New York City. \nThe First Lady \n Upon moving to the White House in 1933, Eleanor Roosevelt informed the nation that they should not expect their new first lady to be a symbol of elegance, but rather 'plain, ordinary Mrs. Roosevelt.' Despite this disclaimer, she showed herself to be an extraordinary First Lady. \n In 1933, Mrs. Roosevelt became the first, First Lady to hold her own press conference. In an attempt to afford equal time to women--who were traditionally barred from presidential press conferences--she allowed only female reporters to attend. In 1939, the Daughters of the American Revolution (DAR) refused to allow Marion Anderson, an African American singer, to perform in their auditorium. In protest, Mrs. Roosevelt resigned her membership in the DAR. \n Throughout Franklin D. Roosevelt's presidency, Eleanor traveled extensively around the nation, visiting relief projects, surveying working and living conditions, and then reporting her observations to the President. She was called 'the President's eyes, ears and legs' and provided objective information to her husband. When the Japanese attacked Pearl Harbor and the United States entered WWII, Mrs. Roosevelt made certain that the President did not abandon the goals he had put forth in the New Deal. She also exercised her own political and social influence; \n She became an advocate of the rights and needs of the poor, of minorities, and of the disadvantaged. The public was drawn in by the First Lady's exploits and adventures which she recounted in her daily syndicated column, 'My Day'. She began writing the column in 1935 and continued until her death in 1962. \n During the war, she served as Assistant Director of Civilian Defense from 1941 to 1942 and she visited England and the South Pacific to foster good will among the Allies and to boost the morale of U.S. servicemen overseas. \n The 'First Lady of the World'  \n After President Roosevelt's death on April 12, 1945, Mrs. Roosevelt continued in her public life. President Truman appointed her to the United Nations General Assembly. She served as chair of the Human Rights Commission and worked tirelessly to draft the Universal Declaration of Human Rights which was adopted by the General Assembly on December 10, 1948. \n In 1953, Mrs. Roosevelt dutifully resigned from the United States Delegation to the United Nations, so that incoming Republican President Dwight Eisenhower could fill the position with an appointee of his own choosing. She then volunteered her services to the American Association for the U. N., and was an American representative to the World Federation of the U. N. Associations. She later became the chair of the Associations' Board of Directors. She was reappointed to the United States Delegation to the U. N. by President Kennedy in 1961. Later he appointed her to the National Advisory Committee of the Peace Corps and chair of the President's Commission on the Status of Women. Mrs. Roosevelt became a recognized leader in promoting humanitarian efforts. \n She was in great demand as a speaker and lecturer. Like her husband had done with radio, she also made effective use of the emerging technology of television. She was a prolific writer with many articles and books to her credit including a multi-volume autobiography. \n In her later years, Mrs. Roosevelt lived at Val-Kill in Hyde Park, New York. She also maintained an apartment in New York City. She died on November 7, 1962, and is buried alongside her husband in the Rose Garden of their estate at Hyde Park, now a national historic site.";
  const content = "1. Lynn Ruth Miller's journey in the comedy industry \n Lynn Ruth Miller's journey in the comedy industry began in the late 1970s. After college, she moved to Los Angeles and worked as a waitress and bartender while trying to break into show business. She eventually became a stand-up comic, performing at various comedy clubs in the area. \n In the 1980s, Lynn Ruth Miller began to make a name for herself as a comedian. She was known for her quick wit and sharp, off-the-cuff remarks. She gained more recognition when she started appearing on television shows such as An Evening at the Improv and Comic Strip Live. She also made appearances on The Tonight Show Starring Johnny Carson and Late Night with David Letterman. \n By the 1990s, Lynn Ruth Miller had established herself as a comedy icon. She was a regular guest on The Howard Stern Show and appeared in films and television shows such as Seinfeld, The King of Queens, and The Golden Girls. She also released her first stand-up special, Lynn Ruth Miller: Live from the Improv in 1993. \n In the 2000s, Lynn Ruth Miller continued to perform stand-up around the world, including shows in Australia, Canada, and the United Kingdom. She was also featured in the documentary film Last Laugh \n 2. Breaking barriers as a female comedian \n Lynn was determined to break down the barriers that stood in her way as a female comedian. She was determined to prove that women could be just as successful as men in the world of comedy. \n Lynn began to make a name for herself in the comedy world by writing and performing her own material. She began performing in small comedy clubs throughout Los Angeles and quickly developed a reputation for her quick wit and original jokes. \n Lynn's popularity began to grow, and soon she was performing in larger venues and in front of bigger audiences. With each show, Lynn continued to prove that a female comedian could be just as funny and successful as male comics. \n Lynn continued to write new material and refine her comedic style, and before long she was in demand by television executives. She made her first appearance on a major television show in 1986 and quickly became a regular guest performer. \n Lynn's success on television opened up even more opportunities for her. She became a popular guest on many major talk shows and was the first female comedian to have her own HBO special. \n Lynn's success and influence has had a major impact on the comedy world. She has inspired many female comics to pursue their dreams and break down the barriers that have historically stood \n 3. Empowering women through laughter \n Lynn had always had a passion for using humor to bring joy to people’s lives. As a young girl growing up in a small town in Michigan, she often found herself laughing at the smallest things, even if no one else was. She loved making her family and friends laugh, and she soon became known as the 'class clown'. \n Lynn carried this passion into her adult life. She began using her humor to empower women in her community. She would often tell jokes and stories at local events that focused on the struggles that women face, and she found that her words resonated with her female audience. She would also use her comedy to challenge gender roles and change the way people thought about women. \n Lynn soon gained a reputation as a rising star in the comedy world. She was invited to perform at larger venues and was featured on television and radio shows. With her newfound fame, Lynn was able to reach a larger audience and spread her message of female empowerment through laughter. \n Lynn also began using her platform to advocate for women’s rights. She used her comedy to challenge traditional gender roles and stereotypes and to show her audience that women can be strong and successful. She was a passionate speaker on topics ranging \n 4. Balancing comedy and advocacy \n Lynn Ruth Miller continued to be a vocal advocate for the inclusion of women in society after the end of her Romper Room show. She appeared at comedy clubs, conventions, and festivals across the country, spreading her message of empowerment and advocacy through her hilarious jokes. People from all walks of life would come to see her perform, and she was soon known for her down-to-earth storytelling and her sharp wit. \n In addition to her comedy, Lynn Ruth Miller used her platform to push for equal pay, better representation in the workplace, and better opportunities for young women. She also spoke out against gender-based discrimination and encouraged women to reach for their goals and pursue their dreams. Her advocacy was met with enthusiasm, and she became a respected voice in the fight for women's rights. \n Lynn Ruth Miller's commitment to education and advocacy for women's rights continued to grow after the end of her Romper Room show. She spoke at universities, women's organizations, and conventions, and she wrote articles and books on the importance of advocating for women's rights. Her hard work and dedication to the cause has made her a role model for women of all ages, and her commitment to empowering women has been an inspiration to many. \n 5. Leaving a lasting impact on the comedy industry \n Lynn Ruth Miller left a lasting impact on the comedy industry. In addition to her work in the community, Miller is a celebrated author and performer. At the age of 70, Miller decided to pursue her passion for comedy and began performing as a stand-up comedian and cabaret performer. She wrote her first book, 'Old Age Ain't No Place for Sissies', which was published in 2004. She also released several comedy albums and appeared on numerous television shows. \n Lynn's comedic career was incredibly successful. She performed in venues all over the country, including comedy clubs, conventions, and festivals. Her down-to-earth storytelling and her hilarious jokes earned her fans from all walks of life. People of all ages and backgrounds would come to see her perform, and it wasn't long before she was known as a comedic icon. \n In addition to her comedy career, Lynn Ruth Miller is also an advocate for women's rights. She wrote and performed material that addressed the challenges faced by women in a male-dominated society. Her work has inspired and empowered women to pursue their dreams and has helped to redefine the roles of women in society. \n Lynn Ruth Miller's comedic career and her advocacy for women's rights have left a lasting"
  
  const pageLength = 1580;
    const words = content.split(' ');
    const pages = [];
    let currentPageText = '';

    for (const word of words) {
      if ((currentPageText + word + ' ').length > pageLength) {
        pages.push(currentPageText);
        currentPageText = '';
      }
      currentPageText += word + ' ';
    }

    if (currentPageText.trim() !== '') {
      pages.push(currentPageText);
    }

    setPages(pages);
    setLoading(false);
  }, []);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '5%', height: '60vh', width: '80%', border: '5px solid #C73C1E', position: 'relative' }}>
      {loading ? (
        <Typography variant="h6" component="div" style={{ marginTop: '25%', fontFamily: 'Courier' }}>
          Loading content...
        </Typography>
      ) : (
        <Grid container style={{ height: '100%' }}>
          {currentPage === 0 && (
            <Grid item xs={12}>
              <Typography variant="h4" component="div" style={{ textAlign: 'center', marginTop: '15%', fontFamily: 'Courier' }}>
              Lynn Ruth Miller
              </Typography>
            </Grid>
          )}
          {currentPage > 0 && (
            <>
              <Grid item xs={12} sm={6} style={{ borderRight: '1px solid #ccc' }}>
                <Typography variant="body1" style={{ marginTop: 20, fontFamily: 'Courier', textAlign: 'left', marginLeft: 20, marginRight: 20 }}>
                  {pages[currentPage - 1]}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" style={{ marginTop: 20, fontFamily: 'Courier', textAlign: 'left', marginLeft: 20, marginRight: 20 }}>
                  {pages[currentPage]}
                </Typography>
              </Grid>
            </>
          )}
        </Grid>
      )}
      <div style={{ position: 'absolute', bottom: '10px', left: 0, right: 0, display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
        <ArrowBackIcon style={{ color: '#C73C1E', cursor: 'pointer' }} onClick={prevPage} disabled={currentPage === 0} />
        <ArrowForwardIcon style={{ color: '#C73C1E', cursor: 'pointer' }} onClick={nextPage} disabled={currentPage === pages.length - 1} />
      </div>
    </Paper>
  );
};

export default BookReader;
