import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FileUpload = ({ insertedId }) => {
  const navigate = useNavigate();
  const buttonStyle = {
    fontFamily: 'Courier',
    backgroundColor: '#C73C1E',
    color: '#ffffff',
    margin: '10px'
  };
  const [selectedAudioFile, setSelectedAudioFile] = useState(null);
  const [selectedTextFile, setSelectedTextFile] = useState(null);

  const handleAudioFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.type.startsWith('audio/')) {
        setSelectedAudioFile(file);
      } else {
        alert('Please select an appropriate audio file.');
      }
    }
  };

  const handleTextFileChange = (event) => {
    const file = event.target.files[0];

    if (file) if (file.type === 'text/plain') setSelectedTextFile(file);
  };

  const processFiles = async () => {
    if (selectedAudioFile) {
      const reader = new FileReader();

      reader.onload = async (event) => {
        const fileData = event.target.result; // Contains the audio file data as ArrayBuffer
        console.log('Audio File Data (ArrayBuffer):', fileData);
        const audioBlob = new Blob([fileData], { type: selectedAudioFile.type });
        console.log('Audio File Data (Blob):', audioBlob);

        const formData = new FormData();
        formData.append('audioBlob', audioBlob);
        formData.append('insertedId', insertedId);
        const response = await fetch('http://localhost:5000/add_audio', {
          method: 'POST',
          body: formData
        });

        if (response.status === 200) {
          const newId = await response.text();
          // Successfully processed
          navigate(`/edit?id=${newId}`);
        } else {
          // Handle errors
          alert('Failed to process the file.');
        }
      };
      reader.readAsArrayBuffer(selectedAudioFile);
    } else {
      alert('Please select an audio file first.');
    }

    if (selectedTextFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileData = event.target.result; // Contains the text file data as ArrayBuffer
        console.log('Text File Data (ArrayBuffer):', fileData);
        const textBlob = new Blob([fileData], { type: selectedTextFile.type });
        console.log('Text File Data (Blob):', textBlob);
      };
      reader.readAsArrayBuffer(selectedTextFile);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography style={{ fontFamily: 'Courier', marginTop: '10px' }}>Upload an audio file:</Typography>
        </Grid>
        <Grid item xs={2}>
          <input
            type="file"
            accept="audio/*"
            onChange={handleAudioFileChange}
            style={{ display: 'none' }}
            id="audio-file-upload"
          />
          <label htmlFor="audio-file-upload">
            <Button variant="contained" style={buttonStyle} component="span">
              Browse
            </Button>
          </label>
        </Grid>
      </Grid>
      {selectedAudioFile && (
        <Typography style={{ fontFamily: 'Courier', marginTop: '10px', fontStyle: 'italic' }}>
          Uploaded Audio File: {selectedAudioFile.name}
        </Typography>
      )}
      <div style={{ margin: '10% 0' }}></div>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography style={{ fontFamily: 'Courier', marginTop: '10px' }}>Upload a transcript (.txt) file:</Typography>
        </Grid>
        <Grid item xs={2}>
          <input
            type="file"
            accept=".txt"
            onChange={handleTextFileChange}
            style={{ display: 'none' }}
            id="text-file-upload"
          />
          <label htmlFor="text-file-upload">
            <Button variant="contained" style={buttonStyle} component="span">
              Browse
            </Button>
          </label>
        </Grid>
      </Grid>
      {selectedTextFile && (
        <Typography style={{ fontFamily: 'Courier', marginTop: '10px', fontStyle: 'italic' }}>
          Uploaded Text File: {selectedTextFile.name}
        </Typography>
      )}
      <div style={{ margin: '10% 0' }}></div>

      <Button variant="contained" style={buttonStyle} onClick={processFiles}>
        Process
      </Button>
    </div>
  );
};

export default FileUpload;
