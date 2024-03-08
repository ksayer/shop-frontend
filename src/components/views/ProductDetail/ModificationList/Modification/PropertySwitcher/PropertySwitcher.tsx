import React from 'react';
import styles from './PropertySwitcher.module.css';
import { ColorDropdown } from '../ColorDropdown';
import { IProduct } from '@/components/views/ProductDetail/ModificationList/Modification';
import { ColorSwitcher } from '@/components/views/ProductDetail/ModificationList/Modification/ColorSwitcher';

interface IPropertySwitcher {
  product: IProduct;
  products: IProduct[];
  changeSlug: (slug: string) => void;
  type: 'dropdown' | 'radio';
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

export function PropertySwitcher({ products, product, changeSlug, type }: IPropertySwitcher) {
  return (
    <>
      {type === 'radio' ? (
        <div className={styles.switchers}>
          <div>
            <ColorSwitcher
              changeSlug={changeSlug}
              products={getProducts(products, product, 'frame_color', 'body_color')}
              property={'body_color'}
            />
          </div>
          <div>
            <ColorSwitcher
              changeSlug={changeSlug}
              products={getProducts(products, product, 'body_color', 'frame_color')}
              property={'frame_color'}
            />
          </div>
        </div>
      ) : type === 'dropdown' ? (
        <div className={styles.dropdowns}>
          <ColorDropdown
            products={getProducts(products, product, 'frame_color', 'body_color')}
            changeSlug={changeSlug}
            property={'body_color'}
          />
          <ColorDropdown
            products={getProducts(products, product, 'body_color', 'frame_color')}
            changeSlug={changeSlug}
            property={'frame_color'}
          />
        </div>
      ) : null}
    </>
  );
}
