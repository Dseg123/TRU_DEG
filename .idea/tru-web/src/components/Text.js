import React from 'react';

const Text = ({ text, fontSize, textColor }) => {
  const textStyle = {
    fontFamily: 'Courier, monospace',
    fontSize,
    color: textColor,
  };

  return (
    <div style={textStyle}>
      {text}
    </div>
  );
};

export default Text;
