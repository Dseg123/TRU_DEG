import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingComponent = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
      height: '100vh' // 100% viewport height
    }}
  >
    <CircularProgress style={{ fontSize: '48px', width: '48px' }} />
  </div>
);

export default LoadingComponent;
