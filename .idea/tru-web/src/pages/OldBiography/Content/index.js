import React from 'react';
import Text from '../../../components/Text';
import FileUpload from '../../../components/FileUpload';
import './index.css';

const Content = () => {
  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Text text="Additional Content" fontSize="1em" textColor="#C73C1E" />
        <div className="form-container" style={{ margin: '25% 0' }}>
          <FileUpload />
        </div>
      </div>
    </div>
  );
};

export default Content;
