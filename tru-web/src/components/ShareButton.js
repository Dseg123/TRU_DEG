import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const ShareButton = () => {
  const [open, setOpen] = useState(false);

  const shareLink = window.location.href;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleOpen} style={{ color: '#C73C1E' }}>
        <ShareIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Share this link</DialogTitle>
        <DialogContent>
          <p>Share the following link:</p>
          <input type="text" value={shareLink} onClick={(e) => e.target.select()} readOnly style={{ width: '100%' }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ShareButton;
