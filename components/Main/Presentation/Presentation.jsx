import React from 'react';
import { presentation } from './presentation.module.css';
import { presentationImage } from '@/utils/constants';
import Htag from '@/components/Htag/Htag';
import CardList from '@/components/CardList/CardList';

const Presentation = () => {
  return (
    <section className={`${presentation} container`}>
      <Htag
        tag='h1'
        border='down'>
        НАША ПРОДУКЦИЯ
      </Htag>
      <Htag tag='h2'>HMG/ВТУЛКИ/ШАЙБЫ/ЛЕНТА</Htag>
      <CardList array={presentationImage} />
    </section>
  );
};

export default Presentation;
