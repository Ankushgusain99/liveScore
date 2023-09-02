import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import React from 'react'

const CustomDialog = (props) => {
  return (
    <Dialog open={props?.open} onClose={props?.handleClose}>
        <DialogTitle id="alert-dialog-title">Match Detail....</DialogTitle>
        <DialogContent>

            <DialogContentText id="alert-dialog-description">
                <Typography >{props?.match?.venue}</Typography>
                <Typography >{props?.match?.status}</Typography>
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={props?.handleClose} color="secondary" autoFocus>
                Close
            </Button>
        </DialogActions>
    </Dialog>
  )
}

export default CustomDialog
