import React from 'react'

const GeneralIcon = ({ isActive, size = 32 }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2935 13.5039C17.7208 14.8582 16.8251 16.0517 15.6846 16.9799C14.5441 17.9081 13.1936 18.5428 11.7511 18.8285C10.3087 19.1142 8.81822 19.0421 7.41003 18.6187C6.00184 18.1953 4.71882 17.4334 3.67312 16.3996C2.62742 15.3657 1.8509 14.0915 1.41143 12.6882C0.971966 11.285 0.88294 9.79544 1.15214 8.34982C1.42133 6.90421 2.04056 5.54655 2.95567 4.39553C3.87079 3.24452 5.05393 2.3352 6.40166 1.74707"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.0061 10.0022C19.0061 8.81998 18.7732 7.64937 18.3208 6.55718C17.8684 5.46499 17.2053 4.4726 16.3694 3.63667C15.5335 2.80074 14.5411 2.13765 13.4489 1.68525C12.3567 1.23285 11.1861 1 10.0039 1V10.0022H19.0061Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default GeneralIcon
