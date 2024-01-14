import React, { useState } from 'react';
import Text from '../../../components/Text';
import './index.css';
import BiographyForm from '../../../components/BiographyForm';
import Content from '../Content';

const Context = () => {
  const [showContent, setShowContent] = useState(false);
  const [insertedId, setInsertedId] = useState(null);
  const handleNextClick = (id) => {
    setInsertedId(id);
    setShowContent(true);
  };

  const initialValues = {
    subject: '',
    relationship: '',
    birthYear: '',
    authorName: '',
    pronouns: '',
    briefSummary: ''
  };
  return (
    <div>
      {showContent ? (
        <Content insertedId={insertedId} /> 
      ) : (
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Text text="Context" fontSize="1em" textColor="#C73C1E" />
            <div className="form-container" style={{ margin: '25px 0' }}>
              <BiographyForm initialValues={initialValues} onButtonClick={handleNextClick} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Context;
