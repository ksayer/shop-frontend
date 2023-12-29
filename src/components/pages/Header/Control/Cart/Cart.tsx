import React from 'react';
import { Cart as CartIcon } from '@/components/icons/Cart';

interface ICart {
  svgClass: string;
  btnClass: string;
}

export function Cart({ svgClass, btnClass }: ICart) {
  return (
    <button className={btnClass}>
      <CartIcon className={svgClass} />
    </button>
  );
}
