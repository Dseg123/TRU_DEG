import React, { useState, useEffect } from 'react';
import './index.css';
import BookReader from '../../components/BookReader';
import Text from '../../components/Text';
import ShareButton from '../../components/ShareButton';
import HomeButton from '../../components/HomeButton';
import LoadingComponent from '../../components/LoadingComponent';

const Biography = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 90-second loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 seconds in milliseconds

    return () => {
      // Clear the timeout when the component unmounts
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {isLoading ? ( // Display the loading screen while isLoading is true
        <div style={{ margin: '20px 0' }}>
          <LoadingComponent />
        </div>
      ) : (
        <>
          <div style={{ position: 'absolute', top: 5, left: 10 }}>
            <HomeButton />
          </div>
          <div style={{ position: 'absolute', top: 5, right: 10 }}>
            <ShareButton />
          </div>
          <div style={{ margin: '20px 0' }}>
            {/* <Text text="Anna Eleanor Roosevelt " fontSize="2em" textColor="#C73C1E" /> */}
            <Text text="Lynn Ruth Miller " fontSize="2em" textColor="#C73C1E" /> 
          </div>

          <BookReader />
        </>
      )}
    </div>
  );
};

export default Biography;
