import React from 'react';
import styles from './Properties.module.css';
import featureStyles from '@/components/pages/ProductDetail/ModificationList/Modification/Features/Features.module.css';
import { Accordion } from '@/components/Accordion';

function List() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <span>Мощность</span>
        <span>7.8 Вт</span>
      </li>
      <li className={styles.item}>
        <span>Световой поток</span>
        <span>7.8 Вт</span>
      </li>
      <li className={styles.item}>
        <span>Индекс цветопередачи</span>
        <span>7.8 Вт</span>
      </li>
      <li className={styles.item}>
        <span>Цветовая температура</span>
        <span>7.8 Вт</span>
      </li>
      <li className={styles.item}>
        <span>Управление яркостью</span>
        <span>RLC(TRIAC)</span>
      </li>
      <li className={styles.item}>
        <span>Угол рассеивания</span>
        <span>7.8 Вт</span>
      </li>
      <li className={styles.item}>
        <span>Влагозащита</span>
        <span>7.8 Вт</span>
      </li>
    </ul>
  );
}

function Header() {
  return <h4 className={`${featureStyles.title}`}>Характеристики:</h4>;
}

export function Properties() {
  return (
    <div className={`${featureStyles.wrapper}`}>
      <div className={styles.accordion}>
        <Accordion Header={<Header />}>
          <List />
        </Accordion>
      </div>
      <div className={`${styles['simple-list']}`}>
        <Header />
        <List />
      </div>
    </div>
  );
}
