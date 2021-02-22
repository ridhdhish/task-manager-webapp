import React from "react";

const backSvg = () => {
  return (
    <div
      style={{
        position: "fixed",
        height: "100%",
        width: "100%",
        paddingTop: 130,
        
      }}
    >
      <svg
        height="100%"
        width="130%"
        id="bg-svg"
        viewBox="0 0 1640 600"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="5%" stop-color="#002bdcff"></stop>
            <stop offset="95%" stop-color="#32ded4ff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,700 C 0,700 0,350 0,350 C 113.61722488038276,320.2870813397129 227.23444976076553,290.5741626794258 328,291 C 428.76555023923447,291.4258373205742 516.6794258373205,321.99043062200957 607,363 C 697.3205741626795,404.00956937799043 790.0478468899522,455.4641148325359 873,470 C 955.9521531100478,484.5358851674641 1029.1291866028707,462.1531100478469 1122,436 C 1214.8708133971293,409.8468899521531 1327.4354066985647,379.92344497607655 1440,350 C 1440,350 1440,700 1440,700 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150"
        ></path>
      </svg>
    </div>
  );
};

export default backSvg;
