import Image from 'next/image';
import React from 'react';
import {
  flex,
  table,
  cell,
  image,
  section,
  scroll,
  caption,
} from './hmg80.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

const page = () => {
  return (
    <main className={`${section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-80"
        links={[
          { href: 'https://vi-va.vercel.app/', name: 'Главнaя' },
          { href: 'https://vi-va.vercel.app/goods', name: 'Товары' },
          {
            href: 'https://vi-va.vercel.app/goods/products02',
            name: 'Металлополимерные подшипники, требующие смазки',
          },
        ]}
      />
      <section className={flex}>
        <Image
          src="/image/pages/hmg80/hmg80.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-80"
          className={image}
        />
        <div>
          <Htag tag="h1">HMG-80</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag tag="p">
            Подходит для эксплуатации со смазкой. Перед сборкой рекомендуется
            смазать детали консистентной смазкой. Масляное месторождение может
            удерживать смазку с оптимизированной матрицей и удерживать возможные
            входящие загрязнения во время работы. Смазка во время эксплуатации
            помогает продлить срок службы подшипника. Широкий диапазон рабочих
            температур от -150°C до +250°C и надежная химическая стойкость
            подшипника обеспечивают подходящее применение в условиях средних и
            высоких нагрузок. HMG-80M представляет собой материал с толщиной
            PEEK/ПТФЭ 0,1-0,2 мм без масляных отложений на поверхности, после
            сборки он поддается механической обработке.
          </Ptag>
        </div>
      </section>
      <section className={flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag tag="p">
            1. Толщина PEEK/ПТФЭ 0,20–0,35 мм обеспечивает хорошую
            износостойкость. На этой опорной поверхности имеется узор из круглых
            углублений, которые при сборке подшипника следует заполнить смазкой.
          </Ptag>
          <Ptag tag="p">
            2. Спеченная бронза толщиной 0,20-0,35 мм обеспечивает прочное
            механическое соединение и отличную теплопроводность.
          </Ptag>
          <Ptag tag="p">
            3. Низкоуглеродистая сталь, обеспечивает механическую прочность и
            теплопроводность.
          </Ptag>
        </div>

        <Image
          src="/image/pages/hmg80/hmg80structure.png"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-80"
        />
      </section>
      <section>
        <div className={scroll}>
          <table className={table}>
            <caption className={caption}>
              <Htag tag="h2" border="left">
                Сводная таблица технических данных материала HMG-80
              </Htag>
            </caption>
            <tbody>
              <tr>
                <td rowSpan="3" style={{ width: '16%' }} className={cell}>
                  <span style={{ width: '33%' }}>Макс. нагрузка</span>
                </td>
                <td style={{ width: '16%' }} className={cell}>
                  <span style={{ width: '33%' }}>Статический режим</span>
                </td>
                <td style={{ width: '16%' }} className={cell}>
                  250 Н/мм<sup>2</sup>
                </td>
                <td rowSpan="6" className={cell}>
                  &nbsp;
                </td>
                <td colSpan="2" style={{ width: '28%' }} className={cell}>
                  <span style={{ width: '33%' }}>Коэффициент трения</span>
                </td>
                <td style={{ width: '20%' }} className={cell}>
                  0.08~0.15
                </td>
              </tr>
              <tr>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Низкоскоростной режим</span>
                </td>
                <td className={cell}>
                  140 Н/мм<sup>2</sup>
                </td>
                <td rowSpan="2" className={cell}>
                  Макс. скорость
                </td>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Сухой рехим</span>
                </td>
                <td className={cell}>2 м/с</td>
              </tr>
              <tr>
                <td className={cell}>
                  <span style={{ width: '33%' }}>
                    Вращательно - колебательный режим
                  </span>
                </td>
                <td className={cell}>
                  60 Н/мм<sup>2</sup>
                </td>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Гидродинамический режим</span>
                </td>
                <td className={cell}>&gt;2 м/с</td>
              </tr>
              <tr>
                <td rowSpan="2" className={cell}>
                  <span style={{ width: '33%' }}>
                    Макс. PV Режим без смазки
                  </span>
                </td>
                <td className={cell}>
                  <span style={{ width: '33%' }}>
                    Кратковременная эксплуатация
                  </span>
                </td>
                <td className={cell}>
                  3.6 Н/мм<sup>2</sup>*м/с
                </td>
                <td colSpan="2" className={cell}>
                  <span style={{ width: '33%' }}>Теплопроводность</span>
                </td>
                <td className={cell}>
                  50 Вт(м*K)<sup>-1</sup>
                </td>
              </tr>
              <tr>
                <td className={cell}>
                  <span style={{ width: '33%' }}>Непрерывная работа</span>
                </td>
                <td className={cell}>
                  1.8 Н/мм<sup>2</sup>*м/с
                </td>
                <td colSpan="2" className={cell}>
                  <span style={{ width: '33%' }}>
                    Коэффициент температурного расширения
                  </span>
                </td>
                <td className={cell}>
                  11*10<sup>-6</sup>*K<sup>-1</sup>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  <span style={{ width: '33%' }}>
                    Диапазон рабочих температур
                  </span>
                </td>
                <td className={cell}>-150℃～+250℃</td>
                <td colSpan="2" className={cell}>
                  &nbsp;
                </td>
                <td className={cell}>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <Htag tag="h2" border="left">
          Типичные области применения
        </Htag>
        <Ptag tag="p">
          Материал имеет широкий диапазон рабочих температур и может
          использоваться в условиях высоких значений PV. Оно используется в
          гидравлических двигателях, насосах, системе Common Rail дизельных
          двигателей и тормозных системах тяжелых грузовиков.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
