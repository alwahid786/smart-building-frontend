import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Dialog,
  TextField,
  CircularProgress,
  Typography,
} from '@mui/material';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useCreateSensorMutation } from '../../../redux/api/sensorApi';

const AddSensor = ({ open, handleClose, onAddSensor }) => {
  const [createSensor, { isLoading }] = useCreateSensorMutation();
  const MySwal = withReactContent(Swal);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      await createSensor(data).unwrap();
      MySwal.fire({
        title: 'Connected!',
        text: 'Sensor added successfully.',
        icon: 'success',
        confirmButtonText: 'Cool',
      });
      onAddSensor(data); // Notify parent to refresh the sensor list
    } catch (err) {
      MySwal.fire({
        title: 'Error!',
        text: `Failed to create sensor: ${err.data?.message || 'Unknown error'}`,
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    } finally {
      handleClose(); // Close the dialog regardless of success or failure
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box sx={{ padding: '30px' }}>
        <Typography
          sx={{ fontWeight: '600', fontSize: '16px', lineHeight: '36px' }}
        >
          Add Sensor
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              marginTop: '10px',
            }}
          >
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <TextField
                type="text"
                fullWidth
                size="small"
                label="Sensor Name"
                name="sensorName"
                required
              />
              <TextField
                type="text"
                fullWidth
                size="small"
                label="Sensor Type"
                name="sensorType"
                required
              />
            </Box>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <TextField
                type="text"
                fullWidth
                size="small"
                label="IP (optional)"
                name="ip"
              />
              <TextField
                type="text"
                fullWidth
                size="small"
                label="Port (optional)"
                name="port"
              />
            </Box>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <TextField
                type="text"
                fullWidth
                size="small"
                label="Unique ID"
                name="uniqueId"
                required
              />
            </Box>
            <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'end' }}>
              <Button
                onClick={handleClose}
                variant="contained"
                sx={{
                  textTransform: 'none',
                  background: '#7B42F6',
                  '&:hover': {
                    background: '#7B42F6',
                  },
                }}
              >
                Close
              </Button>
              <Button
                variant="contained"
                type="submit"
                disabled={isLoading}
                sx={{
                  textTransform: 'none',
                  background: '#7B42F6',
                  '&:hover': {
                    background: '#7B42F6',
                  },
                }}
              >
                {isLoading ? <CircularProgress size={24} /> : 'Add'}
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Dialog>
  );
};

AddSensor.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onAddSensor: PropTypes.func.isRequired, // Add this prop type
};

export default AddSensor;
