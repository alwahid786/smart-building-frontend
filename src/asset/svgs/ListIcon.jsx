import React from 'react'

const ListIcon = ({ isActive, size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 16H28"
        stroke={isActive ? 'url(#active_paint0_linear)' : 'gray'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 8H28"
        stroke={isActive ? 'url(#active_paint1_linear)' : 'gray'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 24H28"
        stroke={isActive ? 'url(#active_paint2_linear)' : 'gray'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {isActive && (
        <defs>
          <linearGradient
            id="active_paint0_linear"
            x1="4"
            y1="16.5"
            x2="28"
            y2="16.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="rgba(123, 66, 246, 1)" />
            <stop offset="1" stop-color="rgba(123, 66, 246, 1)" />
          </linearGradient>
          <linearGradient
            id="active_paint1_linear"
            x1="4"
            y1="8.5"
            x2="28"
            y2="8.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="rgba(123, 66, 246, 1)" />
            <stop offset="1" stop-color="rgba(123, 66, 246, 1)" />
          </linearGradient>
          <linearGradient
            id="active_paint2_linear"
            x1="4"
            y1="24.5"
            x2="28"
            y2="24.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="rgba(123, 66, 246, 1)" />
            <stop offset="1" stop-color="rgba(123, 66, 246, 1)" />
          </linearGradient>
        </defs>
      )}
    </svg>
  )
}

export default ListIcon
