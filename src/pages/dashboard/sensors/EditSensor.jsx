import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Box, Button, Dialog, TextField, Typography } from '@mui/material';
import { useGetSingleBuildingSensorQuery, useUpdateSensorMutation } from '../../../redux/api/sensorApi';
import { useNavigate, useParams } from 'react-router-dom';

const EditSensor = ({ open, handleClose }) => {
  const { id } = useParams();
  const { data: sensorData, isLoading, isError } = useGetSingleBuildingSensorQuery(id);
  const [updateSensor] = useUpdateSensorMutation();
  const navigatge = useNavigate();

  // Initialize form values
  const [formValues, setFormValues] = useState({
    sensorName: '',
    sensorType: '',
    ip: '',
    port: '',
    uniqueId: '',
    location: '',
  });

  useEffect(() => {
    if (sensorData) {
      setFormValues({
        sensorName: sensorData.sensorName || '',
        sensorType: sensorData.sensorType || '',
        ip: sensorData.ip || '',
        port: sensorData.port || '',
        uniqueId: sensorData.uniqueId || '',
        location: sensorData.location || '',
      });
    }
  }, [sensorData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('sensorName', formValues.sensorName);
    formData.append('sensorType', formValues.sensorType);
    formData.append('ip', formValues.ip);
    formData.append('port', formValues.port);
    formData.append('uniqueId', formValues.uniqueId);

    try {

      const response = await updateSensor({ id, formData });
      
      if(response?.data?.success === true) {

        handleClose();

        navigatge(`/dashboard/sensors`);
      }
      // handleClose();
    } catch (error) {
      console.error('Failed to update sensor:', error);
    }
  };

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error loading sensor data.</Typography>;

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box sx={{ padding: '30px' }}>
        <Typography sx={{ fontWeight: '600', fontSize: '16px', lineHeight: '36px' }}>
          Edit Sensor
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
                value={formValues.sensorName}
                onChange={handleChange}
                required
              />
              <TextField
                type="text"
                fullWidth
                size="small"
                label="Sensor Type"
                name="sensorType"
                value={formValues.sensorType}
                onChange={handleChange}
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
                value={formValues.ip}
                onChange={handleChange}
              />
              <TextField
                type="text"
                fullWidth
                size="small"
                label="Port (optional)"
                name="port"
                value={formValues.port}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <TextField
                type="text"
                fullWidth
                size="small"
                label="Unique ID"
                name="uniqueId"
                value={formValues.uniqueId}
                onChange={handleChange}
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
                sx={{
                  textTransform: 'none',
                  background: '#7B42F6',
                  '&:hover': {
                    background: '#7B42F6',
                  },
                }}
              >
                Edit
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Dialog>
  );
};

EditSensor.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default EditSensor;
