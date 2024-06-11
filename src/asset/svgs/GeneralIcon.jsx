import React from 'react';

const GeneralIcon = ({ isActive, size = 32  }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="activeGradient" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgba(123, 66, 246, 1)" />
                    <stop offset="1" stopColor="rgba(123, 66, 246, 1)" />
                </linearGradient>
                <linearGradient id="inactiveGradient" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="gray" />  {/* Example color, change as needed for inactive state */}
                    <stop offset="1" stopColor="gray" />
                </linearGradient>
            </defs>
            <path d="M28.2799 21.1868C27.4316 23.1927 26.1049 24.9604 24.4157 26.3352C22.7265 27.71 20.7262 28.65 18.5898 29.0731C16.4534 29.4963 14.2458 29.3896 12.1601 28.7625C10.0744 28.1354 8.17405 27.0069 6.62525 25.4756C5.07644 23.9444 3.92631 22.0571 3.2754 19.9787C2.62449 17.9003 2.49264 15.6941 2.89135 13.5529C3.29007 11.4118 4.20721 9.40094 5.56261 7.69614C6.91801 5.99135 8.6704 4.64453 10.6666 3.77344" stroke={`url(#${isActive ? 'activeGradient' : 'inactiveGradient'})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29.3333 15.9998C29.3333 14.2489 28.9885 12.5151 28.3184 10.8974C27.6483 9.27972 26.6662 7.80986 25.4281 6.57175C24.19 5.33363 22.7201 4.35151 21.1024 3.68144C19.4848 3.01138 17.751 2.6665 16 2.6665V15.9998H29.3333Z" stroke={`url(#${isActive ? 'activeGradient' : 'inactiveGradient'})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default GeneralIcon;
