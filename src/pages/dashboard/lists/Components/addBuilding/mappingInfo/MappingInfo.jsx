/* eslint-disable react/prop-types */
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useEffect, useState } from 'react'
import MarkerMap from '../../../../../../asset/svgs/MarkerMap'

const markerIcon = new L.Icon({
  iconUrl: MarkerMap,
  iconSize: [45, 45],
})

const MappingInfo = ({ handleBack, handleNext }) => {
  const [position, setPosition] = useState([51.505, -0.09])
  const [latitude, setLatitude] = useState(51.505)
  const [longitude, setLongitude] = useState(-0.09)

  const checkLocation = () => {
    setPosition([latitude, longitude])
  }

  const RecenterMap = ({ position }) => {
    const map = useMap()
    useEffect(() => {
      map.flyTo(position, map.getZoom(), {
        animate: true,
        duration: 1.5,
      })
    }, [map, position])

    return null
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('latitude', latitude)
    formData.append('longitude', longitude)
    // Now you can send formData to your backend
    console.log('Form Data:', Object.fromEntries(formData.entries()))

    handleNext()
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
          Mapping Location
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6} sm={6} xs={12}>
            <TextField
              label="Latitude"
              type="number"
              name="latitude"
              fullWidth
              size="small"
              value={latitude}
              onChange={(e) => setLatitude(parseFloat(e.target.value))}
            />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <TextField
              label="Longitude"
              type="number"
              name="longitude"
              fullWidth
              size="small"
              value={longitude}
              onChange={(e) => setLongitude(parseFloat(e.target.value))}
            />
          </Grid>
        </Grid>
        <Button onClick={checkLocation}>Check Location</Button>
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
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={markerIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <RecenterMap position={position} />
        </MapContainer>
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
            Next
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default MappingInfo
