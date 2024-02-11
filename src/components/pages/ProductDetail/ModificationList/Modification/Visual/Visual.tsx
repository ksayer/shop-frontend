import React from 'react';
import styles from './Visual.module.css';
import { ColorSelector } from '@/components/pages/ProductDetail/ModificationList/Modification/Visual/ColorSelector';
import Image from 'next/image';
import { ImageType } from '@/api/types';

interface IVisual {
  image: ImageType;
  scheme: ImageType;
}

export function Visual({ image, scheme }: IVisual) {
  return (
    <div className={`volume ${styles.wrapper}`}>
      <ColorSelector />
      {/*<div>*/}
      {/*  <Image*/}
      {/*    src={image?.absolute_url}*/}
      {/*    alt={'image'}*/}
      {/*    width={image.width}*/}
      {/*    height={image.height}*/}
      {/*    sizes="(max-width: 768px) 100vw, 50vw"*/}
      {/*    quality={image.optimized ? 100 : 75}*/}
      {/*    className={`${styles.image}`}*/}
      {/*  />*/}
      {/*  <Image*/}
      {/*    src={scheme?.absolute_url}*/}
      {/*    alt={'scheme'}*/}
      {/*    width={scheme.width}*/}
      {/*    height={scheme.height}*/}
      {/*    sizes="(max-width: 1024px) 100vw, 50vw"*/}
      {/*    quality={scheme.optimized ? 100 : 75}*/}
      {/*    className={`${styles.scheme}`}*/}
      {/*  />*/}
      {/*</div>*/}
      <div>
        <button>Изображение</button>
        <button>Схема</button>
      </div>
    </div>
  );
}
