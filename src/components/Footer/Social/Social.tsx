import React from 'react';
import { YouTube } from '@/components/icons/YouTube';
import { Pinterest } from '@/components/icons/Pinterest';
import { Zen } from '@/components/icons/Zen';
import { VK } from '@/components/icons/VK';
import { Telegram } from '@/components/icons/Telegram';
import styles from './Social.module.css';

export function Social() {
  return (
    <ul className={styles.list}>
      <li>
        <a href="" className={styles.link}>
          <YouTube className={styles.icon} />
        </a>
      </li>
      <li>
        <a href="" className={styles.link}>
          <Pinterest className={styles.icon} />
        </a>
      </li>
      <li>
        <a href="" className={styles.link}>
          <Zen className={styles.icon} />
        </a>
      </li>
      <li>
        <a href="" className={styles.link}>
          <VK className={styles.icon} />
        </a>
      </li>
      <li>
        <a href="" className={styles.link}>
          <Telegram className={styles.icon} />
        </a>
      </li>
    </ul>
  );
}
