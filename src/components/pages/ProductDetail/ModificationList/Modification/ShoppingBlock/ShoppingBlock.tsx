import React from 'react';
import styles from './ShoppingBlock.module.css';
import { Purchasing } from '@/components/pages/ProductDetail/ModificationList/Modification/ShoppingBlock/Purchasing';

export function ShoppingBlock() {
  return (
    <div>
      <div>
        <h4>FOG TABLE S</h4>
        <ul>
          <li>
            <span>Вид</span>
            <span>FOG TABLE</span>
          </li>
          <li>
            <span>Мощность</span>
            <span>7.8 Вт</span>
          </li>
          <li>
            <span>Цвет корпуса:</span>
            <span>Белый</span>
          </li>
          <li>
            <span>Цветовая температура:</span>
            <span>3000K</span>
          </li>
          <li>
            <span>Угол рассеивания:</span>
            <span>360°</span>
          </li>
        </ul>
      </div>
      <Purchasing />
    </div>
  );
}
