import {ICard} from "@/components/Section/CardBlock/Card";
import {IBanner} from "@/components/Section/BannerBlock/Banner";

export type ImageType = {
  id: string | number;
  absolute_url: string;
  width: number;
  height: number;
  optimized: boolean;
}

export type ContentBlock = {
  id: string | number;
  title: string;
  link_text: string;
  link: string;
  form: 'CONSULT' | 'CATALOG' | null,
  cards: ICard[];
  banners: IBanner[]
}
