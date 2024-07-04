/* eslint-disable react/prop-types */
import { Box, Button, Grid, TextField, Typography } from '@mui/material'

const AddFloor = ({ handleBack }) => {
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
          Mapping Location
        </Typography>{' '}
      </Box>

      <Grid container spacing={2}>
        <Grid item md={6} sm={6} xs={12}>
          <TextField
            label="Latitude"
            type="number"
            name="latitude"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <TextField
            label="Longitude"
            type="number"
            name="longitude"
            fullWidth
            size="small"
          />
        </Grid>
      </Grid>

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
          Submit
        </Button>
      </Box>
    </Box>
  )
}

export default AddFloor
