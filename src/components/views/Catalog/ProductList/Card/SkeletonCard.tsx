import React from 'react';
import styles from './Card.module.css';

export function SkeletonCard() {
  return (
    <div className={styles.card}>
      <div className={`${styles['image-wrapper']}`}>
        <div className={`skeleton-box ${styles['image__skeleton']}`}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h4 className={`skeleton-box ${styles.skeleton__title}`}></h4>
          <span className={`skeleton-box ${styles.skeleton__price}`}></span>
        </div>
        <ul className={styles.options}>
          <li className={`skeleton-box ${styles.skeleton__option}`}></li>
        </ul>
      </div>
    </div>
  );
}
