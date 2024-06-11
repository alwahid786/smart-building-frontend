import React from 'react'

const HomeIcon = ({ isActive, size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {isActive && (
          <linearGradient
            id="homeGradient"
            x1="16"
            y1="0"
            x2="16"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="rgba(123, 66, 246, 1)" />
            <stop offset="1" stopColor="rgba(123, 66, 246, 1)" />
          </linearGradient>
        )}
        {!isActive && (
          <linearGradient
            id="inactiveGradient"
            x1="16"
            y1="0"
            x2="16"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="gray" />
            <stop offset="1" stopColor="gray" />
          </linearGradient>
        )}
      </defs>
      <path
        d="M4 12.0001L16 2.66675L28 12.0001V26.6667C28 27.374 27.719 28.0523 27.219 28.5524C26.7189 29.0525 26.0406 29.3334 25.3333 29.3334H6.66667C5.95942 29.3334 5.28115 29.0525 4.78105 28.5524C4.28095 28.0523 4 27.374 4 26.6667V12.0001Z"
        stroke={isActive ? 'url(#homeGradient)' : 'url(#inactiveGradient)'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 29.3333V16H20V29.3333"
        stroke={isActive ? 'url(#homeGradient)' : 'url(#inactiveGradient)'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
{
  /* <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12L16 2.66669L28 12V26.6667C28 27.3739 27.719 28.0522 27.219 28.5523C26.7189 29.0524 26.0406 29.3334 25.3333 29.3334H6.66667C5.95942 29.3334 5.28115 29.0524 4.78105 28.5523C4.28095 28.0522 4 27.3739 4 26.6667V12Z" stroke="#111111" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 29.3333V16H20V29.3333" stroke="#111111" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg> */
}

export default HomeIcon
