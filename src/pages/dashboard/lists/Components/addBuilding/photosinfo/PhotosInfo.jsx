// src/components/PhotosInfo.js
import { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import CardPhotos from './CardPhotos';
import { useDispatch } from 'react-redux';
import { addSelectedFiles } from '../../../../../../redux/reducers/formReducer';

const PhotosInfo = ({ handleNext, handleBack }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    const newFiles = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);

    // Dispatch selected files to Redux store
    dispatch(addSelectedFiles(newFiles));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNext(); // Proceed to the next step
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Box sx={{ textAlign: 'center', marginY: '24px' }}>
        <Typography sx={{ fontWeight: '500', fontSize: '20px', lineHeight: '30px', color: '#414141' }}>
          Upload Building Photos
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {selectedFiles.map(({ url }, index) => (
          <Grid item xs={12} sm={6} md={3} xl={2} key={index}>
            <CardPhotos image={url} />
          </Grid>
        ))}
      </Grid>

      <input
        type="file"
        id="file"
        multiple
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileChange}
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
          Drop your file here or &nbsp;{' '}
          <Box sx={{ color: '#B029FC' }}>browse</Box>
        </Button>
      </label>

      <Box sx={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'end' }}>
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
          sx={{ color: '#7B42F6', textTransform: 'none', border: '1px solid #7B42F6', fontSize: '20px', padding: '0 30px' }}
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
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default PhotosInfo;
