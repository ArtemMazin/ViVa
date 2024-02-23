import React from 'react';
import FilteredCards from './FilteredCards/FilteredCards';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './Search.module.css';
import Htag from '@/components/Htag/Htag';

const page = () => {
  return (
    <main>
      <div className="container">
        <BreadCrumbs
          currentLink="Поиск подшипников"
          links={[{ href: process.env.URL, name: 'Главнaя' }]}
        />

        <Htag tag="h1" border="left" className={styles.main_title}>
          Поиск подшипников
        </Htag>
      </div>
      <FilteredCards />
    </main>
  );
};

export default page;
