import React from 'react';
import styles from './Pricing.module.css';

interface IPricing {
  price: number;
  discountedPrice?: number;
}

export function Pricing({ price, discountedPrice }: IPricing) {
  return (
    <div className={`${styles['sell-info']}`}>
      <div className={`${styles['prices-wrapper']}`}>
        {' '}
        {discountedPrice ? (
          <>
            <span className={`${styles.discount}`}>от {discountedPrice} ₽</span>
            <span className={`${styles['price']} ${styles['price--old']}`}>{price} ₽</span>
          </>
        ) : (
          <div>
            <span className={styles.price}>от {price} ₽</span>
          </div>
        )}
      </div>
      <button className={`${styles['btn-buy']}`}>Купить</button>
    </div>
  );
}
