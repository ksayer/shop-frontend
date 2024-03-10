import React from 'react';
import styles from './BreadCrumbs.module.css';
import { useActiveBlockId } from '@/components/BreadCrumbs/useActiveBlockId';
import Link from 'next/link';

export interface IAnchor {
  title: string;
  id: string;
}

export interface ILink {
  title: string;
  href: string;
  onClick?: () => void;
}

interface IBreadCrumbs {
  activeLink: string;
  links: ILink[];
  anchors: IAnchor[];
}

const scrollTo = (element: string) => {
  document.getElementById(element)?.scrollIntoView({ behavior: 'smooth' });
};

export function BreadCrumbs({ activeLink, links, anchors }: IBreadCrumbs) {
  const [activeBlockId] = useActiveBlockId();
  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.left}>
        {links.map(l => (
          <div key={l.href} className={`${styles['link-wrapper']}`}>
            <Link href={l.href} className={`link ${styles.link}`} onClick={l.onClick}>
              {l.title}
            </Link>
            <span className={styles.separator}>/</span>
          </div>
        ))}
        <span className={styles.current}>{activeLink}</span>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {anchors.map(a => (
            <li key={a.id}>
              <a
                className={`link ${activeBlockId === a.id && styles['link--selected']}`}
                onClick={() => scrollTo(a.id)}
              >
                {a.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
