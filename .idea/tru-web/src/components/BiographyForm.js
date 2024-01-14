import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const BiographyForm = ({ onButtonClick, initialValues }) => {
  const [biographyData, setBiographyData] = useState({
    subject: '',
    relationship: '',
    birthYear: '',
    authorName: '',
    pronouns: '',
    briefSummary: ''
  });

  useEffect(() => {
    if (initialValues) {
      setBiographyData(initialValues);
    }
  }, [initialValues]);

  const buttonStyle = {
    fontFamily: 'Courier',
    backgroundColor: '#C73C1E',
    color: '#ffffff'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBiographyData({ ...biographyData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/add_meta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(biographyData)
    });

    const insertedId = await response.text();
    console.log('Inserted id', insertedId);
    onButtonClick(insertedId);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography style={{ fontFamily: 'Courier', marginTop: '15px' }}>
              * Who is the subject of this biography?
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              name="subject"
              value={biographyData.subject}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={{ fontFamily: 'Courier', marginTop: '15px' }}>
              * What is their relationship to you?
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              name="relationship"
              value={initialValues.relationship}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={{ fontFamily: 'Courier', marginTop: '15px' }}>* What year were they born?</Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              name="birthYear"
              value={initialValues.birthYear}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={{ fontFamily: 'Courier', marginTop: '15px' }}>* What is the author's name?</Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              name="authorName"
              value={biographyData.authorName}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={{ fontFamily: 'Courier', marginTop: '15px' }}>* Pronouns of subject?</Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              name="pronouns"
              value={initialValues.pronouns}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={{ fontFamily: 'Courier', marginTop: '10%' }}>
              If possible, give us a brief summary of their background:
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              name="briefSummary"
              value={initialValues.briefSummary}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={6}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" style={buttonStyle}>
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default BiographyForm;
