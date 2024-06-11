import React from 'react';

const MapMarker = () => {
  const markerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(1, 160, 117)',
    borderRadius: '50%', 
    padding: '10px',
    animation: 'blink-animation 1.5s infinite' 
  };

  return (
    <>
      <style>
        {`
          @keyframes blink-animation {
            0% {
              box-shadow: 0 0 0 0 rgba(1, 160, 117, 0.7);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(1, 160, 117, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(1, 160, 117, 0);
            }
          }
        `}
      </style>
      <div style={markerStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </div>
    </>
  );
}

export default MapMarker;
