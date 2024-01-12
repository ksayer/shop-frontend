import React from 'react';
import styles from './ControlBoard.module.css';
import { Navigator } from '@/components/pages/Catalog/ControlBoard/Navigator';
import { Filters } from '@/components/pages/Catalog/ControlBoard/Filters';

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

export function ControlBoard() {
  return (
    <>
      <Navigator zIndex={2} items={categories} title={'Категории'} />
      <Navigator zIndex={1} items={groups} title={'Группы'} />
      <Filters />
    </>
  );
}
