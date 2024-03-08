import React from 'react';
import styles from './Logo.module.css';
import { Logo as LogoIcon } from '@/components/icons/Logo';
import Link from 'next/link';

export function Logo() {
  return (
    <Link className={styles.link} href="/">
      <LogoIcon className={styles.svg} />
    </Link>
  );
}
