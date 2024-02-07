import React from 'react';
import styles from './Content.module.css';

export interface IContent {
  title: string;
  text: string;
  price: number;
  discountedPrice?: number;
}

export function Content({ title, text, price, discountedPrice }: IContent) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <p className={`base-text ${styles.text}`} dangerouslySetInnerHTML={{ __html: text }}></p>
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
    </>
  );
}
