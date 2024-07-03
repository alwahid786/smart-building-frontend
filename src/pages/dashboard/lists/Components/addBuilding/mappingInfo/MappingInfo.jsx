import { Box, Button, Grid, Typography } from '@mui/material'
import { useFormik } from 'formik'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
// import markIcon from '../../../../../../asset/Images/login/LogIn2.png'
import { mappingInfoSchema } from '../../../../../../schema'
import { TextInput } from '../components/Input'

// import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
// import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { useEffect, useState } from 'react'
import MarkerMap from '../../../../../../asset/svgs/MarkerMap'

const markerIcon = new L.Icon({
  iconUrl: MarkerMap,
  iconSize: [45, 45],
})

const MappingInfo = () => {
  const [position, setPosition] = useState([51.505, -0.09])
  const [long, setLong] = useState()
  const [lat, setLat] = useState()
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      longitude: '',
      latitude: '',
    },
    validationSchema: mappingInfoSchema,
    // validateOnChange: true,
    // validateOnBlur: false,
    onSubmit: async (values, action) => {
      // const res = await addBuilding({
      // longitude: values.longitude
      // latitude: values.latitude
      // })
      const res = {
        latitude: values.latitude,
        longitude: values.longitude,
      }
      console.log(res)

      action.resetForm()
    },
  })
  const checkLocation = () => {
    setPosition([values.latitude, values.longitude])
  }
  const RecenterMap = ({ position }) => {
    const map = useMap()
    useEffect(() => {
      map.flyTo(position, map.getZoom(), {
        animate: true,
        duration: 1.5,
      })
    }, [position, map])

    return null
  }
  // useEffect(() => {
  //   // if (values.latitude && values.longitude) {
  //   //   setPosition([values.latitude, values.longitude])
  //   // }
  // }, [values.latitude, values.longitude])
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
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <TextInput
            md="6"
            basic={{
              label: 'Latitude',
              type: 'number',
              name: 'latitude',
            }}
            valAndHandler={{
              handleBlur: (e) => {
                handleBlur(e)
                setFieldValue('latitude', e.target.value)
                // setPosition([e.target.value, values.longitude])
              },
              handleChange,
              value: values?.latitude,
            }}
            formik={{
              touched: touched?.latitude,
              errors: errors?.latitude,
            }}
          />
          <TextInput
            md="6"
            basic={{
              label: 'Longitude',
              type: 'number',
              name: 'longitude',
            }}
            valAndHandler={{
              handleBlur: (e) => {
                handleBlur(e)
                setFieldValue('longitude', e.target.value)
                // setPosition([e.target.value, values.longitude])
              },
              handleChange,
              value: values?.longitude,
            }}
            formik={{
              touched: touched?.longitude,
              errors: errors?.longitude,
            }}
          />
        </Grid>
        {/* type="submit" */}
        <Button onClick={checkLocation}>Check Location</Button>

        {/* <Box> */}

        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{
            height: '70vh',
            width: '100%',
            borderRadius: '10px',
            border: '0.4px solid black',
            marginTop: '30px',
          }}
        >
          <TileLayer
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} Icon={markerIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <RecenterMap position={position} />
        </MapContainer>
        {/* </Box> */}
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Box>
  )
}

export default MappingInfo
