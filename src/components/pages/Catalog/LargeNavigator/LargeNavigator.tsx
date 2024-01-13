'use client';
import React, { useState } from 'react';
import styles from './LargeNavigator.module.css';
import { IItem, Item } from '@/components/pages/Catalog/LargeNavigator/Item';

interface ILargeNavigator {
  items: IItem[];
}

export function LargeNavigator({ items }: ILargeNavigator) {
  const [openedItem, setOpenedItem] = useState<number | null>(null);
  return (
    <ul className={styles.wrapper}>
      {items.map((item, index) => (
        <Item
          key={item.id}
          title={item.title}
          isOpened={index === openedItem}
          setIsOpened={() => setOpenedItem(index)}
          setIsClosed={() => setOpenedItem(null)}
          elements={item.elements}
        />
      ))}
    </ul>
  );
}
