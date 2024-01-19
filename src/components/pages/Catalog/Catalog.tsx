import React from 'react';
import styles from './Catalog.module.css';
import { ProductList } from '@/components/pages/Catalog/ProductList';
import { Filters } from '@/components/pages/Catalog/Filters';
import { LargeNavigator } from '@/components/pages/Catalog/LargeNavigator';
import { InputDropdown, ItemType } from '@/components/pages/Catalog/InputDropdown';
import { getCategories, getGroups } from '@/api/catalog';

export async function Catalog() {
  const data = await getGroups();
  const categories = await getCategories();

  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.wrapper}>
        <div className={`${styles['left-side--desktop']}`}>
          <button className={styles.btn}>Убрать все фильтры</button>
          {data ? <LargeNavigator items={data.results} /> : 'Loading...'}
        </div>
        <div className={`${styles['left-side']}`}>
          {data ? <InputDropdown zIndex={4} items={data.results} title={'Группы'} /> : 'Loading...'}
        </div>
        <InputDropdown zIndex={3} items={categories} title={'Категории'} />
        <Filters />
        <ProductList />
      </div>
    </div>
  );
}
