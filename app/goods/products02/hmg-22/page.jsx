import Image from 'next/image';
import React from 'react';
import { flex, table, cell, image, section, scroll } from './hmg22.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

const page = () => {
  return (
    <main className={`${section} container`}>
      <BreadCrumbs
        currentLink='Подшипники HMG-22'
        links={[
          { href: 'https://vi-va.vercel.app/', name: 'Главнaя' },
          { href: 'https://vi-va.vercel.app/goods', name: 'Товары' },
          { href: 'https://vi-va.vercel.app/goods/products02', name: 'Металлополимерные подшипники, требующие смазки' },
        ]}
      />
      <section className={flex}>
        <Image
          src='/image/pages/hmg22/hmg22.jpg'
          width={600}
          height={450}
          sizes='(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw'
          priority={true}
          alt='Подшипники HMG-22'
          className={image}
        />
        <div>
          <Htag tag='h1'>HMG-22</Htag>
          <Htag
            tag='h2'
            border='left'>
            Описание
          </Htag>
          <Ptag tag='p'>
            Подходит для эксплуатации со смазкой. Перед сборкой рекомендуется смазать детали консистентной смазкой.
            HMG-22M представляет собой материал ПВДФ толщиной 0,1-0,2 мм без масляных отверстий, после сборки поддается
            механической обработке.
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
            1. Толщина ПВДФ 0,20–0,35 мм обеспечивает хорошую износостойкость и более низкие коэффициенты трения даже
            при плохих условиях смазки.
          </Ptag>
          <Ptag tag='p'>
            2. Толщина спеченной бронзы 0,20-0,35 мм обеспечивает прочное механическое соединение и отличную
            теплопроводность.
          </Ptag>
          <Ptag tag='p'>3. Низкоуглеродистая сталь, обеспечивает механическую прочность и теплопроводность.</Ptag>
        </div>

        <Image
          src='/image/pages/hmg22/hmg22structure.png'
          width={300}
          height={240}
          sizes='(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw'
          priority={true}
          alt='Структура материала HMG-22'
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
                  250 Н/мм<sup>2</sup>
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
                  -50°C~+130°C
                </td>
              </tr>
              <tr>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Низкоскоростной режим</span>
                </td>
                <td className={cell}>
                  140 Н/мм<sup>2</sup>
                </td>
                <td
                  rowSpan='2'
                  className={cell}>
                  <span style={{ width: '33%' }}>Макс. скорость</span>
                </td>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Со смазкой</span>
                </td>
                <td className={cell}>2 м/с</td>
              </tr>
              <tr>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Вращательно - колебательный режим</span>
                </td>
                <td className={cell}>
                  70 Н/мм<sup>2</sup>
                </td>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Непрерывная смазка</span>
                </td>
                <td className={cell}>&gt;3 м/с</td>
              </tr>
              <tr>
                <td
                  colSpan='2'
                  className={cell}>
                  <span style={{ width: '33%' }}>Макс. PV Режим со смазкой</span>
                </td>
                <td className={cell}>
                  3.6 Н/мм<sup>2</sup>*м/с
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
                <td className={cell}>0.03~0.20</td>
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
          Материал обладает хорошей износостойкостью и подходит для применений со средними и высокими нагрузками в
          условиях ударной нагрузки и пыльной среды. Перед сборкой необходима предварительная смазка. Этот материал
          применяется в оси коммерческого транспорта, тормозной системе, системе подвески, воздушных компрессорах,
          гидравлических поршневых насосах, двигателях, а также в сельскохозяйственной технике, лесной технике и
          погрузочно-разгрузочных машинах.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
