import { CMS } from '@/components/pages/CMS';

export const revalidate = 0;
async function getContent() {
  const res = await fetch('http://localhost:8000/api/content/content_blocks/?page__slug=contracts');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Contracts() {
  const content = await getContent();
  const blocks = content.results;
  return (
    <main className={'main-flex'}>
      <CMS blocks={blocks} />
    </main>
  );
}
