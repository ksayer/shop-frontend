'use client';
import React, { useRef, useState } from 'react';
import styles from './Filters.module.css';
import { Filter } from '@/components/icons/Filter';
import { OptionList } from '@/components/pages/Catalog/Filters/OptionList';
import { useClickOutside } from '@/hooks/useClickOutside';
import { usePathFiltersContext } from '@/hooks/usePathFiltersContext';

const menu = [
  {
    id: 1,
    title: 'Мощность',
    variable: 'power',
    values: [
      { id: 1, title: 'Более 23 Вт', value: 1 },
      { id: 2, title: 'Менее 10 Вт', value: 2 },
      { id: 3, title: '10-22 Вт', value: 3 },
    ],
  },
  {
    id: 2,
    title: 'Температура, K',
    variable: 'temperature',
    values: [
      { id: 1, title: '3000K', value: 1 },
      { id: 2, title: '1800-3000K', value: 2 },
    ],
  },
  {
    id: 3,
    title: 'Угол рассеивания',
    variable: 'dimension',
    values: [
      { id: 1, title: 'Средний', value: 1 },
      { id: 2, title: 'Широкий', value: 2 },
      { id: 3, title: 'Узкий', value: 3 },
      { id: 4, title: 'Регулируемый', value: 4 },
    ],
  },
  {
    id: 4,
    title: 'Световой поток',
    variable: 'beam',
    values: [
      { id: 1, title: 'Средний', value: 1 },
      { id: 2, title: 'Основной', value: 2 },
      { id: 3, title: 'Очень яркий', value: 3 },
    ],
  },
  {
    id: 5,
    title: 'Диммирование',
    variable: 'dimming',
    values: [
      { id: 1, title: 'RLC(TRIAC)', value: 1 },
      { id: 2, title: 'Нет', value: 2 },
      { id: 3, title: '1-10', value: 3 },
    ],
  },
  {
    id: 6,
    title: 'Влагозащита',
    variable: 'protection',
    values: [
      { id: 1, title: 'IP20', value: 1 },
      { id: 2, title: 'IP44', value: 2 },
    ],
  },
];

export function Filters() {
  const { filters, updateFilter } = usePathFiltersContext(state => state);
  const [isOpened, setIsOpened] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const activeSelectorsRef = useRef<HTMLDivElement>(null);
  const height = (listRef.current?.scrollHeight || 0) + 45;
  useClickOutside({ isOpened: isOpened, ref: wrapperRef, setIsOpened: setIsOpened });

  return (
    <div ref={wrapperRef} className={styles.container}>
      <div
        className={`${styles.wrapper} ${isOpened && styles['wrapper--opened']}`}
        style={isOpened ? { height: `${height}px` } : { height: '45px' }}
      >
        <div
          onClick={(e: React.MouseEvent) => {
            !activeSelectorsRef.current?.contains(e.target as HTMLButtonElement) &&
              setIsOpened(!isOpened);
          }}
          className={`${styles.control}`}
        >
          <span className={`${styles.title}`}>Фильтры</span>
          <div ref={activeSelectorsRef} className={`${styles['active-selectors']}`}>
            {Object.keys(filters).map(key => (
              <button
                key={key}
                className={`filter-item ${styles['active-selectors__btn']}`}
                onClick={() =>
                  setTimeout(() => updateFilter({ variable: key, value: { ...filters[key] } }), 1)
                }
              >
                {filters[key].title}
              </button>
            ))}
          </div>
          <span className={`${styles.icon}`}>
            <Filter />
          </span>
        </div>
        <div ref={listRef} className={styles['list-wrapper']}>
          <OptionList items={menu} />
        </div>
      </div>
    </div>
  );
}
