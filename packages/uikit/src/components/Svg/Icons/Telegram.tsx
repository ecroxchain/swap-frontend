import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx={14} cy={14} r={14} fill="url(#paint0_linear_825_71)" />
      <path
        d="M4.35953 13.7172L8.55404 15.3047L10.112 20.5556C10.2319 20.9219 10.5914 21.044 10.8311 20.7998L13.1081 18.846C13.3478 18.6017 13.7073 18.6017 13.947 18.846L18.1415 21.8988C18.3812 22.1431 18.8606 21.8988 18.8606 21.6546L21.9765 6.63453C22.0963 6.26818 21.7368 5.90184 21.3773 6.02395L4.35953 12.7403C3.88016 12.8624 3.88016 13.4729 4.35953 13.7172ZM9.87232 14.4499L18.0217 9.32104C18.1415 9.19893 18.2614 9.44316 18.1415 9.56527L11.4303 15.9152C11.1906 16.1595 11.0708 16.4037 10.9509 16.77L10.7112 18.4796C10.7112 18.7239 10.3517 18.7239 10.3517 18.4796L9.51279 15.3047C9.39295 15.0604 9.51279 14.572 9.87232 14.4499Z"
        fill="#0E0E0E"
      />
      <defs>
        <linearGradient
          id="paint0_linear_825_71"
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
