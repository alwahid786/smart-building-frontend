/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import CardPhotos from './CardPhotos'
import { AppContext } from '../../../../../../context/context'

const PhotosInfo = ({ handleNext, handleBack }) => {
  const [error, setError] = useState('')
  const [photos, setPhotos] = useState([])
  const { userData, setUserData } = useContext(AppContext)
  const [selectedImages, setSelectedImages] = useState(
    userData?.selectedImages || []
  )

  const handleImageChange = (event) => {
    const files = event.currentTarget.files
    if (files) {
      const filesArray = Array.from(files)
      const MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB limit

      // Filter out images larger than 2MB
      const uploadableFiles = filesArray.filter(
        (file) => file.size <= MAX_FILE_SIZE
      )
      const rejectedFiles = filesArray.filter(
        (file) => file.size > MAX_FILE_SIZE
      )

      if (rejectedFiles.length > 0) {
        setError(
          `The following file(s) exceed the 2MB size limit and won't be uploaded: ${rejectedFiles
            .map((file) => file.name)
            .join(', ')}`
        )
      } else {
        setError('')
      }

      if (uploadableFiles.length + selectedImages.length > 10) {
        setError('You can only upload up to 10 images.')
        return
      }

      const newImages = uploadableFiles.map((file) => URL.createObjectURL(file))
      setSelectedImages((prevImages) => [...prevImages, ...newImages])
      setPhotos((prevPhotos) => [
        ...prevPhotos,
        ...uploadableFiles.map((file) => ({
          file: file,
          path: URL.createObjectURL(file),
        })),
      ])
    }
  }

  // useEffect(() => {
  //   console.log('Images are', userData.selectedImages)
  // }, [userData.selectedImages])

  useEffect(() => {
    setUserData({ ...userData, selectedImages })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImages])

  const deleteImage = (index) => {
    const newSelectedImages = selectedImages.filter((_, i) => i !== index)
    const newPhotos = photos.filter((_, i) => i !== index)
    setSelectedImages(newSelectedImages)
    setPhotos(newPhotos)
  }

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (event) => {
    handleNext()
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
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
        {selectedImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={3} xl={2} key={index}>
            <CardPhotos image={image} deleteImage={() => deleteImage(index)} />
          </Grid>
        ))}
      </Grid>
      <input
        type="file"
        id="file"
        multiple
        onChange={handleImageChange}
        style={{ display: 'none' }}
        accept="image/*"
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
          disabled={selectedImages.length >= 10}
        >
          Drop your file here or &nbsp;{' '}
          <Box sx={{ color: '#B029FC' }}> browse</Box>
        </Button>
      </label>
      {error && (
        <Typography
          color="error"
          variant="body2"
          sx={{ color: 'red', fontSize: '12px' }}
        >
          {error}
        </Typography>
      )}
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
          onClick={handleBack}
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
          type="submit"
          variant="contained"
        >
          Next
        </Button>
      </Box>
    </Box>
  )
}

export default PhotosInfo
