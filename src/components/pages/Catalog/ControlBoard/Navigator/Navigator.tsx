'use client';
import React, { ChangeEvent, useRef, useState } from 'react';
import styles from './Navigator.module.css';
import commonStyles from '@/components/pages/Catalog/ControlBoard/ControlBoard.module.css';
import { Dropdown } from '@/components/Dropdown';

type ItemType = {
  title: string;
  id: number | string;
};

interface Navigator {
  title: string;
  zIndex: number;
  items: ItemType[];
}

export function Navigator({ zIndex, title, items }: Navigator) {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  let flag = false;
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const resetSelect = () => {
    setSelectedItem('');
    setIsOpened(!isOpened);
    setTimeout(() => setInputValue(''), 200);
  };

  const closeDropdown = () => {
    console.log('closeDropdown');
    setIsOpened(false);
  };

  const openDropdown = () => {
    console.log('openDropdown');
    setIsOpened(true);
  };

  return (
    <div style={{ zIndex: zIndex }} className={`${styles.wrapper} ${commonStyles.control__item}`}>
      <Dropdown
        isOpened={isOpened}
        handleClick={resetSelect}
        menu={
          <div className={styles.menu}>
            {items.map((item, index) => {
              const isLastItem = index === items.length - 1;
              return (
                (item.title.toLowerCase().includes(inputValue.toLowerCase()) || !inputValue) && (
                  <button
                    key={item.id}
                    className={`${styles.item}`}
                    onClick={() => {
                      setSelectedItem(item.title);
                      closeDropdown();
                      setTimeout(() => setInputValue(''), 200);
                    }}
                    onBlur={() => {
                      isLastItem ? closeDropdown() : null;
                    }}
                  >
                    {item.title}
                  </button>
                )
              );
            })}
          </div>
        }
      >
        <div className={`${styles.selector} ${isOpened && styles['selector--opened']}`}>
          <input
            ref={inputRef}
            value={inputValue}
            onChange={handleInputChange}
            onFocus={openDropdown}
            className={`${styles.input} ${!isOpened && styles['input--hidden']}`}
            type="text"
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
            className={`${commonStyles.control__icon} ${styles.icon}`}
          ></button>
        </div>
      </Dropdown>
    </div>
  );
}
