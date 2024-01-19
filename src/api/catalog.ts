import { IItem } from '@/components/pages/Catalog/LargeNavigator/Item';
import { getUniqueObjectsArray } from '@/utils/arrays';

export interface ICatalogData {
  results: IItem[];
}

export async function getGroups(): Promise<ICatalogData> {
  const res = await fetch('http://127.0.0.1:8000/api/catalog/groups/?active=true');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return await res.json();
}

export async function getCategories() {
  const { results } = await getGroups();
  const split_categories = results.flatMap((item: IItem) => {
    return item.categories;
  });
  return getUniqueObjectsArray(split_categories, 'title');
}
