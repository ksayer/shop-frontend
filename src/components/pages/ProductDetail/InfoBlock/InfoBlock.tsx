import React from 'react';
import styles from './InfoBlock.module.css';
import { ImageType } from '@/api/types';
import Image from 'next/image';
import { Content, IContent } from '@/components/pages/ProductDetail/InfoBlock/Content';

interface IInfoBlock extends IContent {
  image: ImageType;
}

export function InfoBlock({ image, title, text, price, discountedPrice }: IInfoBlock) {
  return (
    <div id={'infoblock'} className={`${styles.wrapper} container`}>
      <div className={`${styles['image-wrapper']}`}>
        <Image
          src={image?.absolute_url}
          alt={'image'}
          width={image.width}
          height={image.height}
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={image.optimized ? 100 : 75}
          className={`${styles.image}`}
          priority
        />
      </div>
      <div className={styles.content}>
        <Content title={title} text={text} price={price} discountedPrice={discountedPrice} />
      </div>
    </div>
  );
}
