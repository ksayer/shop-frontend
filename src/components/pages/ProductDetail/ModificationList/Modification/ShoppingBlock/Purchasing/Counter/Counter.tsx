import React, { useState } from 'react';
import styles from './Counter.module.css';

export function Counter() {
  const [counter, setCount] = useState(1);
  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => setCount(counter - 1)}
        className={`${styles.btn} ${styles.minus}`}
        disabled={counter <= 1}
      >
        -
      </button>
      <span className={styles.number}>{counter}</span>
      <button onClick={() => setCount(counter + 1)} className={`${styles.btn} ${styles.plus}`}>
        +
      </button>
    </div>
  );
}
