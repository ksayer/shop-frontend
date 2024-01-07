import React from 'react';
import styles from './Card.module.css';
import Image from 'next/image';
import { RightSimpleArrow } from '@/components/icons/RightSimpleArrow';
import { ImageType } from '@/api/types';

type CardType = 'publication' | 'model' | 'feedback' | null;

export interface ICard {
  id?: string | number;
  image: ImageType;
  slug?: string;
  title: string;
  text?: string;
  arrow?: boolean;
  type?: CardType;
}

function getUrl(type: CardType): string {
  if (type === 'model') return '/catalog/models/';
  if (type === 'publication') return '/publications/';
  return '/';
}

export function Card({ image, title, text, arrow, slug, type = null }: ICard) {
  return (
    <article className={`${styles.article} volume`}>
      <a href={`${getUrl(type)}${slug}`} className={styles.button}>
        <div className={`${styles['first-block']}`}>
          <Image
            src={image?.absolute_url}
            alt={'image'}
            width={image.width}
            height={image.height}
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