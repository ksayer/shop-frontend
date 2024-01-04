import React from 'react';
import styles from './Card.module.css';
import Image from "next/image";
import {RightSimpleArrow} from "@/components/icons/RightSimpleArrow";

export interface ICard {
  id?: string | number,
  imageUrl: string;
  title: string,
  text: string,
  arrow?: boolean,
}

export function Card({imageUrl, title, text, arrow}: ICard) {
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
          {arrow && <RightSimpleArrow className={styles.card__link}/>}
        </div>
      </a>
    </article>
  );
}
