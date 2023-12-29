import React from 'react';
import styles from './Phone.module.css';
import { Phone as PhoneIcon } from '@/components/icons/Phone';

interface IPhone {
  svgClass?: string;
}

export function Phone({ svgClass }: IPhone) {
  return (
    <a href={'tel: 99999'} className={styles.link}>
      <PhoneIcon className={`${svgClass} ${styles.svg}`} />
      <span>8 495 985 8800</span>
    </a>
  );
}
