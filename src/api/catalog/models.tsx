import { API_URL } from '@/features/constants';
import { ALL_GROUPS } from '@/features/constants/urls';
import { FilterType, IFilter } from '@/features/store/catalog/pathFilters';

export async function getModels(
  groupSlug?: string,
  categorySlugs?: string[],
  filters?: {
    [key in FilterType as string]: IFilter;
  },
) {
  const urlParams = [];
  if (groupSlug && groupSlug !== ALL_GROUPS)
    urlParams.push(`category__group__slug__in=${groupSlug}`);
  if (categorySlugs) urlParams.push(`category__slug__in=${categorySlugs}`);
  if (!!filters) {
    for (const key of Object.keys(filters)) {
      urlParams.push(`modifications__products__property__${key}__id__in=${filters[key].ids}`);
    }
  }
  console.log(urlParams);
  const res = await fetch(
    `${API_URL}/catalog/models/?category__group__active=true&${urlParams.join('&')}`,
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
