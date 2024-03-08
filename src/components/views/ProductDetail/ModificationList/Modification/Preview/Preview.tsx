import React, { useState } from 'react';
import styles from './Preview.module.css';
import Image from 'next/image';
import { ImageData } from '@/api/types';

interface IPreview {
  image: ImageData;
  scheme: ImageData;
}

export function Preview({ image, scheme }: IPreview) {
  const [activeImage, setActiveImage] = useState('image');

  return (
    <>
      <div className={`${styles.images}`}>
        <div className={`${styles['image-wrapper']}`}>
          <Image
            src={image?.absolute_url}
            alt={'image'}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={image.optimized ? 100 : 75}
            className={`${styles.image} ${activeImage === 'image' && styles['image--active']}`}
            priority
          />
        </div>
        {scheme && (
          <div className={`${styles['image-wrapper']}`}>
            <Image
              src={scheme?.absolute_url}
              alt={'scheme'}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={scheme.optimized ? 100 : 75}
              className={`${styles.image} ${activeImage === 'scheme' && styles['image--active']}`}
            />
          </div>
        )}
      </div>
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${activeImage === 'image' && styles['button--active']}`}
          onClick={() => setActiveImage('image')}
        >
          Изображение
        </button>
        <button
          className={`${styles.button} ${activeImage === 'scheme' && styles['button--active']} ${
            !scheme && styles['button--disabled']
          }`}
          onClick={() => setActiveImage('scheme')}
          disabled={!scheme}
        >
          Схема
        </button>
      </div>
    </>
  );
}
