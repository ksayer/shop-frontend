import React from 'react';
import '@/styles/main.css';
import { Header } from '@/components/pages/Header';
import { lato, montserrat } from '@/app/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lato.variable}`}
        style={{ fontFamily: 'var(--montserrat)' }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
