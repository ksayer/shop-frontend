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
          <>
            <Link href={link.url} className={`link ${styles.link}`}>
              {link.title}
            </Link>
            <span className={styles.separator}>/</span>
          </>
        ))}
        <span className={styles.current}>{title}</span>
      </div>
      <nav className={styles.nav}>
        {/*<ul className={styles.menu}>*/}
        {/*  <li>*/}
        {/*    <a className={`link ${styles['link--selected']}`} href="#">*/}
        {/*      Описание*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <a className={'link'} href="#">*/}
        {/*      Преимущества*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <a className={'link'} href="#">*/}
        {/*      Решения*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <a className={'link'} href="#">*/}
        {/*      Модификации*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </nav>
    </div>
  );
}
