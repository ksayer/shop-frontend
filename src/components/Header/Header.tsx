import React from 'react';
import styles from './Header.module.css';
import { Logo } from '@/components/Header/Logo';
import { Menu } from '@/components/Header/Menu';
import { Control } from '@/components/Header/Control';

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
