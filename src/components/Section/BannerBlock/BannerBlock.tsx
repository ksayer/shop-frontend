import React from 'react';
import { Section } from '@/components/Section';
import { Banner, IBanner } from '@/components/Section/BannerBlock/Banner';
import styles from './BannerBlock.module.css';

interface IBannerBlock {
  order?: number;
  title?: string;
  banners?: IBanner[];
}

export function BannerBlock({ order, title, banners }: IBannerBlock) {
  return (
    <Section>
      <div className={`${styles.wrapper} flex-gap-title`}>
        {title && (
          <div className={styles.header}>
            <h2 className={'section__title'}>{title}</h2>
          </div>
        )}
        <div className={`${styles.banners} flex-gap`}>
          {banners?.map((data, index) => (
            <Banner
              key={data.id}
              {...data}
              priority={order === 0 && (index === 0 || index === 1)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
