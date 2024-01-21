import React from 'react';
import styles from './Catalog.module.css';
import { ProductList } from '@/components/pages/Catalog/ProductList';
import { Filters } from '@/components/pages/Catalog/Filters';
import { LargeNavigator } from '@/components/pages/Catalog/LargeNavigator';
import { InputDropdown } from '@/components/pages/Catalog/InputDropdown';

interface ICatalog {
  groups: any;
  categories: any;
}

export function Catalog({ groups, categories }: ICatalog) {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.wrapper}>
        <div className={`${styles['left-side--desktop']}`}>
          <button className={styles.btn}>Убрать все фильтры</button>
          {groups ? <LargeNavigator items={groups.results} /> : 'Loading...'}
        </div>
        <div className={`${styles['left-side']}`}>
          {groups ? (
            <InputDropdown zIndex={4} items={groups.results} title={'Группы'} />
          ) : (
            'Loading...'
          )}
        </div>
        <InputDropdown zIndex={3} items={categories} title={'Категории'} />
        <Filters />
        <ProductList />
      </div>
    </div>
  );
}
