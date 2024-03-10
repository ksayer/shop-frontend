'use client';
import React, { useEffect } from 'react';
import styles from './ProductDetail.module.css';
import { FormConsult } from '../CMS/FormConsult';
import { ReviewBlock } from '../CMS/ReviewBlock';
import { BreadCrumbs } from '@/components/views/ProductDetail/BradCrumbs';
import { InfoBlock } from '@/components/views/ProductDetail/InfoBlock';
import { Gallery } from '@/components/views/ProductDetail/Gallery';
import { ModificationList } from '@/components/views/ProductDetail/ModificationList';
import { ShoppingBlock } from '@/components/views/ProductDetail/ModificationList/Modification/ShoppingBlock';
import { useModel } from '@/hooks/useModel';
import { Banners } from '@/components/views/ProductDetail/Banners';
import { usePathFiltersContext } from '@/hooks/usePathFiltersContext';
import { IContent } from '@/api/cms';

export function ProductDetail({
  reviewBlock,
  modelSlug,
  productSlug,
}: {
  reviewBlock: IContent;
  modelSlug: string;
  productSlug: string;
}) {
  const { data, isLoading } = useModel({ slug: modelSlug });
  const updateProductSlug = usePathFiltersContext(state => state?.updateProductSlug);

  useEffect(() => {
    if (!productSlug && data) {
      const newUrl = window.location.href + '/' + data.modifications[0].products[0].slug;
      window.history.replaceState({}, '', newUrl);
      updateProductSlug(data.modifications[0].products[0].slug);
    }
  }, [data]);
  return isLoading ? (
    <div className={`${styles.loader}`}>
      <div className={`${styles['loader__spinner']} loader-spinner`}></div>
    </div>
  ) : data ? (
    <>
      <BreadCrumbs model={data} />
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
