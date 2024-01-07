import { CMS } from '@/components/pages/CMS';

export const revalidate = 0;

async function getContent() {
  const res = await fetch('http://localhost:8000/api/content/content_blocks/?page__slug=root');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const content = await getContent();
  const blocks = content.results;
  return (
    <main className={'main-page main-flex'}>
      <CMS blocks={blocks} />
    </main>
  );
}
