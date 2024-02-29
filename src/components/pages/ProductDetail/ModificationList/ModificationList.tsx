import React, { useEffect, useState } from 'react';
import styles from './ModificationList.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ImageType } from '@/api/types';
import {
  IProduct,
  Modification,
} from '@/components/pages/ProductDetail/ModificationList/Modification';
import { ShoppingBlock } from '@/components/pages/ProductDetail/ModificationList/Modification/ShoppingBlock';

export interface IModification {
  id?: number;
  title: string;
  slug: string;
  products: IProduct[];
}

interface IModifications {
  modifications: IModification[];
}

export function ModificationList({ modifications }: IModifications) {
  const [activeId, setActiveId] = useState(modifications[0].id);
  return (
    <section id={'modifications'} className={`container`}>
      <h3 className={styles.title}>Модификации</h3>
      <ul className={styles.list}>
        {modifications.map(modification => (
          <li key={modification.id} className={styles.item}>
            <button
              className={`${styles.btn} ${activeId === modification.id && styles['btn--active']}`}
              onClick={() => setActiveId(modification.id)}
            >
              <div className={`${styles['image-wrapper']}`}>
                <Image
                  src={modification.products[0].image?.absolute_url}
                  alt={'image'}
                  fill
                  sizes="50vw"
                  quality={modification.products[0].image.optimized ? 100 : 75}
                  className={`${styles.image}`}
                />
              </div>
              <h4
                className={`${styles.subtitle} ${
                  activeId === modification.id && styles['subtitle--active']
                }`}
              >
                {modification.title}
              </h4>
            </button>
          </li>
        ))}
      </ul>
      <Modification
        key={modifications[0].id}
        title={modifications[0].title}
        products={modifications[0].products}
      />
    </section>
  );
}
