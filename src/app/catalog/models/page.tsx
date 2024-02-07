import { getCMSContent } from '@/api/cms';
import { API_URL } from '@/features/constants';
import React from 'react';
import { ProductDetail } from '@/components/pages/ProductDetail';

export default async function ModelDetailPage() {
  const content = await getCMSContent(`${API_URL}/content/content_blocks/?inner_title=Отзывы`);
  const reviewBlock = content.results[0];
  return (
    <main className={'main-flex'}>
      <ProductDetail reviewBlock={reviewBlock} />
    </main>
  );
}
