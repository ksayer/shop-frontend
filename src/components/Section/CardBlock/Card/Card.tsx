import React from 'react';
import styles from './Card.module.css';
import Image from 'next/image';
import { RightSimpleArrow } from '@/components/icons/RightSimpleArrow';

export interface ICard {
  id?: string | number;
  imageUrl: string;
  title: string;
  text?: string;
  arrow?: boolean;
  type?: 'publication' | null;
}

export function Card({ imageUrl, title, text, arrow, type = null }: ICard) {
  return (
    <article className={`${styles.article} volume`}>
      <a href="#" className={styles.button}>
        <div className={`${styles['first-block']}`}>
          <Image
            src={imageUrl}
            alt={'image'}
            width={500}
            height={500}
            sizes="(max-width: 767px) 100vw, 50vw"
            className={`${styles.image} ${type === 'publication' && styles['bg-image']}`}
            priority
          />
        </div>
        <div className={`${styles['second-block']}`}>
          <h3 className={styles.title}>{title}</h3>
          {text && <p className={'base-text'} dangerouslySetInnerHTML={{ __html: text }}></p>}
          {arrow && <RightSimpleArrow className={styles.card__link} />}
        </div>
      </a>
    </article>
  );
}
