import PropTypes from 'prop-types'
import { Box, Button, Dialog, TextField, Typography } from '@mui/material'

const EditSensor = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Box sx={{ padding: '30px' }}>
        <Typography
          sx={{ fontWeight: '600', fontSize: '16px', lineHeight: '36px' }}
        >
          Edit Sensor
        </Typography>
        <form>
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
  )
}

EditSensor.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default EditSensor
