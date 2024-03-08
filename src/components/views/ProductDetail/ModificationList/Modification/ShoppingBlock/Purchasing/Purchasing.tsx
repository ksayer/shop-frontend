import React from 'react';
import styles from './Purchasing.module.css';
import { Counter } from '@/components/views/ProductDetail/ModificationList/Modification/ShoppingBlock/Purchasing/Counter';

export function Purchasing({ price }: { price: number }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.price}>{price}₽</div>
      <Counter />
      <button className={styles.btn}>В корзину</button>
    </div>
  );
}
