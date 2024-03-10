import React from 'react';
import { IModel } from '@/api/catalog/models';
import { usePathFiltersContext } from '@/hooks/usePathFiltersContext';
import { BreadCrumbs, IAnchor, ILink } from '@/components/BreadCrumbs';

interface IModelBreadCrumbs {
  model: IModel;
}

export const allAnchors: IAnchor[] = [
  {
    title: 'Описание',
    id: 'infoblock',
  },
  {
    title: 'Преимущества',
    id: 'banners',
  },
  {
    title: 'Решения',
    id: 'gallery',
  },
  {
    title: 'Модификации',
    id: 'modifications',
  },
];

export function ModelBreadCrumbs({ model }: IModelBreadCrumbs) {
  const updateGroupSlug = usePathFiltersContext(state => state?.updateGroupSlug);
  const updateCategorySlug = usePathFiltersContext(state => state?.updateCategorySlug);
  const links: ILink[] = [
    {
      title: model.category.group.title,
      href: `/catalog/${model.category.group.slug}`,
      onClick: () => {
        updateGroupSlug(model.category.group.slug);
        updateCategorySlug('');
      },
    },
    {
      title: model.category.title,
      href: `/catalog/${model.category.group.slug}/${model.category.slug}`,
      onClick: () => {
        updateGroupSlug(model.category.group.slug);
        updateCategorySlug(model.category.slug);
      },
    },
  ];
  let anchors = [];
  for (let a of allAnchors) {
    if (a.id === 'banners' && model.banners.length < 1) continue;
    anchors.push(a);
  }

  return <BreadCrumbs links={links} activeLink={model.title} anchors={anchors} />;
}
