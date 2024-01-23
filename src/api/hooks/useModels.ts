import { getModels } from '@/api/catalog/models';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY_MODELS } from '@/features/constants';

export const useModels = ({
  groupSlug,
  categorySlug,
  filterIds,
}: {
  groupSlug: string;
  categorySlug: string;
  filterIds: (number | string)[];
}) => {
  return useQuery({
    queryKey: [QUERY_KEY_MODELS, groupSlug, categorySlug, filterIds],
    queryFn: () => getModels(groupSlug, categorySlug, filterIds),
  });
};
