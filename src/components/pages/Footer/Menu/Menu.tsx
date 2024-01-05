import React from 'react';
import styles from './Menu.module.css';

export function Menu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={'link'}>
          <a href="#" className={styles.link}>
            Публикации
          </a>
        </li>
        <li className={'link'}>
          <a href="#" className={styles.link}>
            Уникальные решения
          </a>
        </li>
        <li className={'link'}>
          <a href="#" className={styles.link}>
            Контрактные поставки
          </a>
        </li>
        <li className={'link'}>
          <a href="#" className={styles.link}>
            Вдохновение
          </a>
        </li>
        <li className={'link'}>
          <a href="#" className={styles.link}>
            Контакты
          </a>
        </li>
        <li className={'link'}>
          <a href="#" className={styles.link}>
            О компании
          </a>
        </li>
      </ul>
    </nav>
  );
}
