import React from 'react';
import styles from './Burger.module.css';

export function Burger() {
  return (
    <button className={styles.btn}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
}
