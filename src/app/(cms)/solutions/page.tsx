import { CMS } from '@/components/views/CMS';
import { API_URL } from '@/features/constants';

export default async function Solutions() {
  return (
    <main className={'main-flex'}>
      <CMS path={`${API_URL}/content/content_blocks/?page__slug=solutions`} />
    </main>
  );
}
