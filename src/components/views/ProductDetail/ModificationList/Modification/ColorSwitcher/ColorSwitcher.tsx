import styles from './ColorSwitcher.module.css';
import { usePathFiltersContext } from '@/hooks/usePathFiltersContext';
import { IProduct } from '@/components/views/ProductDetail/ModificationList/Modification';
import { PROPERTIES } from '@/components/views/ProductDetail/ModificationList/Modification/Features/Properties';

interface IColorSwitcher {
  products: IProduct[];
  changeSlug: (slug: string) => void;
  property: keyof typeof PROPERTIES;
}

export function ColorSwitcher({ products, changeSlug, property }: IColorSwitcher) {
  const productSlug = usePathFiltersContext(state => state?.productSlug);
  if (products.length === 0 || !products[0].property[property]) {
    return;
  }
  return (
    <>
      <h4 className={styles.title}>{PROPERTIES[property]?.title}</h4>
      <div className={styles.buttons}>
        {products.map(product => (
          <button
            key={product.id}
            className={`${styles.btn} ${product.slug == productSlug && styles['border--active']}`}
            onClick={() => changeSlug(product.slug)}
          >
            {product.property[property].title}
          </button>
        ))}
      </div>
    </>
  );
}
