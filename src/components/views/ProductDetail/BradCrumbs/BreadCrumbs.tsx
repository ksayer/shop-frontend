import React from 'react';
import styles from './BreadCrumbs.module.css';
import Link from 'next/link';
import { useActiveBlockId } from '@/components/views/ProductDetail/BradCrumbs/useActiveBlockId';
import { IModel } from '@/api/catalog/models';
import { usePathFiltersContext } from '@/hooks/usePathFiltersContext';

interface ILink {
  title: string;
  url: string;
}

interface IBreadCrumbs {
  model: IModel;
}

const scrollTo = (element: string) => {
  document.getElementById(element)?.scrollIntoView({ behavior: 'smooth' });
};

export function BreadCrumbs({ model }: IBreadCrumbs) {
  const [activeBlockId] = useActiveBlockId();
  const updateGroupSlug = usePathFiltersContext(state => state?.updateGroupSlug);
  const updateCategorySlug = usePathFiltersContext(state => state?.updateCategorySlug);
  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.left}>
        <div className={`${styles['link-wrapper']}`}>
          <Link
            href={`/catalog/${model.category.group.slug}`}
            className={`link ${styles.link}`}
            onClick={() => {
              updateGroupSlug(model.category.group.slug);
              updateCategorySlug('');
            }}
          >
            {model.category.group.title}
          </Link>
          <span className={styles.separator}>/</span>
        </div>
        <div className={`${styles['link-wrapper']}`}>
          <Link
            href={`/catalog/${model.category.group.slug}/${model.category.slug}`}
            className={`link ${styles.link}`}
            onClick={() => {
              updateGroupSlug(model.category.group.slug);
              updateCategorySlug(model.category.slug);
            }}
          >
            {model.category.title}
          </Link>
          <span className={styles.separator}>/</span>
        </div>
        <span className={styles.current}>{model.title}</span>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <a
              className={`link ${activeBlockId === 'infoblock' && styles['link--selected']}`}
              onClick={() => scrollTo('infoblock')}
            >
              Описание
            </a>
          </li>
          {model.banners.length > 0 &&
            <li>
              <a
                className={`link ${activeBlockId === 'banners' && styles['link--selected']}`}
                onClick={() => scrollTo('banners')}
              >
                Преимущества
              </a>
            </li>
          }
          <li>
            <a
              className={`link ${activeBlockId === 'gallery' && styles['link--selected']}`}
              onClick={() => scrollTo('gallery')}
            >
              Решения
            </a>
          </li>
          <li>
            <a
              className={`link ${activeBlockId === 'modifications' && styles['link--selected']}`}
              onClick={() => scrollTo('modifications')}
            >
              Модификации
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
