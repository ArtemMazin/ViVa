import React from 'react';
import Header from '@/components/Header/Header';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import { Suspense } from 'react';
import { Metrika } from '@/components/metrika';
import ContactUs from '@/components/ContactUs/ContactUs';
import { inter } from './ui/fonts';

export const metadata = {
  title: 'Подшипники HMG',
  description: 'Подшипники скольжения HMG',
  keywords:
    'подшипники скольжения, втулки скольжения, самосмазывающие подшипники',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <ContactUs />
        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </html>
  );
}
