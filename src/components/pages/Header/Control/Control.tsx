import React from 'react';
import styles from './Control.module.css';
import { Search } from '@/components/pages/Header/Control/Search';
import { Phone } from '@/components/pages/Header/Control/Phone';
import { Cart } from '@/components/pages/Header/Control/Cart';
import { Burger } from '@/components/pages/Header/Control/Burger';

export function Control() {
  return (
    <div className={styles.buttons}>
      <Phone svgClass={styles.svg} />
      <Search svgClass={styles.svg} btnClass={styles.btn} />
      <Cart svgClass={styles.svg} btnClass={styles.btn} />
      <Burger />
    </div>
  );
}
