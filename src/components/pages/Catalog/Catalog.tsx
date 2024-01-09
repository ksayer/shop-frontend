import React from 'react';
import styles from './Catalog.module.css';
import {ProductList} from "@/components/pages/Catalog/ProductList";
import {ControlBoard} from "@/components/pages/Catalog/ControlBoard";

export function Catalog() {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.wrapper}>
        <ControlBoard/>
        <ProductList/>
      </div>
    </div>
  );
}
