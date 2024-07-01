import React, { useState } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import CardPhotos from './CardPhotos'

const PhotosInfo = () => {
  const [selectedImages, setSelectedImages] = useState([])
  const [error, setError] = useState('')

  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      if (filesArray.length + selectedImages.length > 10) {
        setError('You can only upload up to 10 images.')
        return
      }
      const newImages = filesArray.map((file) => URL.createObjectURL(file))
      setSelectedImages((prevImages) => prevImages.concat(newImages))
      setError('')
      filesArray.forEach((file) => URL.revokeObjectURL(file)) // avoid memory leak
    }
  }

  return (
    <Box>
      <Box sx={{ textAlign: 'center', marginY: '24px' }}>
        {' '}
        <Typography
          sx={{
            fontWeight: '500',
            fontSize: '20px',
            lineHeight: '30px',
            color: '#414141',
          }}
        >
          Upload Photos
        </Typography>{' '}
      </Box>
      <Grid container spacing={1}>
        {selectedImages.map((image, index) => (
          <CardPhotos image={image} key={index} />
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
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}
    </Box>
  )
}

export default PhotosInfo
