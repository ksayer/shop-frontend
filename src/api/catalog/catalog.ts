import { PaginatedAPIResponse } from '@/api/types';
import { API_URL } from '@/features/constants';

export interface ICategory {
  id?: number | string;
  title: string;
  slug: string;
  groupSlug: string;
  groupSlugArray: string[];
  slugArray: string[];
}

export interface IFilter {
  id: number | string;
  slug: string;
  title: string;
  property: string;
  properties: { id: number | string; title: string; groupSlugArray: string[] }[];
}

export interface IGroup {
  id: number;
  slug: string;
  title: string;
  categories: ICategory[];
  filters: IFilter[];
}

export const collapseGroupSlug = (array: ICategory[]) => {
  // remove duplicated title property in object
  // slug collapse into slugArray -
  // groupSlug collapse into groupSlugArray
  const processedData: Record<string, ICategory> = {};
  array.forEach(item => {
    if (!processedData[item.title]) {
      processedData[item.title] = {
        ...item,
        groupSlugArray: [item.groupSlug],
        slugArray: [item.slug],
      };
    } else {
      processedData[item.title].groupSlugArray.push(item.groupSlug);
      processedData[item.title].slugArray.push(item.slug);
    }
  });
  return Object.values(processedData);
};

export async function getGroups(): Promise<PaginatedAPIResponse<IGroup>> {
  const res = await fetch(`${API_URL}/catalog/groups/?active=true`, { next: { revalidate: 0 } });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return await res.json();
}

export async function getCategories(): Promise<ICategory[]> {
  const { results } = await getGroups();
  const split_categories = results.flatMap((item: IGroup) => {
    return [
      ...item.categories.map(cat => ({
        ...cat,
        groupSlug: item.slug,
        groupSlugArray: [],
        slugArray: [],
      })),
    ];
  });
  return collapseGroupSlug(split_categories);
}
