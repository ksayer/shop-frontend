import { getCMSContent } from '@/api/cms';
import { API_URL } from '@/features/constants';
import React from 'react';
import { ProductDetail } from '@/components/views/ProductDetail';

export default async function ModelDetailPage({
  params,
}: {
  params: { modelSlug: string; productSlug: string };
}) {
  const content = await getCMSContent(`${API_URL}/content/content_blocks/?inner_title=Отзывы`);
  const reviewBlock = content.results[0];
  return (
    <main className={'main-flex'}>
      <ProductDetail
        reviewBlock={reviewBlock}
        modelSlug={params.modelSlug}
        productSlug={params.productSlug}
      />
    </main>
  );
}
