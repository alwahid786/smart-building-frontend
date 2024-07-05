
import { Box, Button, Grid, Typography } from '@mui/material';
import CardPhotos from './CardPhotos';
import PropTypes from 'prop-types'; 

const PhotosInfo = ({ handleNext, handleBack }) => {

 
  const handleSubmit = async (event) => {
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
      <Grid item xs={12} sm={6} md={3} xl={2} >
            <CardPhotos image={"https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
          </Grid>
      </Grid>

      <input
        type="file"
        id="file"
        multiple
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
};

export default PhotosInfo;
