import React from 'react';
import { TIcon } from '@/components/icons';

export function Cart({ width = 24, height = 24, className }: TIcon) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 6h-2c0-2.21-2-5-6-5S6 3.79 6 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-3c3 0 4 1.9 4 3H8c0-1.1 1-3 4-3zm8 17H4V8h2v1c0 .55.45 1 1 1s1-.45 1-1V8h8v1c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"
        fill="#C6C6C6"
      ></path>
    </svg>
  );
}
