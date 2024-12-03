import React, { Suspense } from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Metrika } from '@/components/metrika';
import dynamic from 'next/dynamic';
import { inter } from './ui/fonts';
import './globals.css';

// Динамический импорт компонента ContactUs
const ContactUs = dynamic(() => import('@/components/ContactUs/ContactUs'));

// Метаданные для SEO и Open Graph
export const metadata: Metadata = {
  metadataBase: new URL(process.env.URL || 'https://viva-hmg.ru'),
  title:
    'Подшипники скольжения HMG в Москве | Самосмазывающиеся и металлополимерные',
  description:
    'Официальный поставщик подшипников скольжения HMG в России. Широкий ассортимент: самосмазывающиеся втулки, кольца, лента, шайбы. Быстрая доставка по России. Техническая поддержка и профессиональные консультации.',
  keywords:
    'подшипники скольжения, втулки, кольца, лента, шайбы, металлополимерные подшипники, металлофторопластовые подшипники, самосмазывающиеся подшипники',
  openGraph: {
    title: 'Самосмазывающиеся подшипники HMG - купить в Москве с доставкой',
    description:
      'Поставка высококачественных самосмазывающихся и металлополимерных подшипников скольжения HMG. Официальный представитель, гарантия качества, техническая поддержка. Доставка по всей России. Индивидуальные решения для вашего бизнеса.',
    url: process.env.URL,
    siteName:
      'Подшипники скольжения HMG в Москве | Самосмазывающиеся и металлополимерные',
    images: [
      {
        url: '/image/metalicheskie_samosmazivayushiesya/pro03.jpg',
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
  robots: 'index, follow',
  alternates: {
    canonical: process.env.URL,
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
        <Suspense fallback={<div>Загрузка...</div>}>
          <Metrika />
        </Suspense>
      </body>
    </html>
  );
}
