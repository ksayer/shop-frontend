import React from 'react';
import { TIcon } from '@/components/icons';

export function MapPoint({ width = 20, height = 20, className }: TIcon) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" fill="#F9F8F9"></rect>
      <path
        d="M15.7311 7.92308C15.7311 8.85132 15.3785 9.9829 14.8056 11.1922C14.2374 12.3918 13.4748 13.622 12.7046 14.7346C11.9354 15.8456 11.1653 16.8298 10.5869 17.5367C10.3565 17.8184 10.1568 18.0555 10.0003 18.2387C9.84376 18.0555 9.64413 17.8184 9.41372 17.5367C8.83535 16.8298 8.06516 15.8456 7.29601 14.7346C6.52576 13.622 5.76321 12.3918 5.19496 11.1922C4.62213 9.9829 4.26953 8.85132 4.26953 7.92308C4.26953 4.01093 6.86851 1.5 10.0003 1.5C13.1321 1.5 15.7311 4.01093 15.7311 7.92308Z"
        stroke="#333333"
      ></path>
      <circle cx="9.9997" cy="7.23114" r="2.26923" stroke="#333333"></circle>
    </svg>
  );
}
