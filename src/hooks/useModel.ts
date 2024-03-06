import { getModel } from '@/api/catalog/models';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY_MODEL, QUERY_KEY_MODELS } from '@/features/constants/queryKeys';

export const useModel = ({ slug }: { slug: string }) => {
  return useQuery({
    queryKey: [QUERY_KEY_MODEL, slug],
    queryFn: async () => getModel(slug),
  });
};
