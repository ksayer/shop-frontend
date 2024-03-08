import React from 'react';
import styles from './Card.module.css';
import Image from 'next/image';
import { RightSimpleArrow } from '@/components/icons/RightSimpleArrow';
import { CardType, ICard } from '@/api/cms';

function getUrl(type: CardType): string {
  if (type === 'model') return '/catalog/models/';
  if (type === 'publication') return '/publications/';
  return '/';
}

export function Card({ image, title, description, arrow, slug, type }: ICard) {
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
          {description && (
            <p className={'base-text'} dangerouslySetInnerHTML={{ __html: description }}></p>
          )}
          {arrow && <RightSimpleArrow className={styles.card__link} />}
        </div>
      </a>
    </article>
  );
}
