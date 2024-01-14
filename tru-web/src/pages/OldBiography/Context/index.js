import React, { useState } from 'react';
import Text from '../../../components/Text';
import './index.css';
import BiographyForm from '../../../components/BiographyForm';
import OldContent from '../OldContent';

const Context = () => {
  const [showContent, setShowContent] = useState(false);
  const handleNextClick = () => {
    setShowContent(true);
  };

  const initialValues = {
    subject: 'Lynn Ruth Miller',
    relationship: 'grandma',
    birthYear: '1884',
    authorName: 'Maggie Wang',
    pronouns: 'she/her',
    briefSummary: 'She was a boss lady.'
  };

  return (
    <div>
      {showContent ? (
        <OldContent name={initialValues.subject}/>
      ) : (
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Text text="Initial Context" fontSize="1em" textColor="#C73C1E" />
            <div className="form-container" style={{ margin: '25px 0' }}>
              <BiographyForm onButtonClick={handleNextClick} initialValues={initialValues}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Context;
