import React from 'react';
import { ContentBlock } from '@/api/types';
import { BannerBlock } from '../../CMS/BannerBlock';
import { ReviewBlock } from '../../CMS/ReviewBlock';
import { CardBlock } from '../../CMS/CardBlock';
import { FormConsult } from '../../CMS/FormConsult';
import { FormCatalog } from '../../CMS/FormCatalog';
import { Section } from '@/components/CMS/Section';

export function CMS({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block: ContentBlock) => {
        if (block.banners.length > 0) {
          if (block.type === 'WIDE_BANNERS') {
            return (
              <section key={block.id}>
                <BannerBlock {...block} />
              </section>
            );
          }
          return (
            <Section key={block.id}>
              <BannerBlock {...block} />
            </Section>
          );
        }
        if (block.cards.length > 0) {
          if (block.cards[0].type === 'feedback') {
            return <ReviewBlock key={block.id} {...block} />;
          }
          return <CardBlock key={block.id} {...block} />;
        }
        if (block.type === 'CONSULT_FORM') return <FormConsult key={block.id} />;
        if (block.type === 'CATALOG_FORM') return <FormCatalog key={block.id}/>;
      })}
    </>
  );
}
