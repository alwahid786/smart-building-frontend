/* eslint-disable react/prop-types */
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Typography } from '@mui/material'

const Index = () => {
  const [position, setPosition] = useState([51.505, -0.09])

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

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          borderRadius: 1,
          overflow: 'hidden',
          position: 'relative',
          boxShadow: 6,
          width: '100%',
          height: '100vh',
          marginTop: 1,
        }}
      >
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          style={{
            height: '100vh',
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
      </Box>
    </>
  )
}

export default Index
