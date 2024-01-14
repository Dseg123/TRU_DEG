import React from 'react';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <IconButton component={Link} to="/" style={{ color: '#C73C1E' }}>
      <HomeIcon />
    </IconButton>
  );
};

export default HomeButton;
