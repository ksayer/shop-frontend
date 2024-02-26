import React from 'react';
import styles from './Features.module.css';
import { Feature, IFeature } from '@/components/pages/ProductDetail/Features/Feature';

interface IFeatures {
  title: string;
  features?: IFeature[];
}

export function Features({ title, features }: IFeatures) {
  return (
    <div id={'features'} className={`${styles.wrapper} container`}>
      <h2 className={`section__title ${styles['title']}`}>Особенности модели {title}</h2>
      <div className={styles.features}>
        {features?.map((feature, index) => (
          <Feature
            imageRight={index % 2 === 0}
            key={feature.id}
            title={feature.title}
            image={feature.image}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}
