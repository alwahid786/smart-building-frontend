/* eslint-disable react/prop-types */

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

const DialoguePermission = ({ dialogueOpen, handleNo, handleYes, message }) => {
  return (
    <Dialog
      open={dialogueOpen}
      onClose={handleNo}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>{'Confirmation!'}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleNo}>No</Button>
        <Button autoFocus onClick={handleYes}>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialoguePermission
