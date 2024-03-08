import React from 'react';
import { BannerBlock } from './BannerBlock';
import { ReviewBlock } from './ReviewBlock';
import { CardBlock } from './CardBlock';
import { FormConsult } from './FormConsult';
import { FormCatalog } from './FormCatalog';
import { Section } from '../../ui/Section';
import { getCMSContent, IContent } from '@/api/cms';

export async function CMS({ path }: { path: string }) {
  const content = await getCMSContent(path);
  const blocks = content.results;
  return (
    <>
      {blocks.map((block: IContent) => {
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
        if (block.type === 'CATALOG_FORM') return <FormCatalog key={block.id} />;
      })}
    </>
  );
}
