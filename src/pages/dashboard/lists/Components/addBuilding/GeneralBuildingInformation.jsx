import PropTypes from 'prop-types';
import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { useAddBuildingMutation } from '../../../../../redux/api/buildingApi'

const GeneralBuildingInformation = ({ handleNext }) => {
  const [unitOfArea, setUnitOfArea] = useState('')

  const handleUnitChange = (event) => {
    setUnitOfArea(event.target.value)
  }
  const [addBuilding] = useAddBuildingMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const buildingData = {
      buildingName: formData.get('buildingName'),
      ownerName: formData.get('ownerName'),
      phoneNumber: formData.get('phoneNumber'),
      email: formData.get('email'),
      totalArea: formData.get('totalArea'),
      unitOfArea: unitOfArea,
      numberOfFloors: formData.get('numberOfFloors'),
      constructionYear: formData.get('constructionYear'),
      writtenAddress: formData.get('writtenAddress'),
      description: formData.get('description'),
    }

    try {
      const res = await addBuilding(buildingData)

      console.log('Response', res)
    } catch (error) {
      console.log('Error', error)
    }

    handleNext() // Proceed to the next step
  }

  return (
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
          General Building Information
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item md={4} sm={6} xs={12}>
            <TextField
              size="small"
              label="Building Name"
              type="text"
              name="buildingName"
              fullWidth
              required
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Owner Name"
              type="text"
              name="ownerName"
              size="small"
              fullWidth
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Phone Number"
              type="tel"
              name="phoneNumber"
              size="small"
              fullWidth
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Email"
              type="email"
              name="email"
              size="small"
              fullWidth
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Total Area (sq ft/m)"
              type="number"
              name="totalArea"
              fullWidth
              size="small"
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <FormControl size="small" fullWidth variant="outlined">
              <InputLabel id="unit-label">Unit of Area (sq ft/m)</InputLabel>
              <Select
                labelId="unit-label"
                name="unitOfArea"
                label="Unit of Area (sq ft/m)"
                value={unitOfArea}
                onChange={handleUnitChange}
              >
                <MenuItem value="sq ft">Square Feet</MenuItem>
                <MenuItem value="m">Meters</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Number of Floors"
              type="number"
              name="numberOfFloors"
              size="small"
              fullWidth
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              type="date"
              name="constructionYear"
              size="small"
              fullWidth
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Address"
              type="text"
              name="writtenAddress"
              size="small"
              fullWidth
            />
          </Grid>

          <Grid item md={12} sm={12} xs={12}>
            <TextField
              multiline
              fullWidth
              rows={4}
              label="Description"
              type="text"
              name="description"
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
      </form>
    </Box>
  )
}

GeneralBuildingInformation.propTypes = {
  handleNext: PropTypes.func.isRequired, // Specify that handleNext is a required function
  otherProp: PropTypes.string, // Example of another prop type
};

export default GeneralBuildingInformation
