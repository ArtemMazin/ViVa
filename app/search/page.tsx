import React, { Suspense } from 'react';
import FilteredCards from './FilteredCards/FilteredCards';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './Search.module.css';
import Htag from '@/components/Htag/Htag';

const SearchPage = () => {
  return (
    <main className={`container ${styles.searchPage}`}>
      <BreadCrumbs
        currentLink="Поиск подшипников"
        links={[{ href: process.env.URL, name: 'Главная' }]}
      />

      <Htag tag="h1" border="left" className={styles.main_title}>
        Поиск подшипников
      </Htag>

      <Suspense fallback={<div className={styles.loading}>Загрузка...</div>}>
        <FilteredCards />
      </Suspense>
    </main>
  );
};

export default SearchPage;
