import {BannerBlock} from '@/components/Section/BannerBlock';
import {CardBlock} from '@/components/Section/CardBlock';
import { FormConsult } from '@/components/Section/FormConsult';
import { FormCatalog } from '@/components/Section/FormCatalog';
import { ReviewBlock } from '@/components/Section/ReviewBlock';
import {ContentBlock} from "@/api/types";


export const revalidate = 0;

async function getContent() {
  const res = await fetch('http://localhost:8000/api/content/content_blocks/?page__slug=root');
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const content = await getContent()
  const blocks = content.results
  return (
    <main className={'main-page main-flex'}>
      {
        blocks.map((block: ContentBlock) => {
          if (block.banners.length > 0) return <BannerBlock key={block.id} {...block}/>
          if (block.cards.length > 0) {
            if (block.cards[0].type === 'feedback') {
            return <ReviewBlock key={block.id} {...block}/>
          }
            return <CardBlock key={block.id} {...block}/>
          }
          if (block.form === 'CONSULT') return <FormConsult />
          if (block.form === 'CATALOG') return  <FormCatalog/>
        })
      }
    </main>
  );
}
