import {
  Box,
  Button,
  Grid,
  Typography,
  CircularProgress,
  Backdrop,
} from '@mui/material'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectBuildingData,
  selectSelectedFiles,
  setSelectedFiles,
} from '../../../../../../redux/reducers/formReducer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DialoguePermission from '../../../../../../components/DialoguePermission'
import SinglePhoto from './SinglePhoto'

const UpdatePhotos = ({ handleNext, handleBack }) => {
  // Dialogue state and function

  const [dialogueOpen, setDialogueOpen] = useState(false)

  const handleNo = () => {
    setDialogueOpen(false)
  }

  const [loading, setLoading] = useState(false) // State to manage loading
  const buildingData = useSelector(selectBuildingData)
  const selectedFiles = useSelector(selectSelectedFiles)
  const dispatch = useDispatch()

  useEffect(() => {
    setBuildingDetails(buildingData)
  }, [buildingData])

  // Handle file selection
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files) // Convert FileList to Array
    dispatch(setSelectedFiles([...selectedFiles, ...files])) // Append new files to the existing state
  }

  // Handle file deletion
  const handleFileDelete = () => {
    setDialogueOpen(true)
  }

  const handleYes = (index) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index)
    dispatch(setSelectedFiles(updatedFiles))
    console.log('Deletedsuccessfully')
    handleNo()
  }

  // Handle file editing
  const handleFileEdit = (index) => {
    document.getElementById('file').click()
    const editFileHandler = (event) => {
      const updatedFiles = [...selectedFiles]
      updatedFiles[index] = event.target.files[0]
      dispatch(setSelectedFiles(updatedFiles))
      document
        .getElementById('file')
        .removeEventListener('change', editFileHandler)
    }
    document.getElementById('file').addEventListener('change', editFileHandler)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true) // Set loading to true when submission starts

    handleNext()
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {/* Add ToastContainer at a top level */}
      <ToastContainer />

      {/* Full-screen loader */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Box sx={{ textAlign: 'center', marginY: '24px' }}>
        <Typography
          sx={{
            fontWeight: '500',
            fontSize: '20px',
            lineHeight: '30px',
            color: '#414141',
          }}
        >
          Upload Building Photos
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {selectedFiles.length > 0 ? (
          selectedFiles.map((file, index) => (
            <Grid item xs={12} sm={6} md={3} xl={2} key={index}>
              <SinglePhoto
                image={URL.createObjectURL(file)}
                onDelete={() => handleFileDelete(index)} // Handle image deletion
                onEdit={() => handleFileEdit(index)} // Handle image editing
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12} sm={6} md={3} xl={2}>
            <Typography>No photos Available</Typography>
          </Grid>
        )}
      </Grid>

      <input
        type="file"
        id="file"
        multiple
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileChange} // Handle file selection
      />
      <label htmlFor="file">
        <Button
          sx={{
            border: '2px dashed #41414180',
            width: '100%',
            textTransform: 'none',
            color: '#41414180',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '27px',
            marginY: '20px',
          }}
          component="span"
        >
          Click here to browse image &nbsp;{' '}
          {/* <Box sx={{ color: '#B029FC' }}>browse</Box> */}
        </Button>
      </label>

      <Box
        sx={{
          marginTop: '20px',
          display: 'flex',
          gap: '10px',
          justifyContent: 'end',
        }}
      >
        <Button
          sx={{
            backgroundImage: 'linear-gradient(to right, #7E3FF6, #AC20FE)',
            padding: '0 40px',
            fontSize: '20px',
            textTransform: 'none',
            ':disabled': {
              color: 'white',
              opacity: '0.5',
              cursor: 'not-allowed',
            },
          }}
          variant="contained"
          onClick={handleBack} // Go back to previous step
        >
          Back
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: '#7B42F6',
            textTransform: 'none',
            border: '1px solid #7B42F6',
            fontSize: '20px',
            padding: '0 30px',
          }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          sx={{
            backgroundImage: 'linear-gradient(to right, #7E3FF6, #AC20FE)',
            padding: '0 40px',
            fontSize: '20px',
            textTransform: 'none',
            ':disabled': {
              color: 'white',
              opacity: '0.5',
              cursor: 'not-allowed',
            },
          }}
          variant="contained"
          disabled={loading}
        >
          Next
        </Button>
        <DialoguePermission
          // message="Are you sure you want to delete this image?"
          dialogueOpen={dialogueOpen}
          handleYes={handleYes}
          handleNo={handleNo}
        />
      </Box>
    </Box>
  )
}

// PropTypes validation
UpdatePhotos.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
}

export default UpdatePhotos
