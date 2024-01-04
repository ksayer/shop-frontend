import React from 'react';
import styles from './Review.module.css';
import Image from 'next/image'

export interface IReview {
  id?: string | number;
  title: string;
  subtitle: string;
  text: string;
  imageUrl: string;
  link: string;
}

export function Review({title, subtitle, text, link, imageUrl}: IReview) {
  return (
    <article className={`${styles.article} volume flex-gap`}>
      <a href={link} className={styles.link}>
        <div className={styles.top}>
          <Image
            src={imageUrl}
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
        <p className={'base-text'}>
          {text}
        </p>
      </a>
    </article>
  );
}
