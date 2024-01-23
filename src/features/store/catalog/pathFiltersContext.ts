import { createContext } from 'react';
import { PathFilterStore } from '@/features/store/catalog/pathFilters';

export const PathFiltersContext = createContext<PathFilterStore | null>(null);
