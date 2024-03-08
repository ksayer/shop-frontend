import React from 'react';
import { TIcon } from '@/components/icons';

export function File({ width = 14, height = 16, className }: TIcon) {
  return (
    <svg className={className} width={width} height={height} fill="none">
      <path
        d="M8.4 0H1.867C.84 0 .009.8.009 1.778L0 14.222C0 15.2.83 16 1.857 16h10.276C13.16 16 14 15.2 14 14.222V5.333L8.4 0zM1.867 14.222V1.778h5.6v4.444h4.666v8H1.867z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
