import React from 'react';
import styles from './Model.module.css';
import Image from "next/image";

export interface IModel {
  id?: string | number,
  imageUrl: string;
  title: string,
  text: string,
}

export function Model({imageUrl, title, text}: IModel) {
  return (
    <article className={styles.article}>
      <a href='#' className={styles.button}>
        <div className={`${styles['first-block']}`}>
          <Image
            src={imageUrl}
            alt={'image'}
            width={650}
            height={250}
            sizes="(max-width: 767px) 100vw, 50vw"
            className={styles.image}
            priority
          />
        </div>
        <div className={`${styles['second-block']}`}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
      </a>
    </article>
  );
}
