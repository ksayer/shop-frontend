import React from 'react';
import styles from './Skeleton.module.css';
import './Skeleton.module.css';
export function Skeleton() {
  return (
    <div className={`container ${styles.skeleton}`}>
      <div className={styles.breadcrumbs}>
        <span className={`skeleton-box`}></span>
        <span className={`skeleton-box`}></span>
        <span className={`skeleton-box`}></span>
      </div>
      <div className={styles.body}>
        <div className={styles.image}>
          <span className={`skeleton-box`}></span>
        </div>
        <div className={styles.content}>
          <span className={`skeleton-box ${styles.title}`}></span>
          <span className={`skeleton-box ${styles.text}`}></span>
        </div>
      </div>
    </div>
  );
}
