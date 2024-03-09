import React from 'react';
import styles from './Card.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface ICard {
  image: string;
  title: string;
  slug: string;
}

export function Card({ image, title, slug }: ICard) {
  return (
    <Link href={`/compilations/${slug}/`} className={styles.card}>
      <div className={`${styles['image-wrapper']}`}>
        <Image
          src={image}
          alt={'card'}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 38vw, 25vw"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
      </div>
    </Link>
  );
}
