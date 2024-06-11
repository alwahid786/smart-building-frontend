import {
  Box,
  Container,
  TextField,
  Button,
  Avatar,
  Grid,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { profileSchema } from '../../schema'
import { useFormik } from 'formik'
import { Country, State, City } from 'country-state-city'
// import { gridColumnsTotalWidthSelector } from '@mui/x-data-grid'

const ProfilePage = () => {
  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')

  const handleCountryChange = async (countryCode) => {
    console.log(countryCode)
    const statesData = await State.getStatesOfCountry(countryCode)
    setStates(statesData)
    setCities([])
    setSelectedCountry(countryCode)
  }

  const handleStateChange = async (stateCode) => {
    const citiesData = await City.getCitiesOfState(selectedCountry, stateCode)
    console.log(citiesData)
    setCities(citiesData)
    setSelectedState(stateCode)
  }
  // useEffect for getting all countries when page loaded
  useEffect(() => {
    setCountries(Country.getAllCountries())
  }, [])

  const [imageSrc, setImageSrc] = useState(null)

  console.log(Country.getAllCountries())
  console.log(State.getStatesOfCountry('AF'))
  console.log(City.getCitiesOfState('AF', 'PAR'))

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      setImageSrc(reader.result)
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  const {
    values,
    errors,
    touched,
    handleBlur,
    setFieldValue,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      address: '',
      contact: '',
      country: '',
      state: '',
      city: '',

      password: '',
    },
    validationSchema: profileSchema,
    onSubmit: (values, action) => {
      console.log('values', values)
      action.resetForm()
    },
  })

  return (
    <Container>
      <Box
        sx={{
          my: 4,
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            my: 3,
          }}
          maxWidth="sm"
        >
          <Typography variant="h4" gutterBottom>
            Edit profile
          </Typography>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
            id="avatarInput"
          />
          <label htmlFor="avatarInput">
            <Avatar
              alt="Uploaded Avatar"
              src={imageSrc}
              sx={{ width: 120, height: 120, cursor: 'pointer' }}
            />
          </label>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} maxWidth="sm">
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                defaultValue=""
                variant="outlined"
                fullWidth
                id="firstname"
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstname && Boolean(errors.firstname)}
                helperText={touched.firstname && errors.firstname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                defaultValue=""
                variant="outlined"
                fullWidth
                id="lastname"
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lastname && Boolean(errors.lastname)}
                helperText={touched.lastname && errors.lastname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                defaultValue=""
                variant="outlined"
                fullWidth
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Address"
                defaultValue=""
                variant="outlined"
                fullWidth
                id="address"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.address && Boolean(errors.address)}
                helperText={touched.address && errors.address}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Contact Number"
                defaultValue=""
                variant="outlined"
                fullWidth
                id="contact"
                name="contact"
                value={values.contact}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.contact && Boolean(errors.contact)}
                helperText={touched.contact && errors.contact}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="country-label">Country</InputLabel>
                <Select
                  labelId="country-label"
                  // placeholder="Country"
                  label="country"
                  value={values.country}
                  onChange={(e) => {
                    handleChange(e)
                    handleCountryChange(e.target.value, setFieldValue)
                  }}
                  onBlur={handleBlur}
                  name="country"
                  id="country"
                  fullWidth
                  error={touched.country && Boolean(errors.country)}
                  helperText={touched.country && errors.country}
                  sx={{ textAlign: 'left' }}
                >
                  <MenuItem value="">
                    <em>Select Country</em>
                  </MenuItem>
                  {countries.map((country) => (
                    <MenuItem key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="state-label">State</InputLabel>
                <Select
                  labelId="state-label"
                  label="State"
                  defaultValue=""
                  variant="outlined"
                  fullWidth
                  id="state"
                  name="state"
                  value={values.state}
                  onChange={(e) => {
                    handleChange(e)
                    handleStateChange(e.target.value, setFieldValue)
                  }}
                  onBlur={handleBlur}
                  error={touched.state && Boolean(errors.state)}
                  helperText={touched.state && errors.state}
                  sx={{ textAlign: 'left' }}
                >
                  <MenuItem value="">
                    <em>Select State</em>
                  </MenuItem>
                  {states.map((states) => (
                    <MenuItem key={states.isoCode} value={states.isoCode}>
                      {states.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="city">City</InputLabel>

                <Select
                  labelId="city"
                  label="City"
                  defaultValue=""
                  variant="outlined"
                  id="city"
                  name="city"
                  value={values.city}
                  onChange={(e) => {
                    // handleChange(e)
                    handleChange(e)
                    setSelectedCity(e.target.value, setFieldValue)
                  }}
                  onBlur={handleBlur}
                  error={touched.city && Boolean(errors.city)}
                  helperText={touched.city && errors.city}
                  sx={{ textAlign: 'left' }}
                >
                  <MenuItem value="">
                    <em>Select City</em>
                  </MenuItem>
                  {cities.map((city) => (
                    <MenuItem key={city.isoCode} value={city.name}>
                      {city.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                defaultValue=""
                variant="outlined"
                fullWidth
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', gap: 2 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  padding: '0px 20px',
                  color: '#fff',
                  background:
                    'linear-gradient(93.36deg, #7B42F6 0%, #B01EFF 100%)',
                  border: '2px solid rgba(123, 66, 246, 1)',
                  '&:hover': {
                    background:
                      'linear-gradient(93.36deg, #7B42F6 0%, #B01EFF 100%)',
                    border: '2px solid rgba(123, 66, 246, 1)',
                    borderColor: 'rgba(123, 66, 246, 1)',
                  },
                }}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                sx={{
                  padding: '0px 20px',
                  color: 'rgba(123, 66, 246, 1)',
                  border: '2px solid rgba(123, 66, 246, 1)',
                  '&:hover': {
                    background:
                      'linear-gradient(93.36deg, #7B42F6 0%, #B01EFF 100%)',
                    color: 'white',
                    border: '2px solid rgba(123, 66, 246, 1)',
                    borderColor: 'rgba(123, 66, 246, 1)',
                  },
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  )
}

export default ProfilePage
