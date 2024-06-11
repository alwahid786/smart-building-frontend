import React from 'react';

const CardFavoriteIcon = ({ filled }) => {
  return (
    <>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="white"/>
        <g clipPath="url(#clip0_53_309)">
          <path 
            d="M13.6826 6.92062C13.4698 6.7077 13.2171 6.5388 12.939 6.42357C12.6609 6.30833 12.3628 6.24902 12.0617 6.24902C11.7607 6.24902 11.4626 6.30833 11.1845 6.42357C10.9064 6.5388 10.6537 6.7077 10.4409 6.92062L9.99924 7.36228L9.55757 6.92062C9.1277 6.49075 8.54467 6.24925 7.93674 6.24925C7.32881 6.24925 6.74577 6.49075 6.3159 6.92062C5.88603 7.35049 5.64453 7.93352 5.64453 8.54145C5.64453 9.14938 5.88603 9.73241 6.3159 10.1623L6.75757 10.604L9.99924 13.8456L13.2409 10.604L13.6826 10.1623C13.8955 9.94947 14.0644 9.69679 14.1796 9.41868C14.2949 9.14057 14.3542 8.84249 14.3542 8.54145C14.3542 8.24041 14.2949 7.94233 14.1796 7.66422C14.0644 7.38611 13.8955 7.13343 13.6826 6.92062Z" 
            fill={filled ? "#FF4E00" : "none"}
            stroke={filled ? "none" : "#A0AEC0"}
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_53_309">
            <rect width="10" height="10" fill="white" transform="translate(5 5)"/>
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default CardFavoriteIcon;
