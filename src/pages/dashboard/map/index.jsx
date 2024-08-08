import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { useGetBuildingByUserQuery } from '../../../redux/api/buildingApi';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecenterMap = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position && position.length === 2) {
      map.flyTo(position, map.getZoom(), {
        animate: true,
        duration: 1.5,
      });
    }
  }, [map, position]);

  return null;
};

RecenterMap.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const Index = () => {
  const { data } = useGetBuildingByUserQuery();
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    if (data) {
      const newPositions = data.map((building) => [
        building.latitude,
        building.longitude,
        building, // Pass building data along with position
      ]);
      setPositions(newPositions);
    }
  }, [data]);

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
        center={
          positions[0] ? [positions[0][0], positions[0][1]] : [51.505, -0.09]
        } // Default center if no positions
        zoom={3}
        scrollWheelZoom={false}
        style={{
          height: '100vh',
          width: '100%',
          borderRadius: '10px',
          border: '0.4px solid black',
          marginTop: '30px',
        }}
        className="grayscale-map"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {positions.map(([lat, lng, building], index) => (
          <Marker key={index} position={[lat, lng]}>
            <Popup>
              <Link to={`/dashboard/building-info/${building._id}`}>
                <Box>
                  <CardMedia
                    sx={{
                      height: 100,
                      minWidth: '250px',
                      borderRadius: '10px',
                    }}
                    image={
                      building.images && building.images.length > 0
                        ? building.images[0]
                        : 'https://via.placeholder.com/250'
                    }
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
                      Area:{' '}
                      <span style={{ fontWeight: '500' }}>
                        {building.totalArea || 'area'}
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
                      No. of floors:{' '}
                      <span style={{ fontWeight: '500' }}>
                        {building.numberOfFloors || 'Floor?'}
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
                      Owner Name:{' '}
                      <span style={{ fontWeight: '500' }}>
                        {building.ownerName || 'ownerName?'}
                      </span>
                    </Typography>
                  </CardContent>
                </Box>
              </Link>
            </Popup>
          </Marker>
        ))}
        {positions.length > 0 && <RecenterMap position={positions[0]} />}
      </MapContainer>
    </Box>
  );
};

export default Index;
