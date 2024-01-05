import React from 'react';
import styles from './Hero.module.css';
import { Section } from '@/components/Section';
import Image from 'next/image';

interface IHero {
  imageUrl: string;
}

export function Hero({ imageUrl }: IHero) {
  return (
    <section>
      <div className={styles.wrapper}>
        <Image
          src={imageUrl}
          alt={'image'}
          fill
          sizes="100vw"
          priority
          className={`${styles.image}`}
        />
      </div>
    </section>
  );
}
