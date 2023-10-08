import Image from 'next/image';
import React from 'react';
import { flex, table, cell, image, section, scroll } from './hmg20.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

const page = () => {
  return (
    <main className={`${section} container`}>
      <BreadCrumbs
        currentLink='Подшипники HMG-20'
        links={[
          { href: 'https://vi-va.vercel.app/', name: 'Главнaя' },
          { href: 'https://vi-va.vercel.app/goods', name: 'Товары' },
          { href: 'https://vi-va.vercel.app/goods/products02', name: 'Металлополимерные подшипники, требующие смазки' },
        ]}
      />
      <section className={flex}>
        <Image
          src='/image/pages/hmg20/hmg20.jpg'
          width={600}
          height={450}
          sizes='(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw'
          priority={true}
          alt='Подшипники HMG-20'
          className={image}
        />
        <div>
          <Htag tag='h1'>HMG-20</Htag>
          <Htag
            tag='h2'
            border='left'>
            Описание
          </Htag>
          <Ptag tag='p'>
            Подходит для работы со смазкой. Перед сборкой рекомендуется смазать детали консистентной смазкой. Масляное
            отверстие может удерживать смазку с оптимизированной матрицей. Смазка во время эксплуатации помогает
            продлить срок службы подшипника. Низкие коэффициенты трения, хорошая износостойкость и надежная несущая
            способность подшипника обеспечивают подходящее применение при низкоскоростном вращении и колебательных
            движениях. HMG-20М — материал с толщиной ПОМ 0,2-0,35 мм без масляных отложений на поверхности, после сборки
            поддается механической обработке.
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
          <Ptag tag='p'>
            1. Толщина ПОМ 0,30–0,50 мм обеспечивает хорошую износостойкость. На этой опорной поверхности имеется узор
            из круглых углублений, которые при сборке подшипника следует заполнить смазкой.
          </Ptag>
          <Ptag tag='p'>
            2. Толщина спеченной бронзы 0,20-0,35 мм обеспечивает прочное механическое соединение и отличную
            теплопроводность.
          </Ptag>
          <Ptag tag='p'>3. Низкоуглеродистая сталь, обеспечивает механическую прочность и теплопроводность.</Ptag>
        </div>

        <Image
          src='/image/pages/hmg20/hmg20structure.png'
          width={300}
          height={240}
          sizes='(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw'
          priority={true}
          alt='Структура материала HMG-20'
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
              <tr>
                <td
                  rowSpan='3'
                  style={{ width: '16%' }}
                  className={cell}>
                  <span style={{ width: '33%' }}>Макс. нагрузка</span>
                </td>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  <span style={{ width: '33%' }}>Статический режим</span>
                </td>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  <span>
                    250 Н/мм<sup>2</sup>
                  </span>
                </td>
                <td
                  rowSpan='5'
                  className={cell}>
                  &nbsp;
                </td>
                <td
                  colSpan='2'
                  style={{ width: '24%' }}
                  className={cell}>
                  <span style={{ width: '33%' }}>Диапазон рабочих температур</span>
                </td>
                <td
                  style={{ width: '24%' }}
                  className={cell}>
                  <span>-40°К~+110°К</span>
                </td>
              </tr>
              <tr>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Низкоскоростной режим</span>
                </td>
                <td className={cell}>
                  <span>
                    140 Н/мм<sup>2</sup>
                  </span>
                </td>
                <td
                  rowSpan='2'
                  className={cell}>
                  <span style={{ width: '33%' }}>Макс. скорость</span>
                </td>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Сухой рехим</span>
                </td>
                <td className={cell}>
                  <span>2м/с</span>
                </td>
              </tr>
              <tr>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Вращательно - колебательный режим</span>
                </td>
                <td className={cell}>
                  <span>70 Н/мм²</span>
                </td>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Непрерывная смазка</span>
                </td>
                <td className={cell}>
                  <span>&gt;2м/с</span>
                </td>
              </tr>
              <tr>
                <td
                  colSpan='2'
                  className={cell}>
                  <span style={{ width: '33%' }}>Макс. PV Режим со смазкой</span>
                </td>
                <td className={cell}>
                  <span>
                    3 Н/мм<sup>2</sup>*м/с
                  </span>
                </td>
                <td
                  colSpan='2'
                  className={cell}>
                  <span style={{ width: '33%' }}>Теплопроводность</span>
                </td>
                <td className={cell}>
                  <span>
                    50 Вт(м*К)<sup>-1</sup>
                  </span>
                </td>
              </tr>
              <tr>
                <td
                  colSpan='2'
                  className={cell}>
                  <span style={{ width: '33%' }}>Коэффициент температурного расширения</span>
                </td>
                <td className={cell}>
                  <span>
                    11*10<sup>-6</sup>*К<sup>-1</sup>
                  </span>
                </td>
                <td
                  colSpan='2'
                  className={cell}>
                  <span style={{ width: '33%' }}>Коэффициент трения</span>
                </td>
                <td className={cell}>
                  <span>0,05~0,20</span>
                </td>
              </tr>
              <tr>
                <td
                  colSpan='7'
                  className={cell}>
                  <span style={{ width: '33%' }}>
                    Перед сборкой подшипника масляные кармашки должны быть заполнены смазкой.
                  </span>
                </td>
              </tr>
            </tbody>
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
          Материал обладает хорошей износостойкостью и подходит для средних и высоких нагрузок в условиях работы.
          ударных нагрузок и запыленной среды. Перед сборкой необходима предварительная смазка. Этот материал
          применяется в оси коммерческого транспорта, тормозной системе, системе подвески, сельскохозяйственной технике,
          лесной технике и погрузочно-разгрузочной технике. Его можно использовать для замены некоторых традиционных
          стальных или бронзовых гильз.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
