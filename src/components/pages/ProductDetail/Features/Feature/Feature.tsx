import React from 'react';
import styles from './Feature.module.css';
import { ImageType } from '@/api/types';
import Image from 'next/image';
export interface IFeature {
  id?: number;
  title: string;
  description?: string;
  image: ImageType;
  imageRight?: boolean;
}

export function Feature({ title, image, description, imageRight }: IFeature) {
  return (
    <div>
      <div className={`${styles['first-block']}`}>
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
      <div className={`${styles['second-block']} ${imageRight && styles.imageSecond}`}>
        <h3 className={styles.title}>{title}</h3>
        {description && (
          <p className={'base-text'} dangerouslySetInnerHTML={{ __html: description }}></p>
        )}
      </div>
    </div>
  );
}
