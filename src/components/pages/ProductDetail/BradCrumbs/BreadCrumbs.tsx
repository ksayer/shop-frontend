import React from 'react';
import styles from './BreadCrumbs.module.css';
import Link from 'next/link';
import {useActiveBlockId} from "@/components/pages/ProductDetail/BradCrumbs/useActiveBlockId";

interface ILink {
  title: string;
  url: string;
}

interface IBreadCrumbs {
  title: string;
  links: ILink[];
}

const scrollTo = (element: string) => {
  document.getElementById(element)?.scrollIntoView({ behavior: 'smooth' });
};

export function BreadCrumbs({ title, links }: IBreadCrumbs) {
  const [activeBlockId] = useActiveBlockId()

  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.left}>
        {links.map(link => (
          <div className={`${styles['link-wrapper']}`} key={link.url}>
            <Link href={link.url} className={`link ${styles.link}`}>
              {link.title}
            </Link>
            <span className={styles.separator}>/</span>
          </div>
        ))}
        <span className={styles.current}>{title}</span>
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
          <li>
            <a
              className={`link ${activeBlockId === 'features' && styles['link--selected']}`}
              onClick={() => scrollTo('features')}
            >
              Преимущества
            </a>
          </li>
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
