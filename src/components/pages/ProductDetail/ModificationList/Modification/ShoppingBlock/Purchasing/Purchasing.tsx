import React from 'react';
import styles from './Purchasing.module.css';
import { Counter } from '@/components/pages/ProductDetail/ModificationList/Modification/ShoppingBlock/Purchasing/Counter';

export function Purchasing() {
  return (
    <div>
      <div>12910₽</div>
      <div>
        <Counter />
      </div>
      <button>В корзину</button>
    </div>
  );
}
