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
} from './products01.module.css';
import { productList01 } from '@/utils/constants';
import Link from 'next/link';
import Image from 'next/image';

const products01 = () => {
  return (
    <main className={`container ${main}`}>
      <div className={image}></div>

      <div>
        <h1 className={title}>Металлополимерные самосмазывающиеся подшипники</h1>
        <p className={text}>
          Двухслойный металлополимерный самосмазывающийся подшипник состоит из металлической основы с компаундом из ПТФЭ
          на поверхности. Он легче и имеет лучшие механические и нагрузочные характеристики. Более толстый слой ПТФЭ
          может улучшить гибкость установки, а также соответствовать более широкому расчетному диапазону допусков. Кроме
          того, улучшены износостойкость и шумопоглощение, а также может быть установлен более широкий диапазон
          изменения крутящего момента.
        </p>
      </div>
      <div className={catalog}>
        <ul className={catalogImages}>
          {productList01.map(({ name, img, href }) => {
            return (
              <li
                key={name}
                className={catalogItem}
                as={'image'}>
                <Link
                  // className={link}
                  href={href}>
                  <Image
                    src={img}
                    fill
                    sizes='(max-width: 1269px) 50vw, 22.5vw'
                    alt={name}
                    className={catalogImage}
                    priority={true}
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

export default products01;
