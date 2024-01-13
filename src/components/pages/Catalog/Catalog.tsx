import React from 'react';
import styles from './Catalog.module.css';
import { ProductList } from '@/components/pages/Catalog/ProductList';
import { Filters } from '@/components/pages/Catalog/Filters';
import { SmallNavigator } from '@/components/pages/Catalog/SmallNavigator';
import { LargeNavigator } from '@/components/pages/Catalog/LargeNavigator';

const categories = [
  { title: 'Трековые', id: 1 },
  { title: 'Интерьерные', id: 2 },
  { title: 'Линейные', id: 3 },
  { title: 'Экстерьерные', id: 4 },
  { title: 'Светодиондная лента', id: 5 },
  { title: 'Управление светом', id: 6 },
  { title: 'Дизайнерские', id: 7 },
  { title: 'Акустические', id: 8 },
  { title: 'Распродажа', id: 9 },
];

const largeCategories = [
  {
    title: 'Трековые',
    id: 1,
    elements: [
      { id: 1, title: 'Система Universe' },
      { id: 2, title: 'Евротрек' },
      { id: 3, title: 'Система Track One' },
      { id: 4, title: 'Система Muse' },
    ],
  },
  {
    title: 'Интерьерные',
    id: 2,
    elements: [
      { id: 1, title: 'Система Universe' },
      { id: 2, title: 'Евротрек' },
      { id: 3, title: 'Система Track One' },
      { id: 4, title: 'Система Muse' },
    ],
  },
  {
    title: 'Линейные',
    id: 3,
    elements: [
      { id: 1, title: 'Система Universe' },
      { id: 2, title: 'Евротрек' },
      { id: 3, title: 'Система Track One' },
      { id: 4, title: 'Система Muse' },
    ],
  },
  // { title: 'Экстерьерные', id: 4, elements: [{id: 1, title: 'Система Universe'}, {id: 2, title: 'Евротрек'}, {id: 3, title: 'Система Track One'}, {id: 4, title: 'Система Muse'}] },
  // { title: 'Светодиондная лента', id: 5, elements: [{id: 1, title: 'Система Universe'}, {id: 2, title: 'Евротрек'}, {id: 3, title: 'Система Track One'}, {id: 4, title: 'Система Muse'}] },
  // { title: 'Управление светом', id: 6, elements: [{id: 1, title: 'Система Universe'}, {id: 2, title: 'Евротрек'}, {id: 3, title: 'Система Track One'}, {id: 4, title: 'Система Muse'}] },
  // { title: 'Дизайнерские', id: 7, elements: [{id: 1, title: 'Система Universe'}, {id: 2, title: 'Евротрек'}, {id: 3, title: 'Система Track One'}, {id: 4, title: 'Система Muse'}] },
  // { title: 'Акустические', id: 8, elements: [{id: 1, title: 'Система Universe'}, {id: 2, title: 'Евротрек'}, {id: 3, title: 'Система Track One'}, {id: 4, title: 'Система Muse'}] },
  // { title: 'Распродажа', id: 9, elements: [{id: 1, title: 'Система Universe'}, {id: 2, title: 'Евротрек'}, {id: 3, title: 'Система Track One'}, {id: 4, title: 'Система Muse'}] },
];

const groups = [
  { title: 'Система Universe', id: 1 },
  { title: 'Встраиваемые', id: 2 },
  { title: 'Накладные', id: 3 },
  { title: 'Настенные', id: 4 },
  { title: 'Подвесные', id: 5 },
  { title: 'Евротрек', id: 6 },
  { title: 'Одноцветная', id: 7 },
  { title: 'Многоцветная', id: 8 },
  { title: 'Bluetooth', id: 9 },
  { title: 'Источники питания', id: 10 },
  { title: 'Контроллеры', id: 11 },
  { title: 'Распродажа', id: 12 },
  { title: 'Угловые', id: 13 },
  { title: 'Фасадные', id: 14 },
  { title: 'Ландшафтные', id: 15 },
  { title: 'Система Track one', id: 16 },
  { title: 'Система Muse', id: 17 },
  { title: 'Настольные', id: 18 },
  { title: 'Эксклюзивные', id: 19 },
  { title: 'Напольные', id: 20 },
];

export function Catalog() {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.wrapper}>
        <div className={`${styles['left-side--mobile']}`}>
          <button className={styles.btn}>Убрать все фильтры</button>
          <LargeNavigator items={largeCategories} />
        </div>
        <div className={`${styles['left-side']}`}>
          <SmallNavigator zIndex={2} items={categories} title={'Категории'} />
        </div>
        <SmallNavigator zIndex={1} items={groups} title={'Группы'} />
        <Filters />
        <ProductList />
      </div>
    </div>
  );
}
