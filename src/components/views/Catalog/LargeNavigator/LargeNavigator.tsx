import React from 'react';
import styles from './LargeNavigator.module.css';
import { Item } from '@/components/views/Catalog/LargeNavigator/Item';
import { IGroup } from '@/api/catalog/catalog';

interface ILargeNavigator {
  items: IGroup[];
  setSlug: (slug: string) => void;
  setCategorySlug: (slug: string) => void;
  clearCategorySlug: () => void;
  groupSlug: string;
  categorySlug: string;
}

export function LargeNavigator({
  items,
  setSlug,
  groupSlug,
  categorySlug,
  clearCategorySlug,
  setCategorySlug,
}: ILargeNavigator) {
  return (
    <ul className={styles.wrapper}>
      {items.map(item => (
        <Item
          key={item.id}
          title={item.title}
          isOpened={item.slug === groupSlug}
          setSlug={setSlug}
          slug={item.slug}
          categorySlug={categorySlug}
          setCategorySlug={setCategorySlug}
          clearCategorySlug={clearCategorySlug}
          categories={item.categories}
        />
      ))}
    </ul>
  );
}
