import React from 'react';
import styles from './Content.module.css';

export interface IContent {
  title: string;
  text: string;
  children?: React.ReactNode;
}

export function Content({ title, text, children }: IContent) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={`base-text ${styles.text}`} dangerouslySetInnerHTML={{ __html: text }}></p>
      {children}
    </div>
  );
}
