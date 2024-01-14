import React from 'react';
import { TypeAnimation } from 'react-type-animation'; 

const TypeWriteText = ({ message }) => {

   return (
      <div style={{ fontFamily: 'Courier, monospace' }}>
      <TypeAnimation
         sequence={[
            message,
            1000,
            '',
         ]}
         speed={180}
         style={{ whiteSpace: 'pre-line' }}
         repeat={Infinity}
      />
      </div>
   );
};

export default TypeWriteText;
