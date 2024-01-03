import React from 'react';
import '@/styles/main.css';
import { Header } from '@/components/pages/Header';
import { raleway, montserrat } from '@/app/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${raleway.variable}`}
        style={{ fontFamily: 'var(--montserrat)' }}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
