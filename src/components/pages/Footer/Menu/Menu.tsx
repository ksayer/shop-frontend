import React from 'react';
import styles from './Menu.module.css';
import Link from "next/link";

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
          <Link href={'/solutions'} className={styles.link}>
            Уникальные решения
          </Link>
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
        <li className={'link'}>
          <Link href={'/about'} className={styles.link}>
            О компании
          </Link>
        </li>
      </ul>
    </nav>
  );
}
