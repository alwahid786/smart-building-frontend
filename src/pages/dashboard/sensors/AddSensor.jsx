import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'
import { useState } from 'react'

const AddSensor = ({ open, handleClose }) => {
  // const handleClickOpen = () => {
  //   setOpen(true)
  // }

  // const handleClose = () => {
  //   setOpen(false)
  // }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          <Box>Add Sensor</Box>
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              marginTop: '10px',
            }}
          >
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <TextField fullWidth size="small" label="Sensor Name" />
              <TextField size="small" label="Topic" />
            </Box>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <TextField fullWidth size="small" label="IP" />
              <TextField fullWidth size="small" label="Port" />
            </Box>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <TextField fullWidth size="small" label="URL" />
            </Box>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <TextField fullWidth size="small" label="Location" />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
          <Button variant="contained">Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddSensor
