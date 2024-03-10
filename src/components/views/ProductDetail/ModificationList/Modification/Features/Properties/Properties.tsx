import React from 'react';
import styles from './Properties.module.css';
import featureStyles from '@/components/views/ProductDetail/ModificationList/Modification/Features/Features.module.css';
import {
  IProduct,
  IProperty,
} from '@/components/views/ProductDetail/ModificationList/Modification';
import { Accordion } from '@/components/ui/Accordion';

export const PROPERTIES: { [key: string]: { title: string } } = {
  power: {
    title: 'Мощность',
  },
  beam: {
    title: 'Световой поток',
  },
  color_index: {
    title: 'Индекс цветопередачи',
  },
  color_temperature: {
    title: 'Цветовая температура',
  },
  dimming: {
    title: 'Управление яркостью',
  },
  beam_angle: {
    title: 'Угол рассеивания',
  },
  protection: {
    title: 'Влагозащита',
  },
  body_color: {
    title: 'Цвет корпуса',
  },
  frame_color: {
    title: 'Цвет рамки',
  },
  cover_color: {
    title: 'Цвет накладки',
  },
};

function List({ property }: { property: IProperty }) {
  return (
    <ul className={styles.list}>
      {Object.keys(PROPERTIES).map(
        prop =>
          property[prop] && (
            <li key={prop} className={styles.item}>
              <span>{PROPERTIES[prop]['title']}</span>
              <span>{property[prop]['title']}</span>
            </li>
          ),
      )}
    </ul>
  );
}

function Header() {
  return <h4 className={`${featureStyles.title}`}>Характеристики:</h4>;
}

interface IProperties {
  product: IProduct;
}

export function Properties({ product }: IProperties) {
  return (
    <div className={`${featureStyles.wrapper}`}>
      <div className={styles.accordion}>
        <Accordion Header={<Header />}>
          <List property={product.property} />
        </Accordion>
      </div>
      <div className={`${styles['simple-list']}`}>
        <Header />
        <List property={product.property} />
      </div>
    </div>
  );
}
