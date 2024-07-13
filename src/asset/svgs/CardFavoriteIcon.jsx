import React from 'react'

const CardFavoriteIcon = ({ filled }) => {
  return (
    <>
      <svg
        width="31"
        height="28"
        viewBox="0 0 31 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_91_3545)">
          <rect
            width="30.6683"
            height="28"
            rx="8"
            fill="#9430FA"
            fillOpacity="0.1"
          />
          <rect
            x="0.5"
            y="0.5"
            width="29.6683"
            height="27"
            rx="7.5"
            stroke="#AD20FE"
          />
          <path
            d="M15.6264 9.82448H15.3955H15.2727H15.0415L14.857 9.68774L14.857 9.68772L14.8569 9.68763L14.8566 9.68738L14.8536 9.68524L14.833 9.67064C14.8133 9.65687 14.782 9.63537 14.74 9.60789C14.6559 9.55283 14.5299 9.47434 14.3702 9.38619C14.0484 9.2086 13.6017 8.99857 13.0924 8.85794C12.0782 8.57791 10.9021 8.58652 9.88727 9.56892L9.88697 9.5692C9.08079 10.3487 8.64989 11.4672 8.70465 12.598L15.6264 9.82448ZM15.6264 9.82448L15.8107 9.68799M15.6264 9.82448L15.8107 9.68799M15.8107 9.68799L15.8108 9.68797M15.8107 9.68799L15.8108 9.68797M15.8108 9.68797L15.8109 9.68789M15.8108 9.68797L15.8109 9.68789M15.8109 9.68789L15.8112 9.68763M15.8109 9.68789L15.8112 9.68763M15.8112 9.68763L15.8116 9.68738M15.8112 9.68763L15.8116 9.68738M15.8116 9.68738L15.8142 9.68549L15.8348 9.67091C15.8545 9.65715 15.8858 9.63567 15.9278 9.60822C16.0119 9.55323 16.1379 9.47484 16.2976 9.38679C16.6194 9.2094 17.0662 8.9996 17.5756 8.85911C18.5901 8.57934 19.7664 8.58801 20.7813 9.56922L20.782 9.56994C21.589 10.3478 22.0185 11.4639 21.9636 12.5982C21.9191 13.5106 21.6351 14.7049 20.6835 15.9052C19.747 17.0864 18.1262 18.3209 15.3341 19.2816C12.542 18.3209 10.9212 17.0864 9.98478 15.9053C9.03313 14.705 8.74919 13.5106 8.70466 12.5982L15.8116 9.68738Z"
            stroke="#AA21FE"
            // strokeWidth="1.4"
            fill={filled ? '#AA21FE' : 'none'}
            // stroke={filled ? 'none' : '#A0AEC0'}
          />
        </g>
        <defs>
          <filter
            id="filter0_b_91_3545"
            x="-10"
            y="-10"
            width="50.6682"
            height="48"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_91_3545"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_91_3545"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  )
}

export default CardFavoriteIcon
