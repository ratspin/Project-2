import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {SeeMoreText,SeeNutrients,DialogImage} from './Styled'

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = ()    => {setOpen(true);};
  const handleClose = ()        => {setOpen(false);};

  return (
    <div>
      <SeeNutrients onClick={handleClickOpen}> ข้อมูลวัตถุดิบ</SeeNutrients> 

      <Dialog open={open} onClose={handleClose} >
        <DialogContent>
          <DialogImage src= "food/กุ้งอบวุ้นเส้น.png" alt= "กุ้งอบวุ้นเส้น" />       
        </DialogContent>
        <DialogActions>
          <SeeMoreText onClick={handleClose}>Close</SeeMoreText>
        </DialogActions>
      </Dialog>
    </div>
  );
}