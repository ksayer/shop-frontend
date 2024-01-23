import { CMS } from '@/components/pages/CMS';
import React from 'react';
import { API_URL } from '@/features/constants';

export default async function Contracts() {
  return (
    <main className={'main-flex'}>
      <CMS path={`${API_URL}/content/content_blocks/?page__slug=contracts`} />
    </main>
  );
}
