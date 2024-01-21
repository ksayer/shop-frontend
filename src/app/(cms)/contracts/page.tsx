import { CMS } from '@/components/pages/CMS';
import React from 'react';

export default async function Contracts() {
  return (
    <main className={'main-flex'}>
      <CMS path={'http://localhost:8000/api/content/content_blocks/?page__slug=contracts'} />
    </main>
  );
}
