import { ImageData, PaginatedAPIResponse } from '@/api/types';

export type CardType = 'feedback' | 'publication' | 'project' | 'model';

export interface ICard {
  id: string;
  slug: string;
  arrow: boolean;
  type: CardType;
  title: string;
  description: string;
  image: ImageData;
}

interface IButton {
  id: number;
  title: string;
  link: string;
}

export interface ITab {
  id: number;
  title: string;
  description: string;
  image: ImageData;
}

export interface IBanner {
  id: number;
  pre_title: string;
  title: string;
  description: string;
  image_position: 'left' | 'right' | 'top' | 'bottom';
  buttons: IButton[];
  tabs: ITab[];
  mobile_image: boolean;
  phone: string;
  address: string;
  email: string;
  type: 'SIMPLE' | 'HERO' | 'TAB' | 'CONSULTANT';
  image: ImageData;
}

export interface IContent {
  id: number;
  title: number;
  ordering: number;
  link: string;
  link_text: string;
  cards: ICard[];
  banners: IBanner[];
  type: 'CONSULT_FORM' | 'CATALOG_FORM' | 'SIMPLE_BANNERS' | 'WIDE_BANNERS';
}

export async function getCMSContent(path: string): Promise<PaginatedAPIResponse<IContent>> {
  const res = await fetch(path, { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
