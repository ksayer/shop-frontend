import React from 'react';
import ModelDetailPage, { IModelDetailPage } from '@/app/catalog/models/[modelSlug]/page';

export default async function Page({ params }: IModelDetailPage) {
  return <ModelDetailPage params={params} />;
}
