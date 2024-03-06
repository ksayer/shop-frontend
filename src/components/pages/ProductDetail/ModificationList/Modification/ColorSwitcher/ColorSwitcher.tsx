import styles from './ColorSwitcher.module.css';
import { usePathFiltersContext } from '@/features/hooks/usePathFiltersContext';
import { IProduct } from '@/components/pages/ProductDetail/ModificationList/Modification';

interface IColorSwitcher {
  products: IProduct[];
  changeSlug: (slug: string) => void;
  property: string;
}

export function ColorSwitcher({ products, changeSlug, property }: IColorSwitcher) {
  const productSlug = usePathFiltersContext(state => state?.productSlug);
  if (!products[0].property.body_color) {
    return;
  }
  return (
    <>
      <h4 className={styles.title}>Цвет корпуса</h4>
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
