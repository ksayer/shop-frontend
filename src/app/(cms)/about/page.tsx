import { CMS } from '@/components/views/CMS';
import React from 'react';
import { API_URL } from '@/features/constants';

export default function Contacts() {
  return (
    <main className={'main-flex'}>
      <CMS path={`${API_URL}/content/content_blocks/?page__slug=about`} />
    </main>
  );
}
