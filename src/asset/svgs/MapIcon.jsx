import React from 'react';

const MapIcon = ({ isActive, size = 32 }) => {  
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="mapGradient" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor={isActive ? "rgba(123, 66, 246, 1)" : "gray"} />
                    <stop offset="1" stopColor={isActive ? "rgba(123, 66, 246, 1)" : "gray"} />
                </linearGradient>
            </defs>
            <path d="M28 13.3335C28 22.6668 16 30.6668 16 30.6668C16 30.6668 4 22.6668 4 13.3335C4 10.1509 5.26428 7.09865 7.51472 4.84821C9.76516 2.59778 12.8174 1.3335 16 1.3335C19.1826 1.3335 22.2348 2.59778 24.4853 4.84821C26.7357 7.09865 28 10.1509 28 13.3335Z" stroke="url(#mapGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 17.3335C18.2091 17.3335 20 15.5426 20 13.3335C20 11.1244 18.2091 9.3335 16 9.3335C13.7909 9.3335 12 11.1244 12 13.3335C12 15.5426 13.7909 17.3335 16 17.3335Z" stroke="url(#mapGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default MapIcon;
