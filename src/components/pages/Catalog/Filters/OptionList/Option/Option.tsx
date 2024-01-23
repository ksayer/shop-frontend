import React, { useState } from 'react';
import styles from './Option.module.css';
import { usePathFiltersContext } from '@/features/hooks/usePathFiltersContext';

export interface IOptionValue {
  id: string | number;
  title: string;
  value: string | number;
}

export interface IOption {
  id: string | number;
  title: string;
  variable: string;
  values: IOptionValue[];
}

export function Option({ id, title, variable, values }: IOption) {
  const updateFilter = usePathFiltersContext(state => state.updateFilter);

  const [clicked, setClicked] = useState<number>();
  return (
    <li className={`${styles['option']}`} key={id}>
      <span className={`${styles['title']}`}>{title}</span>
      <ul className={`${styles['list']}`}>
        {values.map((value, index) => {
          return (
            <button
              onClick={() => {
                index === clicked ? setClicked(undefined) : setClicked(index);
                updateFilter({ variable: variable, value: { id: value.id, title: value.title } });
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
