import React, {useState, useEffect} from 'react';
import Text from '../../components/Text';
import ContentEdit from '../../components/ContentEdit';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../../components/LoadingComponent';

const Launch = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 100); 

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
      <Text text="Edit Biography" fontSize="1em" textColor="#C73C1E" />
      <div className="form-container" style={{ margin: '15px 0' }}>
        <Text text="as generated through audio recordings" fontSize="0.5em" textColor="#000000" />
      </div>
      <ContentEdit id={id} />
      </>
      )}
    </div>
  );
};

export default Launch;
