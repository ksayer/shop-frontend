'use client';
import React, { useMemo } from 'react';
import styles from './Catalog.module.css';
import { ProductList } from '@/components/pages/Catalog/ProductList';
import { Filters } from '@/components/pages/Catalog/Filters';
import { LargeNavigator } from '@/components/pages/Catalog/LargeNavigator';
import { InputDropdown, ItemType } from '@/components/pages/Catalog/InputDropdown';
import { usePathFiltersContext } from '@/features/hooks/usePathFiltersContext';
import { ICategory, IGroup } from '@/api/catalog/catalog';

interface ICatalog {
  groups: IGroup[];
  categories: ICategory[];
}

const url = '/catalog/';
export const ALL_GROUPS = 'all-groups';

function sortByGroupSlug(groupSlug: string, data: ICategory[]) {
  const filteredArray = data.filter(obj => obj.groupSlugArray.includes(groupSlug));
  const remainingArray = data.filter(obj => !obj.groupSlugArray.includes(groupSlug));
  return filteredArray.concat(remainingArray);
}

export function Catalog({ groups, categories }: ICatalog) {
  const groupSlug = usePathFiltersContext(state => state?.groupSlug);
  const categorySlug = usePathFiltersContext(state => state?.categorySlug);
  const resetFilter = usePathFiltersContext(state => state.resetFilter);
  const updateGroupSlug = usePathFiltersContext(state => state?.updateGroupSlug);
  const updateCategorySlug = usePathFiltersContext(state => state?.updateCategorySlug);
  const sortedCategories = useMemo(
    () => sortByGroupSlug(groupSlug, categories),
    [groupSlug, categories],
  );
  const selectedCategory = useMemo(
    () => categories.find((item: ICategory) => item.slugArray?.includes(categorySlug)),
    [categories, categorySlug],
  );
  const selectedGroup = useMemo(
    () => groups.find((item: ItemType) => item.slug === groupSlug),
    [groups, groupSlug],
  );
  const setGroupSlug = (slug?: string) => {
    updateCategorySlug('');
    updateGroupSlug(slug || '');
    resetFilter();
    window.history.pushState(null, '', `${url}${slug}`);
  };
  const clearCategorySlug = () => {
    updateCategorySlug('');
    let fullUrl = url;
    if (groupSlug === ALL_GROUPS) {
      updateGroupSlug('');
    } else {
      fullUrl += groupSlug;
    }
    window.history.pushState(null, '', `${fullUrl}`);
  };

  const setCategorySlug = (slug: string) => {
    updateCategorySlug(slug);
    if (!groupSlug) updateGroupSlug(ALL_GROUPS);
    window.history.pushState(null, '', `${url}${groupSlug || ALL_GROUPS}/${slug}`);
  };

  const categoryDisabled = (item: ItemType): boolean => {
    return !!(groupSlug && groupSlug !== ALL_GROUPS && !item.groupSlugArray?.includes(groupSlug));
  };

  const resetAllFilters = () => {
    updateCategorySlug('');
    updateGroupSlug('');
    window.history.pushState(null, '', `${url}`);
    resetFilter();
  };

  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.wrapper}>
        <div className={`${styles['left-side--desktop']}`}>
          <button onClick={resetAllFilters} className={styles.btn}>
            Убрать все фильтры
          </button>
          {groups ? (
            <LargeNavigator
              setSlug={setGroupSlug}
              groupSlug={groupSlug}
              items={groups}
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
              slug={groupSlug !== ALL_GROUPS ? groupSlug : ''}
              clearSlug={setGroupSlug}
              setSlug={setGroupSlug}
              zIndex={4}
              items={groups}
              title={'Группы'}
              selectedItem={selectedGroup}
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
          items={sortedCategories}
          title={'Категории'}
          selectedItem={selectedCategory}
          disableItem={categoryDisabled}
        />
        <Filters groups={groups} />
        <ProductList />
      </div>
    </div>
  );
}
