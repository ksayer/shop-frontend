import { FilterType, getModels, IFilter } from '@/api/catalog/models';
import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEY_MODELS } from '@/features/constants/queryKeys';

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
  return useInfiniteQuery({
    queryKey: [QUERY_KEY_MODELS, groupSlug, categorySlugs, filters],
    queryFn: async ({ pageParam }) => getModels(pageParam, groupSlug, categorySlugs, filters),
    initialPageParam: '',
    getNextPageParam: lastPage => lastPage.next,
    placeholderData: previousData => previousData,
  });
};
