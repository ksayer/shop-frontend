import React from 'react';
import styles from './Preview.module.css';
import { Section } from '../Section';

interface IPreview {
  title: string;
  description: string;
}

export function Preview({ title, description }: IPreview) {
  return (
    <Section>
      <article className={styles.article}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={`base-text`} dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
      </article>
    </Section>
  );
}
