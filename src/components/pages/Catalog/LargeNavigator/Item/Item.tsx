import React, { useRef } from 'react';
import styles from './Item.module.css';

interface IElement {
  id: string | number;
  title: string;
  slug: string;
}

export interface IItem {
  id?: string | number;
  slug: string;
  categorySlug: string;
  title: string;
  categories: IElement[];
  isOpened?: boolean;
  setSlug: (slug: string) => void;
  setCategorySlug: (slug: string) => void;
  clearCategorySlug: () => void;
}

export function Item({
  title,
  slug,
  categories,
  categorySlug,
  setCategorySlug,
  isOpened,
  setSlug,
  clearCategorySlug,
}: IItem) {
  const wrapperRef = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={wrapperRef}
      className={styles.item}
      style={isOpened ? { height: wrapperRef.current?.scrollHeight } : { height: '45px' }}
    >
      <button
        onClick={isOpened ? () => setSlug('') : () => setSlug(slug)}
        className={`${styles['item__btn']}`}
      >
        {title}
        <span className={`icon ${isOpened && 'icon--rotate'}`}></span>
      </button>
      <ul className={`${styles.elements} ${isOpened && styles['elements--opened']}`}>
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-item ${styles.element__item} ${
              category.slug === categorySlug ? styles['element__item--selected'] : ''
            }`}
            onClick={() =>
              categorySlug === category.slug ? clearCategorySlug() : setCategorySlug(category.slug)
            }
          >
            {category.title}
          </button>
        ))}
      </ul>
    </li>
  );
}
