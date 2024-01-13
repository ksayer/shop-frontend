import { CMS } from '@/components/pages/CMS';

export default async function Solutions() {
  return (
    <main className={'main-flex'}>
      <CMS path={'http://localhost:8000/api/content/content_blocks/?page__slug=solutions'} />
    </main>
  );
}
