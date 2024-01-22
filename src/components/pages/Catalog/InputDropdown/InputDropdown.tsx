import React, { ChangeEvent, useRef, useState } from 'react';
import styles from './InputDropdown.module.css';
import { useClickOutside } from '@/hooks/useClickOutside';

export interface ItemType {
  id?: number | string;
  title: string;
  slug: string;
  groupSlugArray?: string[];
}

interface InputDropdown {
  title: string;
  zIndex: number;
  items: ItemType[];
  selectedItem?: ItemType;
  setSlug: (slug: string) => void;
  clearSlug: (slug?: string) => void;
  slug: string;
  disableItem?: (item: ItemType) => boolean;
}

export function InputDropdown({
  zIndex,
  title,
  items,
  selectedItem,
  setSlug,
  clearSlug,
  slug,
  disableItem = () => false,
}: InputDropdown) {
  const [isOpened, setIsOpened] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const resetSelect = () => {
    clearSlug('');
    setIsOpened(!isOpened);
    setTimeout(() => setInputValue(''), 200);
  };

  useClickOutside({ setIsOpened: resetSelect, ref: wrapperRef, isOpened: isOpened });
  return (
    <div ref={wrapperRef} style={{ zIndex: zIndex }} className={`${styles.wrapper}`}>
      <div className={`${styles.selector} ${isOpened && styles['selector--opened']}`}>
        <input
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsOpened(true)}
          className={`${styles.input} ${!isOpened && styles['input--hidden']}`}
          type="text"
          name={title}
        />
        <span
          className={`${styles.placeholder} ${
            (isOpened || !!slug) && styles['placeholder--moved']
          }`}
        >
          {title}
        </span>
        <span className={`${styles.title} ${!!slug && !isOpened && styles['title--selected']}`}>
          {selectedItem?.title}
        </span>
        <button
          tabIndex={-1}
          onClick={() => {
            resetSelect();
            !isOpened && inputRef.current?.focus();
          }}
          className={`icon ${isOpened && 'icon--rotate'}`}
        ></button>
      </div>

      <div className={`${styles.menu} ${isOpened && styles['menu--opened']}`}>
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;
          return (
            (item.title.toLowerCase().includes(inputValue.toLowerCase()) || !inputValue) && (
              <button
                key={item.id}
                className={`${styles.item} filter-item ${
                  disableItem(item) && styles['item--disabled']
                } `}
                onClick={() => {
                  setSlug(item.slug);
                  setIsOpened(false);
                  setTimeout(() => setInputValue(''), 200);
                }}
                onBlur={() => {
                  isLastItem ? setIsOpened(true) : null;
                }}
                disabled={disableItem(item)}
              >
                {item.title}
              </button>
            )
          );
        })}
      </div>
    </div>
  );
}
