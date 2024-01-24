'use client';
import React from 'react';
import styles from './ProducLlist.module.css';
import { Card, ICard } from '@/components/pages/Catalog/ProductList/Card';
import { usePathFiltersContext } from '@/features/hooks/usePathFiltersContext';
import { useModels } from '@/api/hooks/useModels';

interface IProductList {
  models: ICard[];
}

export function ProductList({ models }: IProductList) {
  return (
    <div className={styles.catalog}>
      {models?.map((product: ICard) => (
        <Card
          key={product.id}
          min_price={product.min_price}
          title={product.title}
          images={product.images}
          id={product.id}
        />
      ))}
    </div>
  );
}
