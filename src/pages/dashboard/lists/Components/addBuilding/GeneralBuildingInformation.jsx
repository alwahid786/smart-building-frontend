import { useState } from 'react'
import PropTypes from 'prop-types'
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
import { useDispatch } from 'react-redux'
import { setBuildingData } from '../../../../../redux/reducers/formReducer'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const GeneralBuildingInformation = ({ handleNext }) => {
  const dispatch = useDispatch()
  // const buildingData = useSelector((state) => state.form.buildingData)
  
  // Local state for form data
  const [formData, setFormData] = useState({
    buildingName: '',
    ownerName: '',
    phoneNumber: '',
    email: '',
    totalArea: '',
    unitOfArea: '',
    numberOfFloors: '',
    constructionYear: '',
    writtenAddress: '',
    description: ''
  })

  // useEffect(() => {
  //   // Populate local state with Redux data when component mounts or Redux state changes
  //   setFormData(buildingData)
  // }, [buildingData])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleUnitChange = (event) => {
    setFormData({
      ...formData,
      unitOfArea: event.target.value
    })
  }

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      phoneNumber: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(setBuildingData(formData))
    handleNext() // Proceed to the next step
  }

  // i want when i click cancel button then empty all inputs value
  const handleCancel = () => {
    setFormData({
      buildingName: '',
      ownerName: '',
      phoneNumber: '',
      email: '',
      totalArea: '',
      unitOfArea: '',
      numberOfFloors: '',
      constructionYear: '',
      writtenAddress: '',
      description: ''
    })

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
              // required
              value={formData.buildingName}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Owner Name"
              type="text"
              name="ownerName"
              size="small"
              fullWidth
              // required
              value={formData.ownerName}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <PhoneInput
              country={'pk'}
              label="Phone Number"
              type="tel"
              name="phoneNumber"
              placeholder="Phone"
              fullWidth
              containerStyle={{ width: '100%' }}
              inputStyle={{ width: '100%', height: '40px' }}
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Email"
              type="email"
              name="email"
              size="small"
              fullWidth
              // required
              value={formData.email}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Total Area (sq ft/m)"
              type="number"
              name="totalArea"
              fullWidth
              size="small"
              // required
              value={formData.totalArea}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <FormControl size="small" fullWidth variant="outlined">
              <InputLabel id="unit-label">Unit of Area (sq ft/m)</InputLabel>
              <Select
                labelId="unit-label"
                name="unitOfArea"
                label="Unit of Area (sq ft/m)"
                value={formData.unitOfArea}
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
              // required
              value={formData.numberOfFloors}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              type="date"
              name="constructionYear"
              size="small"
              fullWidth
              // required
              value={formData.constructionYear}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <TextField
              label="Address"
              type="text"
              name="writtenAddress"
              size="small"
              fullWidth
              // required
              value={formData.writtenAddress}
              onChange={handleInputChange}
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
              // required
              value={formData.description}
              onChange={handleInputChange}
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
            onClick={handleCancel}
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
  handleNext: PropTypes.func.isRequired,
}

export default GeneralBuildingInformation
