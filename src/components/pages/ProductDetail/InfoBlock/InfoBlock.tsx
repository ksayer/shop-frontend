import React from 'react';
import styles from './InfoBlock.module.css';
import { ImageType } from '@/api/types';
import Image from 'next/image';

interface IInfoBlock {
  image: ImageType;
  title: string;
  text: string;
  price: number;
  discountedPrice: number;
}

export function InfoBlock({ image, title, text, price, discountedPrice }: IInfoBlock) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles['image-wrapper']}`}>
        <Image
          src={image?.absolute_url}
          alt={'image'}
          width={image.width}
          height={image.height}
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={image.optimized ? 100 : 75}
          className={`${styles.image}`}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <div className={`${styles['sell-info']}`}>
          <div className={`${styles['prices']}`}>
            {discountedPrice ? (
              <div>
                <span className={`${styles.discount}`}>{discountedPrice}</span>
                <span className={`${styles['price']} ${styles['price--old']}`}>{price}</span>
              </div>
            ) : (
              <div>
                <span className={styles.price}>{price}</span>
              </div>
            )}
          </div>
          <button className={`${styles['btn-buy']}`}>Купить</button>
        </div>
      </div>
    </div>
  );
}
