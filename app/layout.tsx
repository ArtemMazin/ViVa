import React from 'react';
import Header from '@/components/Header/Header';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import { Suspense } from 'react';
import { Metrika } from '@/components/metrika';
import ContactUs from '@/components/ContactUs/ContactUs';
import { inter } from './ui/fonts';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title:
    'Подшипники скольжения HMG в Москве | Самосмазывающиеся и металлополимерные',
  description:
    'Подшипники скольжения HMG - высококачественные самосмазывающиеся и металлополимерные подшипники от ведущего мирового производителя. Широкий ассортимент подшипников для различных областей применения: промышленное оборудование, строительная техника, автомобильная промышленность, сельхозтехника и многое другое. Долговечные, износостойкие, коррозионностойкие подшипники с низким коэффициентом трения. Купить подшипники HMG в Москве по выгодным ценам.',
  keywords:
    'подшипники скольжения, втулки, кольца, лента, шайбы,металлополимерные подшипники, металлофторопластовые подшипники, самосмазывающиеся подшипники',
  openGraph: {
    title: 'Самосмазывающиеся подшипники HMG - купить в Москве с доставкой',
    description:
      'Купить высококачественные самосмазывающиеся и металлополимерные подшипники скольжения HMG от ведущего мирового производителя. Широкий ассортимент долговечных, износостойких, коррозионностойких подшипников с низким коэффициентом трения для промышленного оборудования, строительной техники, автомобильной промышленности, сельхозтехники и других областей применения. Выгодные цены в Москве.',
    url: process.env.URL,
    siteName:
      'Подшипники скольжения HMG в Москве | Самосмазывающиеся и металлополимерные',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya_podshipniki/pro03.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ru-RU',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    yandex: 'e7d67b374d5f946f',
  },
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
