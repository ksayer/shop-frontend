import React from 'react';
import styles from './ModificationList.module.css';
import Image from 'next/image';
import {
  IProduct,
  Modification,
} from '@/components/views/ProductDetail/ModificationList/Modification';
import { usePathFiltersContext } from '@/hooks/usePathFiltersContext';
import { IModification } from '@/api/catalog/models';
import { useRouter } from 'next/navigation';

interface IModifications {
  modifications: IModification[];
}

function parseProduct(
  modifications: IModification[],
  productSlug: string,
): [IProduct, IModification] {
  for (const m of modifications) {
    for (const p of m.products) {
      if (p.slug === productSlug) {
        return [p, m];
      }
    }
  }
  return [modifications[0].products[0], modifications[0]];
}

export function ModificationList({ modifications }: IModifications) {
  const productSlug = usePathFiltersContext(state => state?.productSlug);
  const updateProductSlug = usePathFiltersContext(state => state?.updateProductSlug);
  const [product, modification] = parseProduct(modifications, productSlug);
  const router = useRouter();

  const handleChangeSlug = (slug: string) => {
    updateProductSlug(slug);
    router.replace(slug, { scroll: false });
  };

  return (
    <section id={'modifications'} className={`container`}>
      <h3 className={styles.title}>Модификации</h3>
      <ul className={styles.list}>
        {modifications.map(m => (
          <li key={m.id} className={styles.item}>
            <button
              className={`${styles.btn} ${modification.id === m.id && styles['btn--active']}`}
              onClick={() => handleChangeSlug(m.products[0].slug)}
            >
              <div className={`${styles['image-wrapper']}`}>
                <Image
                  src={m.products[0].image?.absolute_url}
                  alt={'image'}
                  fill
                  sizes="50vw"
                  quality={product.image.optimized ? 100 : 75}
                  className={`${styles.image}`}
                />
              </div>
              <h4
                className={`${styles.subtitle} ${
                  m.id === modification.id && styles['subtitle--active']
                }`}
              >
                {m.title}
              </h4>
            </button>
          </li>
        ))}
      </ul>
      <Modification
        key={modification.id}
        title={modification.title}
        product={product}
        products={modification.products}
        changeSlug={handleChangeSlug}
      />
    </section>
  );
}
