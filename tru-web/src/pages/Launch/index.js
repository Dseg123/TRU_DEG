import React from 'react';
import TypeWriteText from '../../components/TypeWriteText';
import './index.css';
import { Link } from 'react-router-dom';
import Text from '../../components/Text';

const Launch = () => {
  const message = 'A story \n To Remember U';

  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TypeWriteText message={message} />
        <div style={{ margin: '20px 0' }}>
          <Text text="TRU." fontSize="1.5em" textColor="#C73C1E" />
        </div>
        <div style={{ margin: '35px 0' }}>
          <Text text="Are you continuing an existing biography or" fontSize="0.5em" textColor="000000" />
          <Text text="making a new one?" fontSize="0.5em" textColor="000000" />
        </div>
        <div style={{ margin: '50px 0', display: 'flex', justifyContent: 'center' }}>
          <Link to="/old-biography">
            <Text text="Continue" fontSize="0.5em" textColor="#C73C1E" />
          </Link>
          <div style={{ width: '50px' }}></div>
          <Link to="/new-biography">
            <Text text="New Biography" fontSize="0.5em" textColor="#C73C1E" />
          </Link>  
        </div>
      </div>
      {/* <BookReader /> */}
    </div>
  );
};

export default Launch;
