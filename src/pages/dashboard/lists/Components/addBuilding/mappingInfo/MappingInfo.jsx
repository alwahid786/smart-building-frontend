/* eslint-disable react/prop-types */
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useEffect, useState } from 'react'
import MarkerMap from '../../../../../../asset/svgs/MarkerMap'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

// const markerIcon = new L.Icon({
//   iconUrl: MarkerMap,
//   iconSize: [45, 45],
// })

const MappingInfo = ({ handleBack, handleNext }) => {
  const [position, setPosition] = useState([51.505, -0.09])
  const [latitude, setLatitude] = useState(51.505)
  const [longitude, setLongitude] = useState(-0.09)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setPosition([latitude, longitude])
          setLatitude(latitude)
          setLongitude(longitude)
        },
        (error) => {
          console.error("Error fetching user's location: ", error)
        }
      )
    }
  }, [])

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
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>
              <Box>
                <CardMedia
                  sx={{ height: 100, minWidth: '250px', borderRadius: '10px' }}
                  image="https://plus.unsplash.com/premium_photo-1661852207925-4f1d03556a2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFyZ2UlMjBmb3JtYXR8ZW58MHx8MHx8fDA%3D"
                />
                <CardContent sx={{ padding: '10px !important' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '18px',
                      lineHeight: '24.51px',
                      fontWeight: '600',
                      color: '#414141',
                    }}
                  >
                    Name
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: '14px',
                      lineHeight: '19.07px',
                      fontWeight: '400',
                      color: '#11111180',
                    }}
                  >
                    Description
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: '14px',
                      lineHeight: '19.07px',
                      fontWeight: '600',
                      color: '#000000',
                    }}
                  >
                    Area: <span style={{ fontWeight: '500' }}>area</span>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: '14px',
                      lineHeight: '19.07px',
                      fontWeight: '600',
                      color: '#000000',
                    }}
                  >
                    No. of floor:
                    <span style={{ fontWeight: '500' }}> Floor?</span>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: '14px',
                      lineHeight: '19.07px',
                      fontWeight: '600',
                      color: '#000000',
                    }}
                  >
                    Owner Name:{' '}
                    <span style={{ fontWeight: '500' }}> ownerName?</span>
                  </Typography>
                </CardContent>
              </Box>
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
