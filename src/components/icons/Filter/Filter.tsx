import React from 'react';
import { TIcon } from '@/components/icons';

export function Filter({ width = 14, height = 17, className }: TIcon) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="red"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#000" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 14.362H8.227M5.5 14.362H.727M13 8.907H6.864M4.136 8.907H.727M13 3.453H9.59M6.864 3.453H.727M8.227 16.407v-4.09M4.136 10.953V6.862M9.59 5.498v-4.09"></path>
      </g>
    </svg>
  );
}
