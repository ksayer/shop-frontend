import { getModels } from '@/api/catalog/models';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY_MODELS } from '@/features/constants/queryKeys';

export const useModels = ({
  groupSlug,
  categorySlugs,
  filterIds,
}: {
  groupSlug: string;
  categorySlugs: string[];
  filterIds: (number | string)[];
}) => {
  return useQuery({
    queryKey: [QUERY_KEY_MODELS, groupSlug, categorySlugs, filterIds],
    queryFn: () => getModels(groupSlug, categorySlugs, filterIds),
  });
};
