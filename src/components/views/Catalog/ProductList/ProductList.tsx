'use client';
import React, { useEffect, useRef } from 'react';
import styles from './ProducLlist.module.css';
import { Card } from '@/components/views/Catalog/ProductList/Card';
import { usePathFiltersContext } from '@/hooks/usePathFiltersContext';
import { useModels } from '@/hooks/useModels';
import { ICategory } from '@/api/catalog/catalog';
import { PaginatedAPIResponse } from '@/api/types';
import { IModelFromList } from '@/api/catalog/models';
import { SkeletonCard } from '@/components/views/Catalog/ProductList/Card/SkeletonCard';
import { displayValue } from 'react-query/types/devtools/utils';

interface IProductList {
  categories: ICategory[];
}

function Skeleton() {
  return Array.from({ length: 24 }, (_, index) => index + 1).map(i => <SkeletonCard key={i} />);
}

export function ProductList({ categories }: IProductList) {
  const filters = usePathFiltersContext(state => state.filters);
  const groupSlug = usePathFiltersContext(state => state?.groupSlug);
  const categorySlug = usePathFiltersContext(state => state?.categorySlug);
  const loadMoreElement = useRef<HTMLDivElement>(null);
  const { data, fetchNextPage, hasNextPage, isFetching, status, isFetchingNextPage } = useModels({
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
      {status === 'pending' ? (
        <Skeleton />
      ) : (
        <>
          {data?.pages?.map((page: PaginatedAPIResponse<IModelFromList>, pageIndex) =>
            page?.results?.map((model, productIndex) => {
              const isLastProduct =
                pageIndex === data.pages.length - 1 && productIndex === page.results.length - 1;
              return (
                <Card key={model.id} {...model} innerRef={isLastProduct ? loadMoreElement : null} />
              );
            }),
          )}
          {isFetchingNextPage ? <Skeleton /> : null}
        </>
      )}
    </div>
  );
}
