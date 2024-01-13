'use client';
import React, { ChangeEvent, useRef, useState } from 'react';
import styles from './InputDropdown.module.css';
import { useClickOutside } from '@/hooks/useClickOutside';

type ItemType = {
  title: string;
  id: number | string;
};

interface InputDropdown {
  title: string;
  zIndex: number;
  items: ItemType[];
}

export function InputDropdown({ zIndex, title, items }: InputDropdown) {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const resetSelect = () => {
    setSelectedItem('');
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
            (isOpened || !!selectedItem) && styles['placeholder--moved']
          }`}
        >
          {title}
        </span>
        <span
          className={`${styles.title} ${selectedItem && !isOpened && styles['title--selected']}`}
        >
          {selectedItem}
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
                className={`${styles.item} filter-item  `}
                onClick={() => {
                  setSelectedItem(item.title);
                  setIsOpened(false);
                  setTimeout(() => setInputValue(''), 200);
                }}
                onBlur={() => {
                  isLastItem ? setIsOpened(true) : null;
                }}
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
