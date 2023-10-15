import Image from 'next/image';
import React from 'react';
import styles from './Products.module.css';
import Htag from '../Htag/Htag';
import Ptag from '../Ptag/Ptag';
import CardList from '../CardList/CardList';

const Products = ({ titleProducts, descriptionProducts, productsImage, productList }) => {
  return (
    <div className={styles.main}>
      <div className={styles.imageContainer}>
        <Image
          src={productsImage}
          fill
          sizes='(max-width: 1280px) 60vw, 100vw'
          priority={true}
          alt={titleProducts}
          className={styles.image}
        />
      </div>
      <div className='container'>
        <Htag
          tag='h1'
          border='left'>
          {titleProducts}
        </Htag>
        <Ptag tag='p'>{descriptionProducts}</Ptag>
      </div>
      <CardList array={productList} />
    </div>
  );
};

export default Products;
