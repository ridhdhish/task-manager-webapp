import React from "react";

const backSvg = () => {
  return (
    <div>
      <svg
        height="100%"
        width="100%"
        id="bg-svg"
        viewBox="0 0 1440 700"
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
          d="M 0,700 C 0,700 0,350 0,350 C 136.66666666666669,272.6666666666667 273.33333333333337,195.33333333333337 447,230 C 620.6666666666666,264.66666666666663 831.3333333333333,411.3333333333333 1003,450 C 1174.6666666666667,488.6666666666667 1307.3333333333335,419.33333333333337 1440,350 C 1440,350 1440,700 1440,700 Z"
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
