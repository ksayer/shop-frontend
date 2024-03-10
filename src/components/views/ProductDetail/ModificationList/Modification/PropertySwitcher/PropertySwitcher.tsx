import React from 'react';
import styles from './PropertySwitcher.module.css';
import {ColorDropdown} from '../ColorDropdown';
import {IProduct} from '@/components/views/ProductDetail/ModificationList/Modification';
import {
  ColorSwitcher
} from '@/components/views/ProductDetail/ModificationList/Modification/ColorSwitcher';
import {
  PROPERTIES
} from "@/components/views/ProductDetail/ModificationList/Modification/Features/Properties";

interface IPropertySwitcher {
  product: IProduct;
  products: IProduct[];
  changeSlug: (slug: string) => void;
  type: 'dropdown' | 'radio';
}

function filterProperties(
  activeProduct: IProduct,
  checkingProduct: IProduct,
  checkingProperties: Array<keyof typeof PROPERTIES>
) {


  return checkingProperties.every(prop =>
    activeProduct.property[prop]?.title === checkingProduct.property[prop]?.title
  )
}

function filterUniqueProduct(item: IProduct, index: number, self: Array<IProduct>, value: keyof typeof PROPERTIES) {
  return index === self.findIndex(p => p.property[value]?.title === item.property[value]?.title)
}

function getProducts(
  products: IProduct[],
  product: IProduct,
  filterProperty: keyof typeof PROPERTIES,
) {
  const checkingProperties = [...SWITCH_PROPERTIES].filter(p => p !== filterProperty)
  products = products
    .filter(p => filterProperties(product, p, checkingProperties))
    .sort((a, b) => {
      const bodyColorA = a.property[filterProperty]?.title.toLowerCase();
      const bodyColorB = b.property[filterProperty]?.title.toLowerCase();
      if (bodyColorA < bodyColorB) {
        return -1;
      }
      if (bodyColorA > bodyColorB) {
        return 1;
      }
      return 0;
    });
  return products
}

const SWITCH_PROPERTIES: Array<keyof typeof PROPERTIES> = ['body_color', 'frame_color', 'cover_color']

export function PropertySwitcher({products, product, changeSlug, type}: IPropertySwitcher) {
  return (
    <>
      {type === 'radio' ? (
        <div className={styles.switchers}>
          {
            SWITCH_PROPERTIES.map(p => (
              <div key={p}>
                <ColorSwitcher
                  changeSlug={changeSlug}
                  products={getProducts(products, product, p)}
                  property={p}
                />
              </div>
            ))
          }
        </div>
      ) : type === 'dropdown' ? (
        <div className={styles.dropdowns}>
          {
            SWITCH_PROPERTIES.map(p => (
              <div key={p}>
                <ColorDropdown
                  changeSlug={changeSlug}
                  products={getProducts(products, product, p)}
                  property={p}
                />
              </div>
            ))
          }
        </div>
      ) : null}
    </>
  );
}
