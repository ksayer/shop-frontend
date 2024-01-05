import React from 'react';
import styles from './Header.module.css';
import { Logo } from '@/components/pages/Header/Logo';
import { Menu } from '@/components/pages/Header/Menu';
import { Control } from '@/components/pages/Header/Control';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container alt-container`}>
        <div className={styles.wrapper}>
          <Logo />
          <Menu />
          <Control />
        </div>
      </div>
    </header>
  );
}
