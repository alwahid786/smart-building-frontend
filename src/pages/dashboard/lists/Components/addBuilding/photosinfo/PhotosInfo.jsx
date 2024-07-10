import { Box, Button, Grid, Typography, CircularProgress, Backdrop } from '@mui/material';
import { useEffect, useState } from 'react';
import CardPhotos from './CardPhotos';
import PropTypes from 'prop-types';
import { useAddBuildingMutation } from '../../../../../../redux/api/buildingApi';
import { useDispatch, useSelector } from 'react-redux';
import { selectBuildingData, setBuildingId, selectSelectedFiles, setSelectedFiles } from '../../../../../../redux/reducers/formReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PhotosInfo = ({ handleNext, handleBack }) => {
  const [loading, setLoading] = useState(false); // State to manage loading
  const [addBuilding] = useAddBuildingMutation();
  const buildingData = useSelector(selectBuildingData);
  const selectedFiles = useSelector(selectSelectedFiles);
  const dispatch = useDispatch();
  const [buildingDetails, setBuildingDetails] = useState();

  useEffect(() => {
    setBuildingDetails(buildingData);
  }, [buildingData]);

  // Handle file selection
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to Array
    dispatch(setSelectedFiles([...selectedFiles, ...files])); // Append new files to the existing state
  };

  // Handle file deletion
  const handleFileDelete = (index) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    dispatch(setSelectedFiles(updatedFiles));
  };

  // Handle file editing
  const handleFileEdit = (index) => {
    document.getElementById('file').click();
    const editFileHandler = (event) => {
      const updatedFiles = [...selectedFiles];
      updatedFiles[index] = event.target.files[0];
      dispatch(setSelectedFiles(updatedFiles));
      document.getElementById('file').removeEventListener('change', editFileHandler);
    };
    document.getElementById('file').addEventListener('change', editFileHandler);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when submission starts

    try {
      // Create a FormData object
      const formData = new FormData();

      // Append building details as a JSON string
      formData.append('buildingDetails', JSON.stringify(buildingDetails));

      // Append each selected file to the FormData
      selectedFiles.forEach((file) => {
        formData.append('images', file, file.name);
      });

      // Use the mutation to send the FormData to the backend
      const res = await addBuilding(formData).unwrap();

      // Show success notification
      toast.success(`${res.message}`);

      // Dispatch the building ID to the Redux store
      dispatch(setBuildingId(res.building._id)); // Assuming the response contains a buildingId

      handleNext(); // Proceed to the next step after successful upload
    } catch (error) {
      console.error("Failed to upload images and building data:", error); // Log error message to console

      // Show error notification
      toast.error('Failed to create building. Please try again.');
    } finally {
      setLoading(false); // Set loading to false when submission ends
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {/* Add ToastContainer at a top level */}
      <ToastContainer />

      {/* Full-screen loader */}
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Box sx={{ textAlign: 'center', marginY: '24px' }}>
        <Typography sx={{ fontWeight: '500', fontSize: '20px', lineHeight: '30px', color: '#414141' }}>
          Upload Building Photos
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {selectedFiles.length > 0 ? (
          selectedFiles.map((file, index) => (
            <Grid item xs={12} sm={6} md={3} xl={2} key={index}>
              <CardPhotos 
                image={URL.createObjectURL(file)} 
                onDelete={() => handleFileDelete(index)} // Handle image deletion
                onEdit={() => handleFileEdit(index)} // Handle image editing
              />
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
          disabled={loading} // Disable button when loading
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
};

export default PhotosInfo;
