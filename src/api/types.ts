import { ICard } from '@/components/CMS/CardBlock/Card';
import { IBanner } from '@/components/CMS/BannerBlock/Banner';

export interface PaginatedAPIResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<T>;
}

export type ImageType = {
  id: string | number;
  absolute_url: string;
  width: number;
  height: number;
  optimized: boolean;
};

export type ContentBlock = {
  id: string | number;
  title: string;
  link_text: string;
  link: string;
  type: 'CONSULT_FORM' | 'CATALOG_FORM' | 'SIMPLE_BANNERS' | 'WIDE_BANNERS';
  cards: ICard[];
  banners: IBanner[];
};
