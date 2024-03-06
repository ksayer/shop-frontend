'use client';
import React, { useEffect } from 'react';
import styles from './ProductDetail.module.css';
import { FormConsult } from '@/components/CMS/FormConsult';
import { IReviewBlock, ReviewBlock } from '@/components/CMS/ReviewBlock';
import { BreadCrumbs } from '@/components/pages/ProductDetail/BradCrumbs';
import { InfoBlock } from '@/components/pages/ProductDetail/InfoBlock';
import { Gallery } from '@/components/pages/ProductDetail/Gallery';
import { ModificationList } from '@/components/pages/ProductDetail/ModificationList';
import { ShoppingBlock } from '@/components/pages/ProductDetail/ModificationList/Modification/ShoppingBlock';
import { useModel } from '@/api/hooks/useModel';
import { Banners } from '@/components/pages/ProductDetail/Banners';
import { usePathFiltersContext } from '@/features/hooks/usePathFiltersContext';

const breadCrumbs = [
  { title: 'Интерьерные', url: '/catalog' },
  { title: 'Встраиваемые', url: '/contacts' },
];

export function ProductDetail({
  reviewBlock,
  modelSlug,
  productSlug,
}: {
  reviewBlock: IReviewBlock;
  modelSlug: string;
  productSlug: string;
}) {
  const { data, isLoading } = useModel({ slug: modelSlug });
  // console.log(data);
  const updateProductSlug = usePathFiltersContext(state => state?.updateProductSlug);

  useEffect(() => {
    if (!productSlug && data) {
      const newUrl = window.location.href + '/' + data.modifications[0].products[0].slug;
      window.history.replaceState({}, '', newUrl);
      updateProductSlug(data.modifications[0].products[0].slug);
    }
  }, [data]);

  return isLoading ? (
    <div>Loading</div>
  ) : data ? (
    <>
      <BreadCrumbs title={data.title} links={breadCrumbs} />
      <InfoBlock
        image={data.modifications[0].products[0].image}
        title={data.title}
        price={data.min_price}
        discountedPrice={data.min_discounted_price}
        text={data.description}
      />
      {data.banners.length > 0 && <Banners title={data.title} banners={data.banners} />}
      <Gallery title={'Решения в интерьере'} images={data.gallery} />
      <ModificationList modifications={data.modifications} />
      <div className={`container ${styles.shopping}`}>
        <ShoppingBlock model={data} />
      </div>
      <FormConsult />
      <ReviewBlock key={reviewBlock.id} {...reviewBlock} />
    </>
  ) : null;
}
