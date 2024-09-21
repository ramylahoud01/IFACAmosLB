import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import AnnouncementIcon from '@mui/icons-material/Announcement';


const MessageDialog = ({ open, onClose,content }) => {
    return (
        <Dialog open={open} onClose={onClose} className="dialog-content" >
        <DialogTitle><AnnouncementIcon style={{fontSize:"30px"}}></AnnouncementIcon></DialogTitle>
        <DialogContent >
        {content}
        </DialogContent>
        <DialogActions>
          <button onClick={onClose} color="primary">
            Ok
          </button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default MessageDialog;