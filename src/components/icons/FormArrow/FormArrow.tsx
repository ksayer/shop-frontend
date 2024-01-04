import React from 'react';
import {TIcon} from "@/components/icons";

export function FormArrow({width = 20, height = 20, className}: TIcon) {
  return (
    <svg className={className}
         width={width}
         height={height} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.507513 0.769059L16.7694 8L0.507513 15.2309L0.500503 10.1429L5.72342 8.47634L7.21623 8L5.72342 7.52366L0.500503 5.85709L0.507513 0.769059Z"
        stroke="#333333"></path>
    </svg>
  );
}
