'use client';
import React, { useEffect, useState } from 'react';
import styles from './Modification.module.css';
import { ImageType } from '@/api/types';
import { Visual } from '@/components/pages/ProductDetail/ModificationList/Modification/Visual';
import { Features } from '@/components/pages/ProductDetail/ModificationList/Modification/Features';
import { ColorSwitcher } from '@/components/pages/ProductDetail/ModificationList/Modification/ColorSwitcher';
import { useWidth } from '@/features/hooks/useWidth';

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
  image: ImageType;
  scheme: ImageType;
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
          {width >= 768 && (
            <div className={`${styles['color-switcher']}`}>
              <ColorSwitcher changeSlug={changeSlug} products={products} />
            </div>
          )}
          <Features product={product} />
        </div>
      </div>
    </div>
  );
}
