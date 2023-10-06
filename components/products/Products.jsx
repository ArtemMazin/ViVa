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
                    sizes='(max-width: 520px) 40vw, (max-width: 768px) 50vw, (max-width: 1280px) 20vw, 15vw'
                    priority={true}
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
    </div>
  );
};

export default Products;
