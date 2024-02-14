import styles from './ColorSwitcher.module.css';
import { useState } from 'react';

export function ColorSwitcher() {
  const [color, setColor] = useState('Белый');
  return (
    <>
      <h4 className={styles.title}>Цвет корпуса</h4>
      <div className={styles.buttons}>
        <button
          className={`${styles.btn} ${color === 'Белый' && styles['border--active']}`}
          onClick={() => setColor('Белый')}
        >
          Белый
        </button>
        <button
          className={`${styles.btn} ${color === 'Черный' && styles['border--active']}`}
          onClick={() => setColor('Черный')}
        >
          Черный
        </button>
      </div>
    </>
  );
}
