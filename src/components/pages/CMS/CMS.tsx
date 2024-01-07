import React from 'react';
import { ContentBlock } from '@/api/types';
import { Hero } from '@/components/Section/Hero';
import { BannerBlock } from '@/components/Section/BannerBlock';
import { ReviewBlock } from '@/components/Section/ReviewBlock';
import { CardBlock } from '@/components/Section/CardBlock';
import { FormConsult } from '@/components/Section/FormConsult';
import { FormCatalog } from '@/components/Section/FormCatalog';

export function CMS({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block: ContentBlock) => {
        if (block.banners.length > 0) {
          if (block.type === 'WIDE_BANNERS') {
            return <Hero key={block.id} imageUrl={block.banners[0].image.absolute_url} />;
          }
          return <BannerBlock key={block.id} {...block} />;
        }
        if (block.cards.length > 0) {
          if (block.cards[0].type === 'feedback') {
            return <ReviewBlock key={block.id} {...block} />;
          }
          return <CardBlock key={block.id} {...block} />;
        }
        if (block.type === 'CONSULT_FORM') return <FormConsult />;
        if (block.type === 'CATALOG_FORM') return <FormCatalog />;
      })}
    </>
  );
}
