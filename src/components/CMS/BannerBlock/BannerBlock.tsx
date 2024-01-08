import React from 'react';
import { Banner, IBanner } from '@/components/CMS/BannerBlock/Banner';
import styles from './BannerBlock.module.css';
import { Hero } from '@/components/CMS/Hero';
import { TabPanel } from '@/components/CMS/BannerBlock/TabPanel';

export interface IBannerBlock {
  id?: number | string;
  ordering?: number;
  title?: string;
  banners?: IBanner[];
}

export function BannerBlock({ ordering, title, banners }: IBannerBlock) {
  return (
    <div className={`${styles.wrapper} flex-gap-title`}>
      {title && (
        <div className={styles.header}>
          <h2 className={'section__title'}>{title}</h2>
        </div>
      )}
      <div className={`${styles.banners} flex-gap`}>
        {banners?.map((data, index) => {
          if (data.type === 'SIMPLE' || data.type === 'CONSULTANT') {
            return (
              <Banner
                key={data.id}
                {...data}
                priority={ordering === 0 && (index === 0 || index === 1)}
              />
            );
          } else if (data.type === 'HERO') {
            return <Hero key={data.id} {...data} />;
          } else if (data.type === 'TAB') {
            return <TabPanel key={data.id} {...data} />;
          }
        })}
      </div>
    </div>
  );
}
