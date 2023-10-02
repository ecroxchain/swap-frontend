import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
     <circle cx={14} cy={14} r={14} fill="url(#paint0_linear_825_68)" />
    <path
      d="M5 20.2727C6.68473 21.3636 8.74384 22 10.9901 22C18.197 22 22.3153 16.0909 22.0345 10.7273C22.7833 10.1818 23.4384 9.54545 24 8.81818C23.3448 9.09091 22.5961 9.36364 21.7537 9.45455C22.5961 9 23.1576 8.27273 23.4384 7.36364C22.6897 7.81818 21.8473 8.09091 21.0049 8.27273C20.2562 7.45455 19.2266 7 18.1034 7C15.67 7 13.798 9.27273 14.3596 11.6364C11.0837 11.4545 8.27586 10 6.31034 7.72727C5.28079 9.36364 5.74877 11.6364 7.52709 12.7273C6.87192 12.7273 6.31034 12.5455 5.74877 12.2727C5.74877 14 6.96552 15.6364 8.83744 16C8.27586 16.1818 7.71429 16.1818 7.05911 16.0909C7.52709 17.6364 9.02463 18.7273 10.7094 18.7273C9.11823 20 7.05911 20.5455 5 20.2727Z"
      fill="#0E0E0E"
    />
    <defs>
      <linearGradient
        id="paint0_linear_825_68"
        x1={14}
        y1={0}
        x2={14}
        y2={28}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EC233B" />
        <stop offset={1} stopColor="#EC233B" />
      </linearGradient>
    </defs>
    </svg>
  );
};

export default Icon;
