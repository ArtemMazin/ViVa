import Image from 'next/image';
import React from 'react';
import { flex, title, subtitle, text, table, cell, image, section, scroll } from './hmg22.module.css';

const page = () => {
  return (
    <main className={`${section} container`}>
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
          <h1 className={title}>HMG-22</h1>
          <h2 className={subtitle}>Описание</h2>
          <p className={text}>
            Подходит для эксплуатации со смазкой. Перед сборкой рекомендуется смазать детали консистентной смазкой.
            HMG-22M представляет собой материал ПВДФ толщиной 0,1-0,2 мм без масляных отверстий, после сборки поддается
            механической обработке.
          </p>
        </div>
      </section>
      <section className={flex}>
        <div>
          <h2 className={subtitle}>Структура</h2>
          <p className={text}>
            1. Толщина ПВДФ 0,20–0,35 мм обеспечивает хорошую износостойкость и более низкие коэффициенты трения даже
            при плохих условиях смазки.
          </p>
          <p className={text}>
            2. Толщина спеченной бронзы 0,20-0,35 мм обеспечивает прочное механическое соединение и отличную
            теплопроводность.
          </p>
          <p className={text}>3. Низкоуглеродистая сталь, обеспечивает механическую прочность и теплопроводность.</p>
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
        <h2 className={subtitle}>Технические данные</h2>
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
        <h2 className={subtitle}>Типичные области применения</h2>
        <p className={text}>
          Материал обладает хорошей износостойкостью и подходит для применений со средними и высокими нагрузками в
          условиях ударной нагрузки и пыльной среды. Перед сборкой необходима предварительная смазка. Этот материал
          применяется в оси коммерческого транспорта, тормозной системе, системе подвески, воздушных компрессорах,
          гидравлических поршневых насосах, двигателях, а также в сельскохозяйственной технике, лесной технике и
          погрузочно-разгрузочных машинах.
        </p>
      </section>
    </main>
  );
};

export default page;
