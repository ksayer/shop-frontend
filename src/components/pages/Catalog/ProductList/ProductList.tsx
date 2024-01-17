'use client';
import React from 'react';
import styles from './ProducLlist.module.css';
import { Card, ICard } from '@/components/pages/Catalog/ProductList/Card';
import { useQuery } from '@tanstack/react-query';

async function getContent() {
  const res = await fetch('http://127.0.0.1:8000/api/catalog/models/');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export function ProductList() {
  const { data, error, isLoading, isSuccess } = useQuery({
    queryKey: ['models'],
    queryFn: getContent,
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
