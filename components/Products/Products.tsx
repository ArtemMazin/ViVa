import Image from 'next/image';
import React from 'react';
import styles from './Products.module.css';
import Htag from '../Htag/Htag';
import Ptag from '../Ptag/Ptag';
import CardList from '../CardList/CardList';
import { TCard } from '@/utils/types';

interface ProductsProps {
  titleProducts: string;
  descriptionProducts: string;
  productsImage: string;
  materialsList: TCard[];
}

const Products: React.FC<ProductsProps> = ({
  titleProducts,
  descriptionProducts,
  productsImage,
  materialsList,
}) => {
  return (
    <div className={`container ${styles.main}`}>
      <div className={styles.imageContainer}>
        <Image
          src={productsImage}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 100vw"
          priority={true}
          alt={titleProducts}
          className={styles.image}
        />
      </div>
      <div className={`${styles.content} container`}>
        <Htag tag="h1" border="left">
          {titleProducts}
        </Htag>
        <Ptag margin="bottom">{descriptionProducts}</Ptag>
      </div>
      <div className={styles.cardListWrapper}>
        <CardList array={materialsList} />
      </div>
    </div>
  );
};

export default Products;
