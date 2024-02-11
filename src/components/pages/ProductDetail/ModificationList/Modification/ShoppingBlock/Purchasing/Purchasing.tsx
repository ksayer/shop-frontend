import React from 'react';
import styles from './Purchasing.module.css';
import { Counter } from '@/components/pages/ProductDetail/ModificationList/Modification/ShoppingBlock/Purchasing/Counter';

export function Purchasing() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.price}>12910₽</div>
      <div className={styles.counter}>
        <Counter />
      </div>
      <button className={styles.btn}>В корзину</button>
    </div>
  );
}
