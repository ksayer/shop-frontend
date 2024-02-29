import React from 'react';
import styles from './ShoppingBlock.module.css';
import { Purchasing } from '@/components/pages/ProductDetail/ModificationList/Modification/ShoppingBlock/Purchasing';
import { IProduct } from '@/components/pages/ProductDetail/ModificationList/Modification';
import { PROPERTIES } from '@/components/pages/ProductDetail/ModificationList/Modification/Features/Properties';
import { IModel } from '@/api/catalog/models';

export function ShoppingBlock({ model }: { model: IModel }) {
  const price = model.modifications[0].products[0].price;
  const discounted_price = model.modifications[0].products[0].discounted_price;
  const min_price = Number(discounted_price) ? Math.min(Number(price), Number(discounted_price)) : Number(price);
  return (
    <div className={`volume ${styles.wrapper}`}>
      <div className={styles.left}>
        <h4 className={styles.title}>{model.modifications[0].title}</h4>
        <ul className={`base-text ${styles.list}`}>
          <li className={styles.item}>
            <span className={`${styles['item__name']}`}>Вид:</span>
            <span>{model.title}</span>
          </li>
          {model.modifications[0].products[0].property.power && (
            <li className={styles.item}>
              <span className={`${styles['item__name']}`}>{PROPERTIES.power.title}:</span>
              <span>{model.modifications[0].products[0].property.power.title}</span>
            </li>
          )}
          <li className={styles.item}>
            <span className={`${styles['item__name']}`}>{PROPERTIES.body_color.title}:</span>
            <span>{model.modifications[0].products[0].property.body_color.title}</span>
          </li>
          {model.modifications[0].products[0].property.color_temperature && (
            <li className={styles.item}>
              <span className={`${styles['item__name']}`}>
                {PROPERTIES.color_temperature.title}:
              </span>
              <span>{model.modifications[0].products[0].property.color_temperature.title}</span>
            </li>
          )}
          {model.modifications[0].products[0].property.beam_angle && (
            <li className={styles.item}>
              <span className={`${styles['item__name']}`}>{PROPERTIES.beam_angle.title}:</span>
              <span>{model.modifications[0].products[0].property.beam_angle.title}</span>
            </li>
          )}
        </ul>
      </div>
      <Purchasing price={min_price} />
    </div>
  );
}
