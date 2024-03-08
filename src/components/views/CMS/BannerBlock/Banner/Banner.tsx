import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.css';
import { MapPoint } from '@/components/icons/MapPoint';
import { Mail } from '@/components/icons/Mail';
import { PhoneSmall } from '@/components/icons/PhoneSmall';
import { ImageData } from '@/api/types';
import { IBanner } from '@/api/cms';

interface IBannerExtended extends IBanner {
  priority: boolean;
}

export function Banner({
  image,
  pre_title,
  title,
  description,
  image_position,
  priority,
  buttons,
  phone,
  address,
  email,
  type,
  mobile_image,
}: IBannerExtended) {
  return (
    <article
      className={`${styles.article} ${!mobile_image && styles.small} volume ${
        type === 'CONSULTANT' && styles.consultant
      }`}
    >
      <div className={`${styles['first-block']} ${!mobile_image && styles['image-desktop-only']}`}>
        <Image
          src={image?.absolute_url}
          alt={'image'}
          width={image.width}
          height={image.height}
          sizes="(max-width: 767px) 100vw, 50vw"
          quality={image.optimized ? 100 : 75}
          priority={priority}
          className={`${styles.image}`}
        />
      </div>
      <div
        className={`${styles['second-block']} ${image_position === 'right' && styles.imageSecond}`}
      >
        {pre_title && <span className={'base-text'}>{pre_title}</span>}
        <h3 className={styles.title}>{title}</h3>

        {description && (
          <p className={'base-text'} dangerouslySetInnerHTML={{ __html: description }}></p>
        )}

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
              <a href={data.link} key={data.id} className={styles.btn}>
                {data.title}
              </a>
            ))}
        </div>
      </div>
    </article>
  );
}
