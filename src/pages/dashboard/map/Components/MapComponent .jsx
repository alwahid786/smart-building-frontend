import { useState } from "react";
import { Box, styled } from "@mui/material";
import ReactMapGL, {
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
} from "react-map-gl";
// import PropTypes from "prop-types";
import MapMarkers from "./MapMarkers";
import FilterButton from "./FilterButton";

const TOKEN = import.meta.env.VITE_REACT_APP_MAP_TOKEN;
console.log("Token", TOKEN);
const MapComponent = ({
  mapRef,
  newPlace,
  setNewPlace,
  viewport,
  setViewport,
}) => {
  const [hoveredMarker, setHoveredMarker] = useState(null);

  const predefinedCoordinates = () => {
    return [
      { id: 0, longitude: 46.6753, latitude: 24.7136 },
      { id: 1, longitude: -95, latitude: 45 },
      { id: 2, longitude: -90, latitude: 50 },
      { id: 3, longitude: -85, latitude: 55 },
    ];
  };
  const markersArray = predefinedCoordinates();
  const handleAddClick = (e) => {
    setNewPlace({ lat: e.lngLat.lat, lng: e.lngLat.lng });
  };

  return (
    <Box style={{ height: "100vh", width: "100%" }}>
      <ReactMapGL
        ref={mapRef}
        mapboxAccessToken={TOKEN}
        initialViewState={viewport}
        onViewportChange={setViewport}
        mapStyle="mapbox://styles/codywahid/clw5wzjsx02a401o06vls4klr"
        onDblClick={handleAddClick}
        transitionDuration="200"
        attributionControl={true}
      >
        <GeolocateControl
          position="top-left"
          trackUserLocation={true}
          showUserLocation={true}
        />
        <NavigationControl position="top-left" />
        <FullscreenControl position="top-left" />
        <MapMarkers
          markers={markersArray}
          hoveredMarker={hoveredMarker}
          setHoveredMarker={setHoveredMarker}
        />
      </ReactMapGL>
      <FilterButton />
    </Box>
  );
};

// MapComponent.propTypes = {
//   mapRef: PropTypes.object.isRequired,
//   // newPlace: PropTypes.object.isRequired,
//   setNewPlace: PropTypes.func.isRequired,
//   viewport: PropTypes.object.isRequired,
//   setViewport: PropTypes.func.isRequired,
// };
// MapComponent.defaultProps = {
//   newPlace: null,
// };

export default MapComponent;
