import { useContext } from 'react';
import { useStore } from 'zustand';
import { PathFilterState } from '@/features/store/catalog/pathFilters';
import { PathFiltersContext } from '@/features/store/catalog/pathFiltersContext';

export function usePathFiltersContext<T>(selector: (state: PathFilterState) => T): T {
  const store = useContext(PathFiltersContext);
  if (!store) throw new Error('Missing PathFiltersContext.Provider in the tree');
  return useStore(store, selector);
}
