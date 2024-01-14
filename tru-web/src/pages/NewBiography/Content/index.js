import React from 'react';
import Text from '../../../components/Text';
import FileUpload from '../../../components/FileUpload';
const Content = ({ insertedId }) => {
  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Text text="Content" fontSize="1em" textColor="#C73C1E" />
        <div className="form-container" style={{ margin: '25% 0' }}>
          <FileUpload insertedId={insertedId} />
        </div>
      </div>
    </div>
  );
};

export default Content;
