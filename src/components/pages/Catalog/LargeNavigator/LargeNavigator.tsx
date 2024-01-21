'use client';
import React from 'react';
import styles from './LargeNavigator.module.css';
import { IItem, Item } from '@/components/pages/Catalog/LargeNavigator/Item';
import { usePathFiltersContext } from '@/hooks/usePathFiltersContext';

interface ILargeNavigator {
  slug?: string;
  items: IItem[];
}

export function LargeNavigator({ items, slug }: ILargeNavigator) {
  const groupSlug = usePathFiltersContext(state => state?.groupSlug);
  const updateGroupSlug = usePathFiltersContext(state => state?.updateGroupSlug);

  return (
    <ul className={styles.wrapper}>
      {items.map((item, index) => (
        <Item
          key={item.id}
          title={item.title}
          isOpened={item.slug === groupSlug}
          setIsOpened={slug => {
            updateGroupSlug(item.slug);
            window.history.pushState(null, '', `/catalog/${slug}`);
          }}
          slug={item.slug}
          setIsClosed={() => {
            updateGroupSlug('');
            window.history.pushState(null, '', `/catalog`);
          }}
          categories={item.categories}
        />
      ))}
    </ul>
  );
}
