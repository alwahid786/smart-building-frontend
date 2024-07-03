/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Formik, Form, ErrorMessage } from 'formik'
import { photosInfoSchema } from '../../../../../../schema'
import CardPhotos from './CardPhotos'

const PhotosInfo = ({ handleNext }) => {
  const [selectedImages, setSelectedImages] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleImageChange = (event, setFieldValue) => {
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
      setFieldValue(
        'photos',
        uploadableFiles.map((file) => ({
          file: file,
          path: URL.createObjectURL(file),
        }))
      )
    }
  }

  const deleteImage = (index, setFieldValue) => {
    // setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index))
    // setFieldValue('photos', (prev) => prev.filter((_, i) => i !== index))
    console.log('deleted successfull')
  }

  const handleSubmit = async (values, actions) => {
    try {
      setIsLoading(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log('Selected Images:', values.photos)

      actions.resetForm()
      setSelectedImages([])
      setIsLoading(false)
      await handleNext()
    } catch (error) {
      console.error('Submission error:', error)
      setIsLoading(false)
    }
  }

  return (
    <Formik
      initialValues={{ photos: [] }}
      validationSchema={photosInfoSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form>
          <Box>
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
                  <CardPhotos
                    image={image}
                    deleteImage={() => deleteImage(index, setFieldValue)}
                  />
                </Grid>
              ))}
            </Grid>
            <input
              type="file"
              id="file"
              multiple
              onChange={(event) => handleImageChange(event, setFieldValue)}
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
            <ErrorMessage
              name="photos"
              component="div"
              style={{ color: 'red', fontSize: '12px' }}
            />
            {error && (
              <Typography
                color="error"
                variant="body2"
                sx={{ color: 'red', fontSize: '12px' }}
              >
                {error}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              marginTop: '20px',
              display: 'flex',
              gap: '10px',
              justifyContent: 'end',
            }}
          >
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
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : 'Next'}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default PhotosInfo
