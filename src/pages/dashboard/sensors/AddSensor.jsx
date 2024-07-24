import PropTypes from 'prop-types'
import {
  Box,
  Button,
  Dialog,
  TextField,
  CircularProgress,
  Alert,
  Typography,
} from '@mui/material'
import { useCreateSensorMutation } from '../../../redux/api/sensorApi'

const AddSensor = ({ open, handleClose }) => {
  const [createSensor, { isLoading, isError, isSuccess, error }] =
    useCreateSensorMutation()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)

    try {
      await createSensor(data).unwrap()
    } catch (err) {
      console.error('Failed to create sensor:', err)
    }
  }

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
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <TextField
                type="text"
                fullWidth
                size="small"
                label="Location"
                name="location"
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
            {isError && (
              <Alert severity="error">
                Failed to create sensor:{' '}
                {error.data?.message || 'Unknown error'}
              </Alert>
            )}
            {isSuccess && (
              <Alert severity="success">Sensor created successfully!</Alert>
            )}
          </Box>
        </form>
      </Box>
    </Dialog>
  )
}

AddSensor.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default AddSensor
