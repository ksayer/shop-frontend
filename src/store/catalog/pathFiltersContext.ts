import { createContext } from 'react';
import { PathFilterStore } from '@/store/catalog/pathFilters';

export const PathFiltersContext = createContext<PathFilterStore | null>(null);
