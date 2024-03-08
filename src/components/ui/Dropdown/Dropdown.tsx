import React, { useRef, useState } from 'react';
import styles from './Dropdown.module.css';
import { useClickOutside } from '@/hooks/useClickOutside';

export interface IDropdownData {
  id: number;
  title: string;
  value: string;
}

interface IDropdown {
  title: string;
  onChange: (s: string) => void;
  data: IDropdownData[];
  activeElement: IDropdownData;
}

export function Dropdown({ onChange, data, title, activeElement }: IDropdown) {
  const [isOpened, setIsOpened] = useState(false);
  const ref = useRef(null);
  const handleClick = (color: string) => {
    onChange(color);
    setIsOpened(false);
  };

  useClickOutside({ isOpened: isOpened, ref: ref, setIsOpened: setIsOpened });
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{title}</h4>
      <div ref={ref} className={styles.selector}>
        <button
          onClick={() => setIsOpened(!isOpened)}
          className={`${styles.btn} ${isOpened && styles['btn--opened']}`}
        >
          {activeElement.title}
        </button>
        <ul className={`${styles.list} ${isOpened && styles['list--active']}`}>
          {data.map(d => (
            <li key={d.id} className={`${styles.item}`} onClick={() => handleClick(d.value)}>
              {d.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
