import React, { useState } from 'react';
import styles from './Visual.module.css';
import { ColorSelector } from '@/components/pages/ProductDetail/ModificationList/Modification/Visual/ColorSelector';
import Image from 'next/image';
import { ImageType } from '@/api/types';

interface IVisual {
  image: ImageType;
  scheme: ImageType;
}

export function Visual({ image, scheme }: IVisual) {
  const [activeImage, setActiveImage] = useState('image');
  return (
    <div className={`volume ${styles.wrapper}`}>
      <ColorSelector />
      <div className={`${styles.images}`}>
        <div className={`${styles['image-wrapper']}`}>
          <Image
            src={image?.absolute_url}
            alt={'image'}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={image.optimized ? 100 : 75}
            className={`${styles.image} ${activeImage === 'image' && styles['image--active']}`}
          />
          <Image
            src={scheme?.absolute_url}
            alt={'scheme'}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={scheme.optimized ? 100 : 75}
            className={`${styles.image} ${activeImage === 'scheme' && styles['image--active']}`}
          />
        </div>
        <div className={styles.buttons}>
          <button
            className={`${styles.button} ${activeImage === 'image' && styles['button--active']}`}
            onClick={() => setActiveImage('image')}
          >
            Изображение
          </button>
          <button
            className={`${styles.button} ${activeImage === 'scheme' && styles['button--active']}`}
            onClick={() => setActiveImage('scheme')}
          >
            Схема
          </button>
        </div>
      </div>
    </div>
  );
}