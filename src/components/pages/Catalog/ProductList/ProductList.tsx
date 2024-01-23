'use client';
import React from 'react';
import styles from './ProducLlist.module.css';
import { Card, ICard } from '@/components/pages/Catalog/ProductList/Card';
import { usePathFiltersContext } from '@/features/hooks/usePathFiltersContext';
import { useModels } from '@/api/hooks/useModels';

export function ProductList() {
  const groupSlug = usePathFiltersContext(state => state.groupSlug);
  const categorySlug = usePathFiltersContext(state => state.categorySlug);
  const filters = usePathFiltersContext(state => state.filters);
  console.log(Object.values(filters).map(f => f.id));
  const { data, isSuccess } = useModels({
    groupSlug,
    categorySlug,
    filterIds: Object.values(filters).map(f => f.id),
  });

  return (
    isSuccess && (
      <div className={styles.catalog}>
        {data?.results.map((product: ICard) => (
          <Card
            key={product.id}
            min_price={product.min_price}
            title={product.title}
            images={product.images}
            id={product.id}
          />
        ))}
      </div>
    )
  );
}
