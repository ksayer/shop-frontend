import React from 'react';
import styles from './BreadCrumbs.module.css';
import Link from 'next/link';

interface ILink {
  title: string;
  url: string;
}

interface IBreadCrumbs {
  title: string;
  links: ILink[];
}

export function BreadCrumbs({ title, links }: IBreadCrumbs) {
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
            <a className={`link ${styles['link--selected']}`}>Описание</a>
          </li>
          <li>
            <a className={'link'}>Преимущества</a>
          </li>
          <li>
            <a className={'link'}>Решения</a>
          </li>
          <li>
            <a className={'link'}>Модификации</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
