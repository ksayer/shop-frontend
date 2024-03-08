import React from 'react';
import styles from './Modification.module.css';
import { ImageData } from '@/api/types';
import { Preview } from '@/components/views/ProductDetail/ModificationList/Modification/Preview';
import { Features } from '@/components/views/ProductDetail/ModificationList/Modification/Features';
import { ColorSwitcher } from '@/components/views/ProductDetail/ModificationList/Modification/ColorSwitcher';
import { useWidth } from '@/hooks/useWidth';
import { PropertySwitcher } from '@/components/views/ProductDetail/ModificationList/Modification/PropertySwitcher';

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

export function Modification({ title, product, products, changeSlug }: IModification) {
  return (
    <div>
      <h3 className={styles.title}>Опции {title}</h3>
      <div className={styles.top}>
        <div className={styles.preview}>
          <PropertySwitcher
            product={product}
            products={products}
            changeSlug={changeSlug}
            type={'dropdown'}
          />
          <Preview image={product.image} scheme={product.scheme} />
        </div>
        <div className={styles.features}>
          <PropertySwitcher
            product={product}
            products={products}
            changeSlug={changeSlug}
            type={'radio'}
          />
          <Features product={product} />
        </div>
      </div>
    </div>
  );
}
