/* eslint-disable react/prop-types */
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useEffect, useState } from 'react'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import {
  useBuildingLocationMutation,
  useGetSingleBuildingQuery,
} from '../../../../../../redux/api/buildingApi'
import { useSelector } from 'react-redux'
import moment from 'moment/moment'

const MappingInfo = ({ handleBack, handleNext }) => {
  const [position, setPosition] = useState([51.505, -0.09])
  const [latitude, setLatitude] = useState(51.505)
  const [longitude, setLongitude] = useState(-0.09)
  const buildingId = useSelector((state) => state.form?.buildingId)
  const [buildingLocation] = useBuildingLocationMutation()

  const { data } = useGetSingleBuildingQuery(buildingId)

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

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      // Create a data object instead of FormData
      const data = {
        latitude,
        longitude,
      }

      console.log(data)
      // Call the mutation with the data object
      const response = await buildingLocation({ data, buildingId }).unwrap()

      console.log(response)

      handleNext()
    } catch (error) {
      console.error('Failed to add building location:', error)
    }
  }

  const firstImage = data?.images?.length ? data.images[0] : 'default_image_url' // Use a default image URL if there are no images

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
              <Box sx={{ height: '100%', width: '100%' }}>
                <CardMedia
                  sx={{ height: 250, minWidth: '300px', borderRadius: '10px' }}
                  image={firstImage}
                  title="Building Image"
                />
                <CardContent sx={{ padding: '10px !important' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '15px',
                      lineHeight: '24.51px',
                      fontWeight: '600',
                      color: '#414141',
                    }}
                  >
                    Building Name:{' '}
                    <span style={{ fontWeight: '500' }}>
                      {data?.buildingName || 'buildingName'}
                    </span>
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '15px',
                      lineHeight: '24.51px',
                      fontWeight: '600',
                      color: '#414141',
                    }}
                  >
                    Owner Name:{' '}
                    <span style={{ fontWeight: '500' }}>
                      {data?.ownerName || 'ownerName'}
                    </span>
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
                    Total Area:{' '}
                    <span style={{ fontWeight: '500' }}>
                      {data?.totalArea || 'area'}
                    </span>
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
                    No. Of Floors:{' '}
                    <span style={{ fontWeight: '500' }}>
                      {data?.numberOfFloors || 'Floor?'}
                    </span>
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
                    Construction Year:{' '}
                    <span style={{ fontWeight: '500' }}>
                      {moment(data?.constructionYear).format('YYYY') || 'N/A'}
                    </span>
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
