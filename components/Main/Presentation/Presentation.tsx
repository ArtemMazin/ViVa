import React from 'react';
import { products } from '@/utils/products';
import Htag from '@/components/Htag/Htag';
import CardList from '@/components/CardList/CardList';
import styles from './Presentation.module.css';

const Presentation = () => {
  return (
    <section className={`${styles.presentation} container`}>
      <Htag tag="h2" border="down" className={styles.main_title}>
        НАША ПРОДУКЦИЯ
      </Htag>
      <Htag tag="h3">HMG/ВТУЛКИ/ШАЙБЫ/ЛЕНТА</Htag>
      <CardList array={products} />
    </section>
  );
};

export default Presentation;
