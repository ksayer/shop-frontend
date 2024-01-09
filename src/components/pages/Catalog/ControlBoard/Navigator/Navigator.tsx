import React from 'react';
import styles from './Navigator.module.css';
import commonStyles from '@/components/pages/Catalog/ControlBoard/ControlBoard.module.css';

interface Navigator {
  title: string;
}

export function Navigator({title}: Navigator) {
  return (
    <div className={`${styles.wrapper} ${commonStyles.control__item}`}>
      <div className={`${commonStyles.control}`}>
        <span className={`${commonStyles.control__title}`}>
          {title}
        </span>
        <span className={`${commonStyles.control__icon } ${styles.icon}`}></span>
      </div>
      <div className={styles.menu}>

      </div>
    </div>
  );
}
