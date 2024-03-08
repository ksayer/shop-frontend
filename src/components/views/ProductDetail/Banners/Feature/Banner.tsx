import React from 'react';
import styles from './Banner.module.css';
import Image from 'next/image';
import { IBanner } from '@/api/catalog/models';

export function Banner({ title, image, description, imageRight }: IBanner) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles['image-block']}`}>
        <Image
          src={image?.absolute_url}
          alt={'image'}
          width={image.width}
          height={image.height}
          sizes="(max-width: 1024px) 0vw, 50vw"
          quality={image.optimized ? 100 : 75}
          className={`${styles.image}`}
        />
      </div>
      <div className={`volume ${styles['content-block']} ${imageRight && styles['image-second']}`}>
        <h3 className={styles.title}>{title}</h3>
        {description && (
          <p className={'base-text'} dangerouslySetInnerHTML={{ __html: description }}></p>
        )}
      </div>
    </div>
  );
}
