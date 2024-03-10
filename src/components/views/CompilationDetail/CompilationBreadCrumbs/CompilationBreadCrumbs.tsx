import React from 'react';
import styles from './CompilationDetail.module.css';
import { BreadCrumbs, IAnchor, ILink } from '@/components/BreadCrumbs';
import { allAnchors } from '@/components/views/ProductDetail/ModelBreadCrumbs';
import { Preview } from '@/components/views/CompilationDetail/Preview';

export function CompilationBreadCrumbs() {
  const links: ILink[] = [
    {
      title: 'Подборки',
      href: `/compilations`,
    },
  ];
  return (
    <>
      <BreadCrumbs links={links} activeLink={'Лучшая подборка'} anchors={allAnchors} />
    </>
  );
}
