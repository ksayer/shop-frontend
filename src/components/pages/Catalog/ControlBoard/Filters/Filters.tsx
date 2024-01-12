'use client';
import React, { useRef, useState } from 'react';
import styles from './Filters.module.css';
import commonStyles from '@/components/pages/Catalog/ControlBoard/ControlBoard.module.css';
import { Filter } from '@/components/icons/Filter';
import { OptionList } from '@/components/pages/Catalog/ControlBoard/Filters/OptionList';

const menu = [
  {
    id: 1,
    title: 'Мощность',
    values: [
      { id: 1, title: 'Более 23 Вт' },
      { id: 2, title: 'Менее 10 Вт' },
      { id: 3, title: '10-22 Вт' },
    ],
  },
  {
    id: 2,
    title: 'Мощность',
    values: [
      { id: 1, title: 'Более 23 Вт' },
      { id: 2, title: 'Менее 10 Вт' },
      { id: 3, title: '10-22 Вт' },
    ],
  },
  {
    id: 3,
    title: 'Мощность',
    values: [
      { id: 1, title: 'Более 23 Вт' },
      { id: 2, title: 'Менее 10 Вт' },
      { id: 3, title: '10-22 Вт' },
    ],
  },
  {
    id: 4,
    title: 'Мощность',
    values: [
      { id: 1, title: 'Более 23 Вт' },
      { id: 2, title: 'Менее 10 Вт' },
      { id: 3, title: '10-22 Вт' },
    ],
  },
  {
    id: 5,
    title: 'Мощность',
    values: [
      { id: 1, title: 'Более 23 Вт' },
      { id: 2, title: 'Менее 10 Вт' },
      { id: 3, title: '10-22 Вт' },
    ],
  },
  {
    id: 6,
    title: 'Мощность',
    values: [
      { id: 1, title: 'Более 23 Вт' },
      { id: 2, title: 'Менее 10 Вт' },
      { id: 3, title: '10-22 Вт' },
    ],
  },
];

export function Filters() {
  const [isOpened, setIsOpened] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={wrapperRef}
      className={`${styles.wrapper} ${isOpened && styles['wrapper--opened']}`}
      style={isOpened ? { height: wrapperRef.current?.scrollHeight } : { height: '45px' }}
    >
      <div onClick={() => setIsOpened(!isOpened)} className={`${styles.control}`}>
        <span className={`${styles.title}`}>Фильтры</span>
        <span className={`${commonStyles.control__icon} ${styles.icon}`}>
          <Filter />
        </span>
      </div>
      <div className={styles['list-wrapper']}>
        <OptionList items={menu} />
      </div>
    </div>
  );
}
