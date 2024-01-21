'use client';
import React from 'react';
import styles from './Catalog.module.css';
import { ProductList } from '@/components/pages/Catalog/ProductList';
import { Filters } from '@/components/pages/Catalog/Filters';
import { LargeNavigator } from '@/components/pages/Catalog/LargeNavigator';
import { InputDropdown } from '@/components/pages/Catalog/InputDropdown';
import { usePathFiltersContext } from '@/hooks/usePathFiltersContext';

interface ICatalog {
  groups: any;
  categories: any;
}

const url = '/catalog/';

export function Catalog({ groups, categories }: ICatalog) {
  const groupSlug = usePathFiltersContext(state => state?.groupSlug);
  const categorySlug = usePathFiltersContext(state => state?.categorySlug);
  const updateGroupSlug = usePathFiltersContext(state => state?.updateGroupSlug);
  const updateCategorySlug = usePathFiltersContext(state => state?.updateCategorySlug);

  const setGroupSlug = (slug?: string) => {
    updateCategorySlug('');
    updateGroupSlug(slug || '');
    window.history.pushState(null, '', `${url}${slug}`);
  };

  const clearCategorySlug = () => {
    updateCategorySlug('');
    let fullUrl = url;
    if (groupSlug === 'all-groups') {
      updateGroupSlug('');
    } else {
      fullUrl += groupSlug;
    }
    window.history.pushState(null, '', `${fullUrl}`);
  };

  const setCategorySlug = (slug: string) => {
    updateCategorySlug(slug);
    if (!groupSlug) updateGroupSlug('all-groups');
    window.history.pushState(null, '', `${url}${groupSlug || 'all-groups'}/${slug}`);
  };

  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.wrapper}>
        <div className={`${styles['left-side--desktop']}`}>
          <button className={styles.btn}>Убрать все фильтры</button>
          {groups ? (
            <LargeNavigator
              setSlug={setGroupSlug}
              groupSlug={groupSlug}
              items={groups.results}
              categorySlug={categorySlug}
              setCategorySlug={setCategorySlug}
              clearCategorySlug={clearCategorySlug}
            />
          ) : (
            'Loading...'
          )}
        </div>
        <div className={`${styles['left-side']}`}>
          {groups ? (
            <InputDropdown
              slug={groupSlug}
              clearSlug={setGroupSlug}
              setSlug={setGroupSlug}
              zIndex={4}
              items={groups.results}
              title={'Группы'}
            />
          ) : (
            'Loading...'
          )}
        </div>
        <InputDropdown
          slug={categorySlug}
          clearSlug={clearCategorySlug}
          setSlug={setCategorySlug}
          zIndex={3}
          items={categories}
          title={'Категории'}
        />
        <Filters />
        <ProductList />
      </div>
    </div>
  );
}
