import React from 'react';
import styles from './Logo.module.css';
import { Logo as LogoIcon } from '@/components/icons/Logo';

export function Logo() {
  return (
    <a href="#" className={styles.link}>
      <LogoIcon className={styles.svg} />
    </a>
  );
}
