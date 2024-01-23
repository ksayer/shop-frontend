'use client';

import React from 'react';
import PathFilterProvider from '@/features/providers/PathFilterProvider';
import QueryClientProviderCustom from '@/features/providers/QueryClientProviderCustom';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProviderCustom>
      <PathFilterProvider>{children}</PathFilterProvider>
    </QueryClientProviderCustom>
  );
}
