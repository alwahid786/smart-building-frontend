/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

const Map = ({cardMapClick}) => {
  return (
    <>
      <svg
        onClick={cardMapClick}
        cursor={'pointer'}
        width="20"
        height="20"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 6.18318C13 10.2145 7 13.67 7 13.67C7 13.67 1 10.2145 1 6.18318C1 4.80852 1.63214 3.49015 2.75736 2.51812C3.88258 1.54608 5.4087 1 7 1C8.5913 1 10.1174 1.54608 11.2426 2.51812C12.3679 3.49015 13 4.80852 13 6.18318Z"
          fill="#8D8D8D"
          fillOpacity="0.8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 7.66602C7.55228 7.66602 8 7.2183 8 6.66602C8 6.11373 7.55228 5.66602 7 5.66602C6.44772 5.66602 6 6.11373 6 6.66602C6 7.2183 6.44772 7.66602 7 7.66602Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  )
}

export default Map
