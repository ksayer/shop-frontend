'use client';
import React, { useEffect, useState } from 'react';
import styles from './ProducLlist.module.css';
import { Card, ICard } from '@/components/pages/Catalog/ProductList/Card';
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { usePathFiltersContext } from '@/hooks/usePathFiltersContext';

async function getContent(groupSlug?: string, categorySlug?: string) {
  const filters = [];
  if (groupSlug) filters.push(`group=${groupSlug}`);
  if (categorySlug) filters.push(`category=${categorySlug}`);
  const res = await fetch(`http://127.0.0.1:8000/api/catalog/models/?${filters.join('&')}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export function ProductList() {
  const groupSlug = usePathFiltersContext(state => state.groupSlug);
  const categorySlug = usePathFiltersContext(state => state.categorySlug);
  const { data, isSuccess } = useQuery({
    queryKey: ['models', groupSlug, categorySlug],
    queryFn: () => getContent(groupSlug, categorySlug),
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
