import { API_URL } from '@/features/constants';
import { ALL_GROUPS } from '@/features/constants/urls';
import { ImageObject, ImageData, PaginatedAPIResponse } from '@/api/types';
import { IProduct } from '@/components/pages/ProductDetail/ModificationList/Modification';

const PATH = '/catalog/models';

export interface IModification {
  id?: number;
  title: string;
  slug: string;
  products: IProduct[];
}

interface IGroup {
  id: number;
  title: string;
  slug: string;
}

interface ICategory {
  id: number;
  title: string;
  slug: string;
  group: IGroup;
}

export interface IModel {
  id: number;
  slug: string;
  title: string;
  min_price: number;
  min_discounted_price: number;
  description: string;
  category: ICategory;
  banners: IBanner[];
  modifications: IModification[];
  gallery: ImageObject[];
}

export interface IModelFromList {
  id: number;
  title: string;
  slug: string;
  min_price: number;
  min_discounted_price: number;
  color_temperatures: string[];
  images: {
    color: string;
    file: string;
    height: number;
    id: number;
    ordering: number;
    width: number;
  }[];
}

export interface IBanner {
  id?: number;
  title: string;
  description?: string;
  image: ImageData;
  imageRight?: boolean;
}

export type FilterType =
  | 'beam'
  | 'power'
  | 'beam_angle'
  | 'color_temperature'
  | 'protection'
  | 'dimming';

export interface IFilter {
  name: string;
  ids?: number[];
}

export async function getModels(
  pageParam?: string,
  groupSlug?: string,
  categorySlugs?: string[],
  filters?: {
    [key in FilterType as string]: IFilter;
  },
): Promise<PaginatedAPIResponse<IModelFromList>> {
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

export async function getModel(slug: string): Promise<IModel> {
  const url = `${API_URL}${PATH}/${slug}/`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
