import React from 'react';
import styles from './Features.module.css';
import { Properties } from '@/components/views/ProductDetail/ModificationList/Modification/Features/Properties';
import { Docs } from '@/components/views/ProductDetail/ModificationList/Modification/Features/Docs';
import { IProduct } from '@/components/views/ProductDetail/ModificationList/Modification';

interface IFeatures {
  product: IProduct;
}

export function Features({ product }: IFeatures) {
  return (
    <>
      <Properties product={product} />
      <Docs />
    </>
  );
}
