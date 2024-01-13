import { CMS } from '@/components/pages/CMS';
import React from 'react';

export default function Home() {
  return (
    <main className={'main-page main-flex'}>
      <CMS path={'http://localhost:8000/api/content/content_blocks/?page__slug=root'} />
    </main>
  );
}
