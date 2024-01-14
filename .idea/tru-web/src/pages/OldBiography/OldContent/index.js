import React, { useState } from 'react';
import Text from '../../../components/Text';
import OldBiographies from '../../../components/OldBiographies';
import Content from '../Content';
import './index.css';

const OldContent = ({name}) => {
    const [showContent, setShowContent] = useState(false);
    const handleNextClick = () => {
      setShowContent(true);
    };
//   return (
//     <div className="container">
//       <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
//         <Text text={`Prior biographies on ${name}`} fontSize="1em" textColor="#C73C1E" />
//         <div className="form-container" style={{ marginTop: '5%'}}>
//             <OldBiographies />
//         </div>
//       </div>
//     </div>
//   );

    return (
        <div>
        {showContent ? (
            <Content />
        ) : (
            <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <Text text={`Prior biographies on ${name}`} fontSize="1em" textColor="#C73C1E" />
            <div className="form-container" style={{ marginTop: '5%'}}>
                <OldBiographies onButtonClick={handleNextClick} />
            </div>
            </div>
            </div>
        )}
        </div>
    );
};

export default OldContent;
