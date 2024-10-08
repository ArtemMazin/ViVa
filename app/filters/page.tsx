import React, { Suspense } from 'react';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Htag from '@/components/Htag/Htag';
import FilteredProducts from './FilteredProducts/FilteredProducts';
import styles from './filters.module.css';

const ProductsPage = () => {
  return (
    <main className={`container ${styles.filters}`}>
      <BreadCrumbs
        currentLink="Подбор подшипников"
        links={[{ href: process.env.URL || '/', name: 'Главная' }]}
      />
      <Htag tag="h1" border="left" className={styles.main_title}>
        Подбор подшипников
      </Htag>
      <Suspense fallback={<div>Загрузка...</div>}>
        <FilteredProducts />
      </Suspense>
    </main>
  );
};

export default ProductsPage;
