import React from 'react';
import styles from './Menu.module.css';
import Link from 'next/link';

export function Menu() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={'link'}>
          <Link href={'/catalog'} className={styles.link}>
            Каталог
          </Link>
        </li>
        <li className={'link'}>
          <a href="#" className={styles.link}>
            Подборки
          </a>
        </li>
        <li className={'link'}>
          <Link href={'/solutions'} className={styles.link}>
            Уникальные решения
          </Link>
        </li>
        <li className={'link'}>
          <Link href={'/contracts'} className={styles.link}>
            Контрактные поставки
          </Link>
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
