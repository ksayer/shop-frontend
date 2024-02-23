import React from 'react';
import styles from './ShoppingBlock.module.css';
import { Purchasing } from '@/components/pages/ProductDetail/ModificationList/Modification/ShoppingBlock/Purchasing';

export function ShoppingBlock() {
  return (
    <div className={`volume ${styles.wrapper}`}>
      <div className={styles.left}>
        <h4 className={styles.title}>FOG TABLE S</h4>
        <ul className={`base-text ${styles.list}`}>
          <li className={styles.item}>
            <span className={`${styles['item__name']}`}>Вид:</span>
            <span>FOG TABLE</span>
          </li>
          <li className={styles.item}>
            <span className={`${styles['item__name']}`}>Мощность:</span>
            <span>7.8 Вт</span>
          </li>
          <li className={styles.item}>
            <span className={`${styles['item__name']}`}>Цвет корпуса:</span>
            <span>Белый</span>
          </li>
          <li className={styles.item}>
            <span className={`${styles['item__name']}`}>Цветовая температура:</span>
            <span>3000K</span>
          </li>
          <li className={styles.item}>
            <span className={`${styles['item__name']}`}>Угол рассеивания:</span>
            <span>360°</span>
          </li>
        </ul>
      </div>
      <Purchasing />
    </div>
  );
}
