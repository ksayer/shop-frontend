import { API_URL } from '@/features/constants';

export async function getModels(
  groupSlug?: string,
  categorySlug?: string,
  filterIds?: (number | string)[],
) {
  const filters = [];
  if (groupSlug) filters.push(`group=${groupSlug}`);
  if (categorySlug) filters.push(`category=${categorySlug}`);
  if (filterIds && filterIds.length > 0) filters.push(`filters=${filterIds.join(',')}`);
  const res = await fetch(`${API_URL}/catalog/models/?${filters.join('&')}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
