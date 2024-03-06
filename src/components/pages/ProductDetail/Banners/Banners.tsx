import React from 'react';
import styles from './Banners.module.css';
import { Banner } from '@/components/pages/ProductDetail/Banners/Feature';
import { IBanner } from '@/api/catalog/models';

interface IBanners {
  title: string;
  banners?: IBanner[];
}

export function Banners({ title, banners }: IBanners) {
  return (
    <div id={'banners'} className={`${styles.wrapper} container`}>
      <h2 className={`section__title ${styles['title']}`}>Особенности модели {title}</h2>
      <div className={styles.features}>
        {banners?.map((banner, index) => (
          <Banner
            imageRight={index % 2 === 0}
            key={banner.id}
            title={banner.title}
            image={banner.image}
            description={banner.description}
          />
        ))}
      </div>
    </div>
  );
}
