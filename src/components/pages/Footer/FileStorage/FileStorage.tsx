import React from 'react';
import styles from './FileStorage.module.css';

export function FileStorage() {
  return (
    <ul className={styles.list}>
      <li className={'link'}>
        <a href="" className={styles.link}>
          Договор оферты
        </a>
      </li>
      <li className={'link'}>
        <a href="" className={styles.link}>
          Регламент
        </a>
      </li>
      <li className={'link'}>
        <a href="" className={styles.link}>
          Согласие на обработку персональных&nbsp;данных
        </a>
      </li>
    </ul>
  );
}
