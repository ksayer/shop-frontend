import React, { useRef } from 'react';
import styles from './Item.module.css';

interface IElement {
  id: string | number;
  title: string;
}

export interface IItem {
  id?: string | number;
  title: string;
  elements: IElement[];
  isOpened: boolean;
  setIsOpened: () => void;
  setIsClosed: () => void;
}

export function Item({ title, elements, isOpened, setIsOpened, setIsClosed }: IItem) {
  const wrapperRef = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={wrapperRef}
      className={styles.item}
      style={isOpened ? { height: wrapperRef.current?.scrollHeight } : { height: '45px' }}
    >
      <button onClick={isOpened ? setIsClosed : setIsOpened} className={`${styles['item__btn']}`}>
        {title}
      </button>
      <ul className={`${styles.elements} ${isOpened && styles['elements--opened']}`}>
        {elements.map(element => (
          <button key={element.id} className={`filter-item ${styles.element__item}`}>
            {element.title}
          </button>
        ))}
      </ul>
    </li>
  );
}
