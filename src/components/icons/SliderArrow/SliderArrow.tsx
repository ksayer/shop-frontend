import React from 'react';
import { TIcon } from '@/components/icons';

export function SliderArrow({ width = 20, height = 20, className }: TIcon) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {className?.includes('reverse') ? (
        <path
          d="M0.999998 13.5L26 13.5M26 13.5L14 1M26 13.5L14 26"
          stroke="#333333"
          strokeLinecap="round"
        ></path>
      ) : (
        <path
          d="M26 13.5L1 13.5M1 13.5L13 26M1 13.5L13 1"
          stroke="#333333"
          strokeLinecap="round"
        ></path>
      )}
    </svg>
  );
}
