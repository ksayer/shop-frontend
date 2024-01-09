import React from 'react';
import styles from './Filters.module.css';
import commonStyles from "@/components/pages/Catalog/ControlBoard/ControlBoard.module.css";
import {Filter} from "@/components/icons/Filter";

export function Filters() {
  return (
    <div className={`${styles.wrapper} ${commonStyles.control__item}`}>
      <div className={`${commonStyles.control}`}>
        <span className={`${commonStyles.control__title}`}>
          Фильтры
        </span>
        <span className={commonStyles.control__icon}><Filter/></span>
      </div>
      <div className={styles.menu}>

      </div>
    </div>
  );
}
