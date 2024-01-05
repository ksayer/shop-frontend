import React from 'react';
import styles from './Menu.module.css';
import Link from 'next/link';

export function Menu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={'link'}>
          <a href="#" className={styles.link}>
            Каталог
          </a>
        </li>
        <li className={'link'}>
          <a href="#" className={styles.link}>
            Подборки
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
          <Link href={'/contacts'} className={styles.link}>
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}
