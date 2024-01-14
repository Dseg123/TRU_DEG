// import React, { useState } from 'react';
// // import axios from 'axios';
// import { saveAs } from 'file-saver';

// const OldBiographies = () => {
// //   const [biographyData, setBiographyData] = useState(null);

// //   useEffect(() => {
// //     Replace with your actual API endpoint
// //     const apiEndpoint = 'https://api.example.com/old-biographies';

// //     axios.get(apiEndpoint)
// //       .then((response) => {
// //         // Assume the response contains { content: '...', datePublished: '...' }
// //         setBiographyData(response.data);
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching data:', error);
// //       });
// //     }, []);

//     const [biographyData] = useState({
//         content: 'This is the content of the old biography...',
//         datePublished: '2022-10-20'
//       });

//     const downloadFile = () => {
//         const blob = new Blob([biographyData.content], { type: 'text/plain;charset=utf-8' });
//         saveAs(blob, `Biography-${biographyData.datePublished}.txt`);
//     };

//     return (
//         <div>
//         {biographyData ? (
//             <>
//             <p>Date Published: {biographyData.datePublished}</p>
//             <button onClick={downloadFile}>Download Biography</button>
//             </>
//         ) : (
//             <p>Loading...</p>
//         )}
//         </div>
//     );
// };

// export default OldBiographies;

import React, { useState } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { saveAs } from 'file-saver';

const OldBiographies = ({onButtonClick}) => {
    const handleSubmit = () => {
        onButtonClick();
    };
    
    const buttonStyle = {
        fontFamily: 'Courier',
        backgroundColor: '#C73C1E',
        color: '#ffffff'
    };

    const downloadStyle = {
        fontFamily: 'Courier',
        backgroundColor: 'transparent',
        color: '#C73C1E',
        border: 'none',
        textDecoration: 'underline',
        boxShadow: 'none'
    };

  // Hardcoded multiple biographies for demonstration
    const [biographies] = useState([
        {
        content: 'This is the content of the first old biography...',
        datePublished: '2022-10-20',
        },
        {
        content: 'This is the content of the second old biography...',
        datePublished: '2022-09-15',
        }
    ]);

    const downloadFile = (biography) => {
        const blob = new Blob([biography.content], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, `Biography-${biography.datePublished}.txt`);
    };

    // Calculate spacing based on the number of biographies
    const spacing = Math.min(10, biographies.length);

    return (
        <Grid container spacing={spacing*2}>
        {biographies.map((biography, index) => (
            <Grid container item xs={12} key={index}>
            <Grid item xs={12}>
                <Typography style={{ fontFamily: 'Courier'}}>Date Published: {biography.datePublished}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Button style={downloadStyle} variant="contained" onClick={() => downloadFile(biography)}>
                Download
                </Button>
            </Grid>
            </Grid>
        ))}
        <Grid item xs={12}>
            <Button type="submit" variant="contained" style={buttonStyle} onClick={handleSubmit}>
                Next
            </Button>
        </Grid>
        </Grid>
    );
};

export default OldBiographies;
