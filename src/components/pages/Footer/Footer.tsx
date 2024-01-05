import React from 'react';
import styles from './Footer.module.css';
import { Menu } from '@/components/pages/Footer/Menu';
import { Social } from '@/components/pages/Footer/Social';
import { FileStorage } from '@/components/pages/Footer/FileStorage';
import { LogoShort } from '@/components/icons/LogoShort';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <LogoShort className={styles.logo} />
      <div className={`container alt-container`}>
        <div className={`${styles.wrapper} flex-gap`}>
          <div className={styles.top}>
            <Menu />
          </div>
          <div className={`${styles.bottom} flex-gap`}>
            <Social />
            <FileStorage />
            <div className={styles.copyright}>
              <span>2012 - 2024 Ledmonster Ltd. Все&nbsp;права&nbsp;защищены</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
