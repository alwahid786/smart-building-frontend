import { useEffect, useState } from 'react'
import {
  Box,
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
import { useFormik } from 'formik'
import { Country, State, City } from 'country-state-city'
import {
  useGetUserDetailQuery,
  useUpdateProfileMutation,
} from '../../redux/api/buildingApi'
import { profileSchema } from '../../schema'
import { toast } from 'react-toastify'

const ProfilePage = () => {
  const [imageSrc, setImageSrc] = useState(null)
  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
  const { data } = useGetUserDetailQuery()
  const [updateProfile] = useUpdateProfileMutation()

  const id = data?._id

  useEffect(() => {
    setCountries(Country.getAllCountries())
    if (data) {
      setFieldValue('firstname', data.firstName)
      setFieldValue('lastname', data.lastName)
      setFieldValue('email', data.email)
      setFieldValue('address', data.address)
      setFieldValue('contact', data.phoneNumber)
      setFieldValue('country', data.country)
      setFieldValue('state', data.state)
      setFieldValue('city', data.city)
      setImageSrc(data.profilePic)
    }
  }, [data])

  const handleCountryChange = async (countryCode) => {
    const statesData = await State.getStatesOfCountry(countryCode)
    setStates(statesData)
    setCities([])
    setSelectedCountry(countryCode)
    setFieldValue('country', countryCode)
  }

  const handleStateChange = async (stateCode) => {
    const citiesData = await City.getCitiesOfState(selectedCountry, stateCode)
    setCities(citiesData)
    setFieldValue('state', stateCode)
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      setImageSrc(reader.result)
      setFieldValue('image', reader.result)
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      address: '',
      contact: '',
      country: '',
      state: '',
      city: '',
      image: '',
    },
    validationSchema: profileSchema,
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData()
      formData.append('firstName', values.firstname)
      formData.append('lastName', values.lastname)
      formData.append('email', values.email)
      formData.append('address', values.address)
      formData.append('phoneNumber', values.contact)
      formData.append('country', values.country)
      formData.append('state', values.state)
      formData.append('city', values.city)
      formData.append('image', values.image)

      try {

        const res = await updateProfile({ formData, id }).unwrap()

        if (res) {toast.success('Profile Updated Successfully')}
        resetForm()
      } catch (error) {

        toast.error('Update Error:', error)
      }
    },
  })

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = formik

  return (
    <Box
      sx={{
        borderRadius: '14px 14px 0 0',
        textAlign: 'center',
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '-20px', md: '-50px' },
          right: { xs: '60px', md: '170px' },
          transform: 'Translate(40px,0px)',
        }}
      >
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
            sx={{
              width: { xs: '60px', md: '120px' },
              height: { xs: '60px', md: '120px' },
              cursor: 'pointer',
              border: '4px solid white',
            }}
          />
        </label>
      </Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px',
          }}
          maxWidth="sm"
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: '600',
              fontSize: { xs: '20px', md: '34px' },
              lineHeight: '51px',
            }}
          >
            Edit profile
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: '40px',
            padding: { xs: '20px 10px', md: '40px 0' },
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} maxWidth="md">
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
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
                  variant="outlined"
                  fullWidth
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  readOnly
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
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
                    label="country"
                    value={values.country}
                    onChange={(e) => {
                      handleChange(e)
                      handleCountryChange(e.target.value)
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
                      handleStateChange(e.target.value)
                    }}
                    onBlur={handleBlur}
                    error={touched.state && Boolean(errors.state)}
                    helperText={touched.state && errors.state}
                    sx={{ textAlign: 'left' }}
                  >
                    <MenuItem value="">
                      <em>Select State</em>
                    </MenuItem>
                    {states.map((state) => (
                      <MenuItem key={state.isoCode} value={state.isoCode}>
                        {state.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="city-label">City</InputLabel>
                  <Select
                    labelId="city-label"
                    label="City"
                    defaultValue=""
                    variant="outlined"
                    id="city"
                    name="city"
                    value={values.city}
                    onChange={(e) => {
                      handleChange(e)
                      setFieldValue('city', e.target.value)
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
              <Grid
                item
                xs={12}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'center',
                  gap: 2,
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    padding: '8px 100px',
                    color: '#fff',
                    background:
                      'linear-gradient(93.36deg, #7B42F6 0%, #B01EFF 100%)',
                    border: '2px solid rgba(123, 66, 246, 1)',
                    '&:hover': {
                      background:
                        'linear-gradient(93.36deg, #7B42F6 0%, #B01EFF 100%)',
                      border: '2px solid rgba(123, 66, 246, 1)',
                    },
                  }}
                >
                  Update Profile
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    padding: '8px 100px',
                    color: 'rgba(123, 66, 246, 1)',
                    border: '2px solid rgba(123, 66, 246, 1)',
                    '&:hover': {
                      background: 'inherit',
                      border: '2px solid rgba(123, 66, 246, 1)',
                    },
                  }}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Box>
  )
}

export default ProfilePage
