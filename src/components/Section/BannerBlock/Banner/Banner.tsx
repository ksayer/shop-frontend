import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.css';

type IButton = {
  text: string;
  url: string;
};

export interface IBanner {
  id?: string | number;
  imageUrl: string;
  title: string;
  text: string;
  imageSecond: boolean;
  button?: IButton;
}

export function Banner({ imageUrl, title, text, imageSecond, button }: IBanner) {
  return (
    <article className={styles.article}>
      <div className={`${styles['first-block']}`}>
        <Image
          src={imageUrl}
          alt={'image'}
          width={650}
          height={350}
          sizes="(max-width: 767px) 100vw, 50vw"
          className={styles.image}
          priority
        />
      </div>
      <div className={`${styles['second-block']} ${imageSecond && styles.imageSecond}`}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }}></p>
        {button && <button className={styles.btn}>{button.text}</button>}
      </div>
    </article>
  );
}
