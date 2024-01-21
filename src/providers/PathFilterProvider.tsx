import React, { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { createPathFilterStore } from '@/store/catalog/pathFilters';
import { PathFiltersContext } from '@/store/catalog/pathFiltersContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function PathFilterProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const store = useRef(
    createPathFilterStore({
      groupSlug: pathname.split('/')[2],
      categorySlug: pathname.split('/')[3],
    }),
  ).current;

  return (
    <PathFiltersContext.Provider value={store}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </PathFiltersContext.Provider>
  );
}
