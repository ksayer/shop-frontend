import React, { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { createPathFilterStore } from '@/features/store/catalog/pathFilters';
import { PathFiltersContext } from '@/features/store/catalog/pathFiltersContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function PathFilterProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const store = useRef(
    createPathFilterStore({
      groupSlug: pathname.split('/')[2] === 'models' ? '' : pathname.split('/')[2],
      categorySlug: pathname.split('/')[2] === 'models' ? '' : pathname.split('/')[3],
      modelSlug: pathname.split('/')[2] === 'models' ? '' : pathname.split('/')[3],
      productSlug: pathname.split('/')[2] === 'models' ? pathname.split('/')[4] : '',
    }),
  ).current;
  return (
    <PathFiltersContext.Provider value={store}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </PathFiltersContext.Provider>
  );
}
