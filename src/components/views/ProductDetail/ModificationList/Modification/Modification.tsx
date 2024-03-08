import React, { useEffect, useState } from 'react';
import styles from './Modification.module.css';
import { ImageData } from '@/api/types';
import { Visual } from '@/components/views/ProductDetail/ModificationList/Modification/Visual';
import { Features } from '@/components/views/ProductDetail/ModificationList/Modification/Features';
import { ColorSwitcher } from '@/components/views/ProductDetail/ModificationList/Modification/ColorSwitcher';
import { useWidth } from '@/hooks/useWidth';

interface IFile {
  title: string;
  link: string;
}

export interface IProperty {
  [key: string]: {
    [key: string]: string;
  };
}

export interface IProduct {
  id: number;
  slug: string;
  image: ImageData;
  scheme: ImageData;
  files?: IFile[];
  price: string;
  discounted_price: string | null;
  property: IProperty;
}

interface IModification {
  title: string;
  product: IProduct;
  products: IProduct[];
  changeSlug: (slug: string) => void;
}

function getProducts(
  products: IProduct[],
  product: IProduct,
  property: string,
  filter_property: string,
) {
  return products
    .filter(p => p.property[property]?.title == product.property[property]?.title)
    .sort((a, b) => {
      const bodyColorA = a.property[filter_property].title.toLowerCase();
      const bodyColorB = b.property[filter_property].title.toLowerCase();
      if (bodyColorA < bodyColorB) {
        return -1;
      }
      if (bodyColorA > bodyColorB) {
        return 1;
      }
      return 0;
    });
}

export function Modification({ title, product, products, changeSlug }: IModification) {
  const [width] = useWidth(1920);
  return (
    <div>
      <h3 className={styles.title}>Опции {title}</h3>
      <div className={styles.top}>
        <div className={styles.images}>
          <Visual image={product.image} scheme={product.scheme} />
        </div>
        <div className={styles.features}>
          {width >= 768 && product.property.body_color && (
            <div className={`${styles['color-switcher']}`}>
              <ColorSwitcher
                changeSlug={changeSlug}
                products={getProducts(products, product, 'frame_color', 'body_color')}
                property={'body_color'}
              />
            </div>
          )}
          {width >= 768 && product.property.frame_color && (
            <div className={`${styles['color-switcher']}`}>
              <ColorSwitcher
                changeSlug={changeSlug}
                products={getProducts(products, product, 'body_color', 'frame_color')}
                property={'frame_color'}
              />
            </div>
          )}
          <Features product={product} />
        </div>
      </div>
    </div>
  );
}
