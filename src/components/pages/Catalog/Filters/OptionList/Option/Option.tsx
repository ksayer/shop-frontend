import React from 'react';
import styles from './Option.module.css';
import { usePathFiltersContext } from '@/hooks/usePathFiltersContext';
import { FilterType } from '@/api/catalog/models';

export interface IOptionValue {
  ids: number[];
  group_title: string;
}

export interface IOption {
  title: string;
  filterName: FilterType;
  properties: IOptionValue[];
}

export function Option({ properties, title, filterName }: IOption) {
  const updateFilter = usePathFiltersContext(state => state.updateFilter);
  const filters = usePathFiltersContext(state => state.filters);
  return (
    <li className={`${styles['option']}`} key={title}>
      <span className={`${styles['title']}`}>{title}</span>
      <ul className={`${styles['list']}`}>
        {properties?.map(value => {
          return (
            <button
              onClick={() => {
                updateFilter({ filter: filterName, name: value.group_title, ids: value['ids'] });
              }}
              className={`${styles.value} ${
                filters[filterName]?.name == value.group_title && styles['value--active']
              } filter-item`}
              key={value.group_title}
            >
              {value.group_title}
            </button>
          );
        })}
      </ul>
    </li>
  );
}
