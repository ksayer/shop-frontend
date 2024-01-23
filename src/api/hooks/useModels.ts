import { getModels } from '@/api/catalog/models';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY_MODELS } from '@/features/constants';

export const useModels = ({
  groupSlug,
  categorySlug,
}: {
  groupSlug: string;
  categorySlug: string;
}) => {
  return useQuery({
    queryKey: [QUERY_KEY_MODELS, groupSlug, categorySlug],
    queryFn: () => getModels(groupSlug, categorySlug),
  });
};
