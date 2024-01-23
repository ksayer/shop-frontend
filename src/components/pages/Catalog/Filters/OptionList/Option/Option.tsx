import React, { useState } from 'react';
import styles from './Option.module.css';
import { usePathFiltersContext } from '@/features/hooks/usePathFiltersContext';

export interface IOptionValue {
  id: string | number;
  title: string;
}

export interface IOption {
  id: string | number;
  title: string;
  slug: string;
  properties: IOptionValue[];
}

export function Option({ id, title, slug, properties }: IOption) {
  const updateFilter = usePathFiltersContext(state => state.updateFilter);

  const [clicked, setClicked] = useState<number>();
  return (
    <li className={`${styles['option']}`} key={id}>
      <span className={`${styles['title']}`}>{title}</span>
      <ul className={`${styles['list']}`}>
        {properties.map((value, index) => {
          return (
            <button
              onClick={() => {
                index === clicked ? setClicked(undefined) : setClicked(index);
                updateFilter({ slug: slug, value: { id: value.id, title: value.title } });
              }}
              className={`${styles.value} ${
                index === clicked && styles['value--active']
              } filter-item`}
              key={value.id}
            >
              {value.title}
            </button>
          );
        })}
      </ul>
    </li>
  );
}
