import React from 'react';
import styles from './InfoBlock.module.css';
import { ImageData } from '@/api/types';
import Image from 'next/image';
import { Content, IContent } from '../../../ui/Content';
import { Pricing } from '@/components/views/ProductDetail/InfoBlock/Pricing';

interface IInfoBlock extends IContent {
  title: string;
  text: string;
  image: ImageData;
  price: number;
  discountedPrice?: number;
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
        <Content title={title} text={text}>
          <Pricing price={price} discountedPrice={discountedPrice} />
        </Content>
      </div>
    </div>
  );
}
