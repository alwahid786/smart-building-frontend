import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { useGetBuildingQuery } from '../../../redux/api/buildingApi';

const Index = () => {
  const { data } = useGetBuildingQuery();

  // Initialize positions based on fetched building data
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    if (data) {
      const newPositions = data.map(building => [
        building.latitude,
        building.longitude,
        building // Pass building data along with position
      ]);
      setPositions(newPositions);
    }
  }, [data]);

  const RecenterMap = ({ position }) => {
    const map = useMap();
    useEffect(() => {
      map.flyTo(position, map.getZoom(), {
        animate: true,
        duration: 1.5,
      });
    }, [map, position]);

    return null;
  };

  return (
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
        center={positions[0] ? [positions[0][0], positions[0][1]] : [51.505, -0.09]} // Default center if no positions
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
        {positions.map(([lat, lng, building], index) => (
          <Marker key={index} position={[lat, lng]}>
            <Popup>
              <Box>
                <CardMedia
                  sx={{
                    height: 100,
                    minWidth: '250px',
                    borderRadius: '10px',
                  }}
                  image={building.images && building.images.length > 0 ? building.images[0] : "https://via.placeholder.com/250"}
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
                    {building.buildingName || 'Name'}
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
                    {building.description || 'Description'}
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
                    Area: <span style={{ fontWeight: '500' }}>{building.totalArea || 'area'}</span>
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
                    No. of floors: <span style={{ fontWeight: '500' }}>{building.numberOfFloors || 'Floor?'}</span>
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
                    Owner Name: <span style={{ fontWeight: '500' }}>{building.ownerName || 'ownerName?'}</span>
                  </Typography>
                </CardContent>
              </Box>
            </Popup>
          </Marker>
        ))}
        {positions.length > 0 && <RecenterMap position={positions[0]} />}
      </MapContainer>
    </Box>
  );
};

export default Index;
