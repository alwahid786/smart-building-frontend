const LightBox = () => {
  return (
    <>
      <style>
        {`
          #top {
            animation: slideDown 1s ease-out forwards;
            transform: translateY(-200%); /* Start above the view */
          }

          #bottom {
            animation: riseUp 1s ease-out forwards;
            transform: translateY(200%); /* Start below the view */
          }

          @keyframes slideDown {
            to { transform: translateY(0); }
          }

          @keyframes riseUp {
            to { transform: translateY(0); }
          }

          .loader {
            // width: 93px;
            // height: 105px;
            display: block;
            // margin: auto;
            overflow: hidden; /* Keeps parts out of view when out of initial position */
          }
        `}
      </style>

      <div className="loader">
        <svg
          width="93"
          height="105"
          viewBox="0 0 93 105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_408_40)">
            <path
              id="top"
              d="M69.0377 0L45.9648 4.40472V69.6793H49.261V7.16701L69.0377 3.50885V61.3841H72.3338V5.11811L82.3458 9.82146L83.7466 6.81861L69.0377 0Z"
              fill="#FAF8F9"
            />
            <path
              id="top"
              d="M46.6148 38.5061L32.153 32.293L7.23438 36.7724V63.0431H10.5305V39.543L30.3072 35.9927V34.8396H33.6033V36.5816L45.9638 42.3053L46.6148 38.5061Z"
              fill="#FAF8F9"
            />
            <path
              id="top"
              d="M30.3066 34.8397V35.9927V63.0432H33.6028V36.5816V34.8397H30.3066Z"
              fill="#FAF8F9"
            />
            <path
              id="top"
              d="M59.1494 21.5674L55.0293 23.2264V14.1018L59.1494 12.4427V21.5674Z"
              fill="#FAF8F9"
            />
            <path
              id="top"
              d="M19.5948 49.7709L15.4746 51.4299V42.3053L19.5948 40.6462V49.7709Z"
              fill="#FAF8F9"
            />
            <path
              id="top"
              d="M19.5948 61.3841L15.4746 63.0432V53.9185L19.5948 52.2595V61.3841Z"
              fill="#FAF8F9"
            />
            <path
              id="top"
              d="M59.1494 34.0101L55.0293 35.6691V26.5445L59.1494 24.8854V34.0101Z"
              fill="#FAF8F9"
            />
            <path
              id="top"
              d="M65.7412 45.6233L61.6211 47.2824V38.1577L65.7412 36.4987V45.6233Z"
              fill="#FAF8F9"
            />
            <path
              id="top"
              d="M65.7412 58.0661L61.6211 59.7251V50.6004L65.7412 48.9414V58.0661Z"
              fill="#FAF8F9"
            />
            <path
              id="bottom"
              d="M92.8681 81.2261L90.8081 81.2924C90.0335 81.3173 76.4617 81.8399 63.2608 86.9995C75.3246 78.9615 88.1217 76.7384 88.3195 76.7052L90.3549 76.3734L89.6956 72.2839L87.6603 72.6157C86.4242 72.8148 58.2012 77.6675 44.786 100.089C38.82 93.3121 20.3618 73.9263 2.53801 71.7696L0.494418 71.5208L0 75.6351L2.04359 75.884C21.5731 78.2398 43.3275 104.735 43.5417 105L46.9697 104.635C47.9173 102.785 48.9886 101.068 50.1505 99.4505L50.0845 99.5335L51.815 98.2228C65.9141 86.394 90.6927 85.44 90.9399 85.4317L93 85.3654L92.8681 81.2178V81.2261Z"
              fill="#FAF8F9"
            />
          </g>
          <defs>
            <clipPath id="clip0_408_40">
              <rect width="93" height="105" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default LightBox;
