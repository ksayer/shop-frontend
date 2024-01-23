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
  const filters = usePathFiltersContext(state => state.filters);
  return (
    <li className={`${styles['option']}`} key={id}>
      <span className={`${styles['title']}`}>{title}</span>
      <ul className={`${styles['list']}`}>
        {properties.map((value, index) => {
          return (
            <button
              onClick={() => {
                updateFilter({ slug: slug, value: { id: value.id, title: value.title } });
              }}
              className={`${styles.value} ${
                filters[slug]?.id == value.id && styles['value--active']
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
