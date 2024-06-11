import React from 'react';

const RenovationIcon = ({ isActive, size = 32 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="renovationActiveGradient" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(123, 66, 246, 1)" />
          <stop offset="1" stopColor="rgba(123, 66, 246, 1)" />
        </linearGradient>
        <linearGradient id="renovationInactiveGradient" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="gray" />
          <stop offset="1" stopColor="gray" />
        </linearGradient>
      </defs>
      <path d="M15.9993 2.6665L2.66602 9.33317L15.9993 15.9998L29.3327 9.33317L15.9993 2.6665Z"
            stroke={`url(#${isActive ? 'renovationActiveGradient' : 'renovationInactiveGradient'})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.66602 22.6665L15.9993 29.3332L29.3327 22.6665"
            stroke={`url(#${isActive ? 'renovationActiveGradient' : 'renovationInactiveGradient'})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.66602 16L15.9993 22.6667L29.3327 16"
            stroke={`url(#${isActive ? 'renovationActiveGradient' : 'renovationInactiveGradient'})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default RenovationIcon;
