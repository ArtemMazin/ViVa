import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  main,
  title,
  text,
  image,
  catalog,
  catalogImage,
  catalogItem,
  catalogImages,
  catalogNameContainer,
  catalogName,
  li,
  imageContainer,
} from './products.module.css';

const Products = ({ titleProducts, descriptionProducts, productsImage, productList }) => {
  return (
    <main className={`container ${main}`}>
      <div className={imageContainer}>
        <Image
          src={productsImage}
          fill
          sizes='(max-width: 1269px) 50vw, 22.5vw'
          alt={titleProducts}
          className={image}></Image>
      </div>
      <div>
        <h1 className={title}>{titleProducts}</h1>
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
                    sizes='(max-width: 1269px) 50vw, 22.5vw'
                    alt={name}
                    className={catalogImage}
                  />
                  <div className={catalogNameContainer}>
                    <h2 className={catalogName}>{name}</h2>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Products;
