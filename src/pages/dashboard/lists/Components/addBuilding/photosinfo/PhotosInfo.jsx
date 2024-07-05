import { Box, Button, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import CardPhotos from './CardPhotos';
import PropTypes from 'prop-types'; 
import { useAddBuildingMutation } from '../../../../../../redux/api/buildingApi';

const PhotosInfo = ({ handleNext, handleBack, buildingId }) => {
  const [selectedFiles, setSelectedFiles] = useState([]); // State to store selected files
  const [addBuilding] = useAddBuildingMutation();
  
  // Handle file selection
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to Array
    setSelectedFiles(files); // Update state with selected files
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  

    try {
      // Create a FormData object to send selected files
      const formData = new FormData();
      formData.append('buildingId', buildingId); // Append buildingId to FormData
      selectedFiles.forEach((file) => {
        formData.append('images', file); // Append each file to the FormData with the key 'images'
      });

      // Use the mutation to send the files to the backend
      const res = await addBuilding(formData).unwrap();

      console.log(res); // Handle the response if needed
      handleNext(); // Proceed to the next step after successful upload
    } catch (error) {
      console.error("Failed to upload images:", error); // Log error message to console

    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Box sx={{ textAlign: 'center', marginY: '24px' }}>
        <Typography sx={{ fontWeight: '500', fontSize: '20px', lineHeight: '30px', color: '#414141' }}>
          Upload Building Photos
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {selectedFiles.length > 0 ? (
          selectedFiles.map((file, index) => (
            <Grid item xs={12} sm={6} md={3} xl={2} key={index}>
              <CardPhotos image={URL.createObjectURL(file)} /> {/* Display selected image */}
            </Grid>
          ))
        ) : (
          <Grid item xs={12} sm={6} md={3} xl={2}>
            <CardPhotos image={"https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
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

// PropTypes validation
PhotosInfo.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  buildingId: PropTypes.string.isRequired, // Ensure buildingId is a required string prop
};

export default PhotosInfo;
