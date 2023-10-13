import Header from '@/components/header/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer/Footer';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Подшипники HMG',
  description: 'Подшипники скольжения HMG',
  keywords: 'подшипники скольжения, втулки скольжения, самосмазывающие подшипники',
};

function SearchBarFallback() {
  return <></>;
}

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <Suspense fallback={<SearchBarFallback />}>
          <Header />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
