import React from 'react';
import '@/styles/main.css';
import { Header } from '@/components/pages/Header';
import { raleway, montserrat } from '@/app/fonts';
import { Footer } from '@/components/pages/Footer';
import ReactQueryProvider from '@/api/queryClient';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${raleway.variable}`}
        style={{ fontFamily: 'var(--montserrat)' }}
      >
        <ReactQueryProvider>
          <Header />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
