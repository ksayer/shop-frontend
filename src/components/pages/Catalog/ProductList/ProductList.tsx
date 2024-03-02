'use client';
import React, { useEffect, useRef } from 'react';
import styles from './ProducLlist.module.css';
import { Card, ICard } from '@/components/pages/Catalog/ProductList/Card';
import { usePathFiltersContext } from '@/features/hooks/usePathFiltersContext';
import { useModels } from '@/api/hooks/useModels';
import { ICategory } from '@/api/catalog/catalog';
import { PaginatedAPIResponse } from '@/api/types';

interface IProductList {
  categories: ICategory[];
}

export function ProductList({ categories }: IProductList) {
  const filters = usePathFiltersContext(state => state.filters);
  const groupSlug = usePathFiltersContext(state => state?.groupSlug);
  const categorySlug = usePathFiltersContext(state => state?.categorySlug);
  const loadMoreElement = useRef<HTMLDivElement>(null);
  const { data, fetchNextPage, hasNextPage, isFetching } = useModels({
    groupSlug,
    categorySlugs: categories.filter(c => c.slugArray.includes(categorySlug))[0]?.slugArray,
    filters,
  });
  useEffect(() => {
    const observer = new IntersectionObserver(
      async entry => {
        if (entry[0].isIntersecting) {
          !isFetching && hasNextPage && (await fetchNextPage());
        }
      },
      { rootMargin: '200px' },
    );
    if (loadMoreElement.current) {
      observer.observe(loadMoreElement.current);
    }
  }, [loadMoreElement, fetchNextPage, data, hasNextPage, isFetching]);
  return (
    <div className={styles.catalog}>
      {data?.pages?.map(
        (page: PaginatedAPIResponse<ICard>, pageIndex) =>
          page?.results?.map((product, productIndex) => {
            const isLastProduct =
              pageIndex === data.pages.length - 1 && productIndex === page.results.length - 1;
            return (
              <Card
                key={product.id}
                min_price={product.min_price}
                title={product.title}
                slug={product.slug}
                images={product.images}
                id={product.id}
                innerRef={isLastProduct ? loadMoreElement : null}
              />
            );
          }),
      )}
    </div>
  );
}
