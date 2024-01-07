import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import { ImageType } from '@/api/types';

interface IHero {
  image: ImageType;
}

export function Hero({ image }: IHero) {
  return (
    <div className={styles.wrapper}>
      <Image
        src={image.absolute_url}
        alt={'image'}
        fill
        sizes="100vw"
        priority
        className={`${styles.image}`}
      />
    </div>
  );
}
