import React from 'react';
import styles from './Review.module.css';
import Image from 'next/image';
import { ImageType } from '@/api/types';

export interface IReview {
  id?: string | number;
  image: ImageType;
  slug?: string;
  title: string;
  subtitle?: string;
  description?: string;
  arrow?: boolean;
}

export function Review({ title, subtitle, description, slug, image }: IReview) {
  return (
    <article className={`${styles.article} volume flex-gap`}>
      <a href={slug} className={styles.link}>
        <div className={styles.top}>
          <Image
            src={image?.absolute_url}
            alt={title}
            width={76}
            height={76}
            sizes={'(min-width: 480px) 92px, 76px'}
            className={styles.image}
          />
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
            <span className={'base-text'}>{subtitle}</span>
          </div>
        </div>
        <p className={'base-text'}>{description}</p>
      </a>
    </article>
  );
}
