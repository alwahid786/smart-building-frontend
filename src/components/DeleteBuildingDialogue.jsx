/* eslint-disable react/prop-types */
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import imageUrl from '../asset/Images/list/Rectangle.png'
import { Box, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export const DeleteBuildingDialogue = ({
  dialogueOpen,
  handleNo,
  handleYes,
}) => {
  return (
    <Dialog
      open={dialogueOpen}
      onClose={handleNo}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <img src={imageUrl} alt="image" />

      <Box
        sx={{
          position: 'absolute',
          top: 10,
          left: 10,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            background: '#f83d44',
            color: 'white',
            p: 0.5,

            height: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.75rem',
            borderRadius: '4px',
          }}
        >
          Delete Building
        </Typography>
      </Box>

      <DialogContent>
        <DialogContentText sx={{ color: 'red', fontSize: '13px' }}>
          Owner Name
        </DialogContentText>
        <DialogContentText
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            color: 'red',
          }}
        >
          <Typography sx={{ fontSize: '18px' }}>Building name</Typography>
          <Typography sx={{ fontSize: '15px' }}>Building Id:</Typography>
        </DialogContentText>

        <DialogContentText sx={{ color: 'black', fontSize: '14px' }}>
          Are you sure you want to permanently delete this building? This cannot
          be undone and all details will be lost.
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="outlined"
          sx={{
            color: 'black',
            border: '1px solid black',
            '&:hover': {
              color: 'black',
              border: '1px solid black',
            },
          }}
          onClick={handleNo}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            color: 'white',
            background: '#f83d44',
            '&:hover': {
              background: '#f83d44',
              // border: '1px solid red',
              color: 'white',
            },
          }}
          autoFocus
          onClick={handleYes}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export const VerifyDeleteBuilding = ({
  confirmDialogueOpen,
  handleCancel,
  confirmDelete,
}) => {
  const [buildingId, setBuildingId] = useState(1234)
  const [inputId, setInputId] = useState()
  const [isDelDisable, setIsDelDisable] = useState(true)

  useEffect(() => {
    if (String(inputId) === String(buildingId)) {
      setIsDelDisable(false)
    } else {
      setIsDelDisable(true)
    }
  }, [inputId, buildingId])
  return (
    <Dialog
      open={confirmDialogueOpen}
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <img src={imageUrl} alt="image" />

      <Box
        sx={{
          position: 'absolute',
          top: 10,
          left: 10,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            background: '#f83d44',
            color: 'white',
            p: 1,

            height: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.75rem',
            borderRadius: '4px',
          }}
        >
          Verify Deletion
        </Typography>
      </Box>

      <DialogContent>
        <DialogContentText sx={{ color: 'red', fontSize: '13px' }}>
          Owner Name
        </DialogContentText>
        <DialogContentText
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            color: 'red',
          }}
        >
          <Typography sx={{ fontSize: '18px' }}>Building name</Typography>
          <Typography sx={{ fontSize: '15px' }}>
            Building Id: {buildingId}
          </Typography>
        </DialogContentText>

        <DialogContentText
          sx={{ color: 'black', fontSize: '14px', marginY: '10px' }}
        >
          <TextField
            fullWidth
            size="small"
            placeholder="Enter Building ID"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="outlined"
          sx={{
            color: 'black',
            border: '1px solid black',
            '&:hover': {
              color: 'black',
              border: '1px solid black',
            },
          }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            color: 'white',
            background: '#f83d44',
            '&:hover': {
              background: '#f83d44',
              // border: '1px solid red',
              color: 'white',
            },
            // '&:disabled': {
            //   opacity: '0.9',
            //   cursor: 'not-allowed',
            // },
          }}
          disabled={isDelDisable}
          autoFocus
          onClick={confirmDelete}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}
