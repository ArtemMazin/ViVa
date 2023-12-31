import Header from '@/components/Header/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer/Footer';
import { Suspense } from 'react';
import { Metrika } from '@/components/metrika';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Подшипники HMG',
  description: 'Подшипники скольжения HMG',
  keywords:
    'подшипники скольжения, втулки скольжения, самосмазывающие подшипники',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </html>
  );
}
