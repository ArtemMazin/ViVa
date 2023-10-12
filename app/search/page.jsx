import React from 'react';
import FilteredCards from './FilteredCards/FilteredCards';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './Search.module.css';
import Htag from '@/components/Htag/Htag';

const page = () => {
  return (
    <main className={`container ${styles.search}`}>
      <BreadCrumbs
        currentLink='Поиск подшипников'
        links={[{ href: 'https://vi-va.vercel.app/', name: 'Главнaя' }]}
      />
      <Htag
        tag='h1'
        border='left'>
        Поиск подшипников
      </Htag>
      <FilteredCards />
    </main>
  );
};

export default page;
