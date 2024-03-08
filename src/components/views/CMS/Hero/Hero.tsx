import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import { ImageData } from '@/api/types';

interface IHero {
  title?: string;
  description?: string;
  image: ImageData;
}

export function Hero({ image, title, description }: IHero) {
  return (
    <div className={`flex-gap ${styles.hero}`}>
      <div className={`${styles['image-wrapper']}`}>
        <Image
          src={image.absolute_url}
          alt={'image'}
          fill
          sizes="100vw"
          priority
          className={`${styles.image}`}
        />
      </div>
      {title && description && (
        <div className={`container ${styles.content}`}>
          <h2 className={styles.title}>{title}</h2>
          <p className={'base-text'}>{description}</p>
        </div>
      )}
    </div>
  );
}
