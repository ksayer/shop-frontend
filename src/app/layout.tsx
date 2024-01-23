import React from 'react';
import '@/styles/main.css';
import { Header } from '@/components/pages/Header';
import { raleway, montserrat } from '@/app/fonts';
import { Footer } from '@/components/pages/Footer';
import Providers from '@/features/providers/providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${raleway.variable}`}
        style={{ fontFamily: 'var(--montserrat)' }}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
