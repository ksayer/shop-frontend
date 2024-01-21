'use client';

import React from 'react';
import PathFilterProvider from '@/providers/PathFilterProvider';
import QueryClientProviderCustom from '@/providers/QueryClientProviderCustom';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProviderCustom>
      <PathFilterProvider>{children}</PathFilterProvider>
    </QueryClientProviderCustom>
  );
}
