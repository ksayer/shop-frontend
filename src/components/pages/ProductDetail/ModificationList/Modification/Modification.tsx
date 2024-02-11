import React from 'react';
import styles from './Modification.module.css';
import { ImageType } from '@/api/types';
import { Visual } from '@/components/pages/ProductDetail/ModificationList/Modification/Visual';
import { ShoppingBlock } from '@/components/pages/ProductDetail/ModificationList/Modification/ShoppingBlock';
import { Features } from '@/components/pages/ProductDetail/ModificationList/Modification/Features';

interface IFile {
  title: string;
  link: string;
}

export interface IProduct {
  color: string;
  link: string;
  image: ImageType;
  scheme: ImageType;
  files?: IFile[];
  power?: string;
  beam?: string;
  color_index?: string;
  color_temperature?: string;
  dimming?: string;
  beam_angle?: string;
  protection?: string;
  frame_color?: string;
  price: string;
}

interface IModification {
  title: string;
  products: IProduct[];
}

export function Modification({ title, products }: IModification) {
  return (
    <div>
      <h3 className={styles.title}>Опции {title}</h3>
      <div>
        <Visual image={products[0].image} scheme={products[0].scheme} />
        <Features />
      </div>
      <div>
        <ShoppingBlock />
      </div>
    </div>
  );
}
