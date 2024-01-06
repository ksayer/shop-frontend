import React from 'react';
import { Section } from '@/components/Section';
import { Banner, IBanner } from '@/components/Section/BannerBlock/Banner';
import styles from './BannerBlock.module.css';

export interface IBannerBlock {
  id?: number | string;
  ordering?: number;
  title?: string;
  banners?: IBanner[];
}

export function BannerBlock({ ordering, title, banners }: IBannerBlock) {
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
              priority={ordering === 0 && (index === 0 || index === 1)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
