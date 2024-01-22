import { PaginatedAPIResponse } from '@/api/types';

export interface ICategory {
  id?: number | string;
  title: string;
  slug: string;
  groupSlug: string;
  groupSlugArray: string[];
  slugArray: string[];
}

export interface IGroup {
  id: number;
  slug: string;
  title: string;
  categories: ICategory[];
}

export const collapseGroupSlug = (array: ICategory[]) => {
  // Убираем дублирующие объекты с одинаковым title, их groupSlug объединяем в массив groupSlugArray
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
  const res = await fetch('http://127.0.0.1:8000/api/catalog/groups/?active=true');
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
