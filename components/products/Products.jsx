import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  main,
  text,
  image,
  catalog,
  catalogImage,
  catalogItem,
  catalogImages,
  catalogNameContainer,
  li,
  imageContainer,
} from './products.module.css';
import Htag from '../Htag/Htag';

const Products = ({ titleProducts, descriptionProducts, productsImage, productList }) => {
  return (
    <div className={main}>
      <div className={imageContainer}>
        <Image
          src={productsImage}
          fill
          sizes='(max-width: 1280px) 60vw, 100vw'
          priority={true}
          alt={titleProducts}
          className={image}
        />
      </div>
      <div>
        <Htag tag='h1'>{titleProducts}</Htag>
        <p className={text}>{descriptionProducts}</p>
      </div>
      <div className={catalog}>
        <ul className={catalogImages}>
          {productList.map(({ name, img, href }) => {
            return (
              <li
                key={name}
                className={li}>
                <Link
                  className={catalogItem}
                  href={href}>
                  <Image
                    src={img}
                    fill
                    sizes='(max-width: 520px) 40vw, (max-width: 768px) 50vw, (max-width: 1280px) 20vw, 15vw'
                    priority={true}
                    alt={name}
                    className={catalogImage}
                  />
                  <div className={catalogNameContainer}>
                    <Htag tag='h3'>{name}</Htag>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Products;
