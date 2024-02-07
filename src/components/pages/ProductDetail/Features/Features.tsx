import React from 'react';
import styles from './Features.module.css';
import { Feature, IFeature } from '@/components/pages/ProductDetail/Features/Feature';

interface IFeatures {
  features?: IFeature[];
}

export function Features({ features }: IFeatures) {
  return (
    <div className={styles.wrapper}>
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
  );
}
