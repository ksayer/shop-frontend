import { CMS } from '@/components/pages/CMS';
import { API_URL } from '@/features/constants';

export default async function Contacts() {
  return (
    <main className={'main-flex'}>
      <CMS path={`${API_URL}/content/content_blocks/?page__slug=contacts`} />
    </main>
  );
}
