import React from 'react';
import styles from './OptionList.module.css';
import { IOption, Option } from '@/components/pages/Catalog/ControlBoard/Filters/OptionList/Option';

interface IMenu {
  items: IOption[];
}

export function OptionList({ items }: IMenu) {
  return (
    <ul className={styles.list}>
      {items.map(item => {
        return <Option key={item.id} {...item} />;
      })}
    </ul>
  );
}
