import React, { useState } from 'react';
import styles from './Option.module.css';

interface IOptionValue {
  id: string | number;
  title: string;
}

export interface IOption {
  id: string | number;
  title: string;
  values: IOptionValue[];
}

export function Option({ id, title, values }: IOption) {
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
