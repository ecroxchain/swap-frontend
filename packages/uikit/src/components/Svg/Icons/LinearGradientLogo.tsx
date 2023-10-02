import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 0 0" {...props}>
      <defs>
        <linearGradient id="paint0_linear_198_15990" x1="11.7376" y1="0.523009" x2="20.2792" y2="31.5382" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D8A62E"/>
          <stop offset="0.2765" stopColor="#FBCA02"/>
          <stop offset="0.5084" stopColor="#F6F583"/>
          <stop offset="0.757" stopColor="#FBCA02"/>
          <stop offset="1" stopColor="#C69752"/>
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
