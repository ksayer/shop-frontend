import React, {useRef, useState} from 'react';
import styles from './ColorSelector.module.css';
import {set} from "immutable";
import {useClickOutside} from "@/features/hooks/useClickOutside";

export function ColorSelector() {
  const [isOpened, setIsOpened] = useState(false);
  const [color, setColor] = useState('Черный');
  const ref = useRef(null);
  const handleClick = (color: string) => {
    setColor(color);
    setIsOpened(false);
  }
  useClickOutside({isOpened: isOpened, ref: ref, setIsOpened: setIsOpened});
  return (
    <>
      <h4 className={styles.title}>Цвет корпуса:</h4>
      <div ref={ref} className={styles.selector}>
        <button onClick={() => setIsOpened(!isOpened)} className={styles.btn}>{color}</button>
        <ul className={`${styles.list} ${isOpened && styles['list--active']}`}>
          <li className={`${styles.item} ${color === 'Черный' && styles['item--selected']}`} onClick={() => handleClick('Черный')}>Черный</li>
          <li className={`${styles.item} ${color === 'Белый' && styles['item--selected']}`} onClick={() => handleClick('Белый')}>Белый</li>
        </ul>
      </div>
    </>
  );
}
