import React from "react";
import { Marker, Popup } from "react-map-gl";
import MapMarker from "../../../../asset/svgs/MapMarker";

const MapMarkers = ({ markers, hoveredMarker, setHoveredMarker }) => {
  return (
    <>
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          longitude={marker.longitude}
          latitude={marker.latitude}
          anchor="top"
        >
          <div
            onMouseEnter={() => setHoveredMarker(marker)}
            onMouseLeave={() => setHoveredMarker(null)}
            style={{
              cursor: "pointer",
              transform: hoveredMarker === marker ? "scale(1.2)" : "none",
            }}
            className="map-marker"
          >
            <MapMarker />
          </div>
        </Marker>
      ))}
      {hoveredMarker && (
        <Popup
          latitude={hoveredMarker.latitude}
          longitude={hoveredMarker.longitude}
          closeButton={false}
          closeOnClick={false}
          anchor="bottom"
        >
          <div>
            <h2>Marker Information</h2>
            <p>Details about this location</p>
          </div>
        </Popup>
      )}
    </>
  );
};

export default MapMarkers;
