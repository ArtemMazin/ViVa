import Image from 'next/image';
import React from 'react';
import { flex, table, cell, image, section, scroll } from './hmgFR.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

const hmgFR = () => {
  return (
    <main className={`${section} container`}>
      <BreadCrumbs
        currentLink='Подшипники HMG-FR'
        links={[
          { href: 'https://vi-va.vercel.app/', name: 'Главнaя' },
          { href: 'https://vi-va.vercel.app/goods', name: 'Товары' },
          { href: 'https://vi-va.vercel.app/goods/products01', name: 'Металлополимерные самосмазывающиеся подшипники' },
        ]}
      />
      <section className={flex}>
        <Image
          src='/image/pages/hmgFR/hmgFR.jpg'
          width={600}
          height={450}
          sizes='(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw'
          priority={true}
          alt='Подшипники HMG-FR'
          className={image}
        />
        <div>
          <Htag tag='h1'>HMG-FR</Htag>
          <Htag
            tag='h2'
            border='left'>
            Описание
          </Htag>
          <Ptag tag='p'>
            Металлическая тканевая основа обеспечивает износостойкость и самосмазывающиеся свойства, а ее легкий вес
            подходит для ручной и автоматической сборки. Окончательную точность установки и крутящий момент можно
            отрегулировать путем калибровки после установки втулки. Доступны два материала: HMG-FR — тканевая основа из
            бронзы и HMG-FRS — тканевая основа из нержавеющей стали. Последний имеет лучшую устойчивость к коррозии.
          </Ptag>
        </div>
      </section>
      <section className={flex}>
        <div>
          <Htag
            tag='h2'
            border='left'>
            Структура
          </Htag>
          <Ptag tag='p'>1. Лента из ПТФЭ обеспечивает функцию самосмазывания.</Ptag>
          <Ptag tag='p'>2. Металлическая ткань обеспечивает механическую прочность и теплопроводность.</Ptag>
        </div>

        <Image
          src='/image/pages/hmgFR/hmgFRstructure.png'
          width={300}
          height={240}
          sizes='(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw'
          priority={true}
          alt='Структура материала HMG-FR'
        />
      </section>
      <section>
        <Htag
          tag='h2'
          border='left'>
          Технические данные
        </Htag>
        <div className={scroll}>
          <table className={table}>
            <tbody>
              <tr></tr>
            </tbody>
            <tbody>
              <tr>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  Стандартная толщина стенки, мм
                </td>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  HMG-FR / Сетка из бронзы
                </td>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  HMG-FRS / Сетка из нержавеющей стали
                </td>
                <td
                  rowSpan='4'
                  style={{ width: '4%' }}
                  className={cell}>
                  &nbsp;
                </td>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  Максимальная нагрузка
                </td>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  Комнатная температура
                </td>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  80 Н/мм<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td className={cell}>0.48</td>
                <td className={cell}>*</td>
                <td className={cell}>*</td>
                <td className={cell}>Максимальная скорость</td>
                <td className={cell}>Сухой ход</td>
                <td className={cell}>1 м/с</td>
              </tr>
              <tr>
                <td className={cell}>0.78</td>
                <td className={cell}>*</td>
                <td className={cell}>
                  <span>*</span>
                </td>
                <td
                  colSpan='2'
                  className={cell}>
                  Диапазон рабочих температур
                </td>
                <td className={cell}>-195℃～+260℃</td>
              </tr>
              <tr>
                <td className={cell}>0.98</td>
                <td className={cell}>*</td>
                <td className={cell}>&nbsp;</td>
                <td
                  colSpan='2'
                  className={cell}>
                  Коэффициент трения
                </td>
                <td className={cell}>0.03~0.20</td>
              </tr>
            </tbody>
            <tbody></tbody>
          </table>
        </div>
      </section>
      <section>
        <Htag
          tag='h2'
          border='left'>
          Типичные области применения
        </Htag>
        <Ptag tag='p'>
          Материал подходит для изготовления дверных петель, компонентов клапанов, машин общего назначения и
          текстильного оборудования. Это легкий по весу материал.
        </Ptag>
      </section>
    </main>
  );
};

export default hmgFR;
