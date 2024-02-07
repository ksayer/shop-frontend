import React from 'react';
import styles from './Gallery.module.css';
import { ImageType } from '@/api/types';
import Image from 'next/image';

interface IGallery {
  title: string;
  images: ImageType[];
}

export function Gallery({ title, images }: IGallery) {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.images}>
        {images?.map(image => (
          <div key={image.id} className={`${styles['image-wrapper']}`}>
            <Image
              src={image?.absolute_url}
              alt={'image'}
              fill={true}
              sizes="100vw"
              quality={image.optimized ? 100 : 75}
              className={`${styles.image}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
