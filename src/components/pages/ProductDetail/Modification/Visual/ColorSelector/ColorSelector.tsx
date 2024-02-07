import React from 'react';
import styles from './ColorSelector.module.css';

export function ColorSelector() {
  return (
    <>
      <h4>Цвет корпуса</h4>
      <div>
        <button>Черный</button>
        <ul>
          <li>Черный</li>
          <li>Белый</li>
        </ul>
      </div>
    </>
  );
}
