import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.css';
import { MapPoint } from '@/components/icons/MapPoint';
import { Mail } from '@/components/icons/Mail';
import { PhoneSmall } from '@/components/icons/PhoneSmall';

type IButton = {
  id?: string | number;
  text: string;
  url: string;
};

export interface IBanner {
  id?: string | number;
  imageUrl: string;
  preTitle?: string;
  title: string;
  text?: string;
  imageSecond: boolean;
  avoidMobileImage?: boolean;
  priority?: boolean;
  phone?: string;
  address?: string;
  email?: string;
  buttons?: IButton[];
}

export function Banner({
  imageUrl,
  preTitle,
  title,
  text,
  imageSecond,
  priority,
  buttons,
  phone,
  address,
  email,
  avoidMobileImage,
}: IBanner) {
  return (
    <article className={`${styles.article} ${avoidMobileImage && styles.small} volume`}>
      <div
        className={`${styles['first-block']} ${avoidMobileImage && styles['image-desktop-only']}`}
      >
        <Image
          src={imageUrl}
          alt={'image'}
          width={500}
          height={500}
          sizes="(max-width: 767px) 100vw, 50vw"
          priority={priority}
          className={`${styles.image}`}
        />
      </div>
      <div className={`${styles['second-block']} ${imageSecond && styles.imageSecond}`}>
        {preTitle && <span className={'base-text'}>{preTitle}</span>}
        <h3 className={styles.title}>{title}</h3>

        {text && <p className={'base-text'} dangerouslySetInnerHTML={{ __html: text }}></p>}

        {phone && (
          <p className={`base-text ${styles.contact}`}>
            <PhoneSmall className={styles.contact__icon} />
            <a href={`tel:${phone}`}>{phone}</a>
          </p>
        )}

        {address && (
          <p className={`base-text ${styles.contact}`}>
            <MapPoint />
            <span>{address}</span>
          </p>
        )}

        {email && (
          <p className={`base-text ${styles.contact}`}>
            <Mail className={styles.contact__icon} />
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        )}

        <div className={`${styles.buttons} flex-gap`}>
          {buttons &&
            buttons.map(data => (
              <button key={data.id} className={styles.btn}>
                {data.text}
              </button>
            ))}
        </div>
      </div>
    </article>
  );
}
