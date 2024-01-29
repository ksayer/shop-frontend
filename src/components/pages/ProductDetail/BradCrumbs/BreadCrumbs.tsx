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
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {links.map(link => (
          <Link key={link.url} href={link.url}>
            {link.title} /{' '}
          </Link>
        ))}
        {title}
      </div>
      <div className={styles.right}></div>
    </div>
  );
}
