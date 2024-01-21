import React, { useRef } from 'react';
import styles from './Item.module.css';

interface IElement {
  id: string | number;
  title: string;
}

export interface IItem {
  id?: string | number;
  slug: string;
  title: string;
  categories: IElement[];
  isOpened?: boolean;
  setIsOpened: (slug: string) => void;
  setIsClosed: () => void;
}

export function Item({ title, slug, categories, isOpened, setIsOpened, setIsClosed }: IItem) {
  const wrapperRef = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={wrapperRef}
      className={styles.item}
      style={isOpened ? { height: wrapperRef.current?.scrollHeight } : { height: '45px' }}
    >
      <button
        onClick={isOpened ? () => setIsClosed() : () => setIsOpened(slug)}
        className={`${styles['item__btn']}`}
      >
        {title}
        <span className={`icon ${isOpened && 'icon--rotate'}`}></span>
      </button>
      <ul className={`${styles.elements} ${isOpened && styles['elements--opened']}`}>
        {categories.map(category => (
          <button key={category.id} className={`filter-item ${styles.element__item}`}>
            {category.title}
          </button>
        ))}
      </ul>
    </li>
  );
}
