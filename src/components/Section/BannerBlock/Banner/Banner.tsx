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
  small?: boolean;
  preTitle?: string;
  title: string;
  text: string;
  imageSecond: boolean;
  avoidMobileImage?: boolean;
  priority?: boolean;
  button?: IButton;
}

export function Banner(
  {
    imageUrl,
    preTitle,
    small,
    title,
    text,
    imageSecond,
    priority,
    button,
    avoidMobileImage,
  }: IBanner
) {
  return (
    <article className={`${styles.article} ${small && styles.small} volume`}>
      <div className={`${styles['first-block']} ${avoidMobileImage && styles['image-desktop-only']}`}>
        <Image
          src={imageUrl}
          alt={'image'}
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          priority={priority}
          className={`${styles.image}`}
        />
      </div>
      <div className={`${styles['second-block']} ${imageSecond && styles.imageSecond}`}>
        {preTitle && <span className={'base-text'}>{preTitle}</span>}
        <h3 className={styles.title}>{title}</h3>
        <p className={'base-text'} dangerouslySetInnerHTML={{ __html: text }}></p>
        {button && <button className={styles.btn}>{button.text}</button>}
      </div>
    </article>
  );
}
