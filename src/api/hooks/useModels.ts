import { getModels } from '@/api/catalog/models';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY_MODELS } from '@/features/constants/queryKeys';
import { FilterType, IFilter } from '@/features/store/catalog/pathFilters';

export const useModels = ({
  groupSlug,
  categorySlugs,
  filters,
}: {
  groupSlug: string;
  categorySlugs: string[];
  filters: {
    [key in FilterType as string]: IFilter;
  };
}) => {
  return useQuery({
    queryKey: [QUERY_KEY_MODELS, groupSlug, categorySlugs, filters],
    queryFn: () => getModels(groupSlug, categorySlugs, filters),
  });
};
