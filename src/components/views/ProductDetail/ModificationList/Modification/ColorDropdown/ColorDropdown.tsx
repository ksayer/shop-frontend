import React from 'react';
import { Dropdown, IDropdownData } from '@/components/ui/Dropdown';
import { IProduct } from '@/components/views/ProductDetail/ModificationList/Modification';
import { usePathFiltersContext } from '@/hooks/usePathFiltersContext';
import { PROPERTIES } from '@/components/views/ProductDetail/ModificationList/Modification/Features/Properties';

interface IColorDropdown {
  products: IProduct[];
  changeSlug: (slug: string) => void;
  property: string;
}

export function ColorDropdown({ products, changeSlug, property }: IColorDropdown) {
  const productSlug = usePathFiltersContext(state => state?.productSlug);
  const activeProduct = products?.find(p => p.slug === productSlug);
  if (!activeProduct || !activeProduct.property[property]) return null;
  function productToDropdownInterface(p: IProduct): IDropdownData {
    return { id: p.id, value: p.slug, title: p.property[property].title };
  }
  return (
    <Dropdown
      onChange={changeSlug}
      data={products.map(p => productToDropdownInterface(p))}
      title={PROPERTIES[property].title}
      activeElement={productToDropdownInterface(activeProduct)}
    />
  );
}
