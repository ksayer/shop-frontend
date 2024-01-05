import React from 'react';
import { TIcon } from '@/components/icons';

export function Zen({ width = 38, height = 38, className }: TIcon) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29.77 29.77"
    >
      <defs></defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Icons">
          <g id="Дзен">
            <g id="Background">
              <path
                d="M14.89,29.77A14.89,14.89,0,1,1,29.77,14.89,14.91,14.91,0,0,1,14.89,29.77ZM14.89.5A14.39,14.39,0,1,0,29.27,14.89,14.4,14.4,0,0,0,14.89.5Z"
                fill="#676a6c"
              ></path>
            </g>
            <path
              id="Дзен-2"
              data-name="Дзен"
              d="M14.64,7.24c0,3.09-.25,4.83-1.41,6s-2.9,1.37-6,1.41v.45c3.09,0,4.83.25,6,1.42s1.37,2.9,1.41,6h.46c0-3.1.25-4.84,1.41-6s2.9-1.38,6-1.42v-.45c-3.09,0-4.83-.25-6-1.41s-1.37-2.91-1.41-6Z"
              fill="#00b3b5"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}
