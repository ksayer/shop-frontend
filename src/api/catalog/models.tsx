import { API_URL } from '@/features/constants';
import { ALL_GROUPS } from '@/features/constants/urls';
import { FilterType, IFilter } from '@/features/store/catalog/pathFilters';
import { IModification } from '@/components/pages/ProductDetail/ModificationList';
import { IBanner } from '@/components/pages/ProductDetail/Banners/Feature';
import { ImageObject, ImageType } from '@/api/types';

const PATH = '/catalog/models';

export async function getModels(
  pageParam?: string,
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
  const url =
    pageParam || `${API_URL}${PATH}/?limit=24&category__group__active=true&${urlParams.join('&')}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export interface IModel {
  slug: string;
  title: string;
  min_price: number;
  min_discounted_price: number;
  description: string;
  banners: IBanner[];
  modifications: IModification[];
  gallery: ImageObject[];
}

export async function getModel(slug: string): Promise<IModel> {
  const url = `${API_URL}${PATH}/${slug}/`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
