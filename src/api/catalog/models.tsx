import { API_URL } from '@/features/constants';
import { ALL_GROUPS } from '@/components/pages/Catalog';

export async function getModels(
  groupSlug?: string,
  categorySlugs?: string[],
  filterIds?: (number | string)[],
) {
  const filters = [];
  if (groupSlug && groupSlug !== ALL_GROUPS) filters.push(`category__group__slug__in=${groupSlug}`);
  if (categorySlugs) filters.push(`category__slug__in=${categorySlugs}`);
  if (filterIds && filterIds.length > 0)
    filters.push(`products__properties__group_id__in=${filterIds}`);
  const res = await fetch(`${API_URL}/catalog/models/?${filters.join('&')}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
