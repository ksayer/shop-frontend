import React from 'react';
import styles from './Section.module.css';

export function Section({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className={`container ${styles.wrapper}`}>{children}</div>
    </section>
  );
}
