import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import { flex, table, cell, image, section, scroll } from './hmg200C.module.css';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <main className={`${section} container`}>
      <BreadCrumbs
        currentLink='Подшипники HMG-200C'
        links={[
          { href: 'https://vi-va.vercel.app/', name: 'Главнaя' },
          { href: 'https://vi-va.vercel.app/goods', name: 'Товары' },
          { href: 'https://vi-va.vercel.app/goods/products04', name: 'Биметаллические подшипники, требующие смазки' },
        ]}
      />
      <section className={flex}>
        <Image
          src='/image/pages/hmg200C/hmg200C.jpg'
          width={600}
          height={450}
          sizes='(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw'
          priority={true}
          alt='Подшипники HMG-200C'
          className={image}
        />
        <div>
          <Htag tag='h1'>HMG-200C</Htag>
          <Htag
            tag='h2'
            border='left'>
            Описание
          </Htag>
          <Ptag tag='p'>
            Это наиболее экономичное решение подшипников скольжения. Он подходит для работы с высокими нагрузками и
            низкой скоростью, где существуют условия работы в условиях ударной и запыленной среды. В дополнение к
            первоначальной смазке необходима периодическая смазка, поскольку неудовлетворительные условия смазки могут
            привести к короткому сроку службы подшипников. Не рекомендуется использовать подшипники в сухом состоянии.
            При использовании подшипников такого типа необходимо учитывать наличие надлежащей системы смазки.
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
            Подшипники из закаленной стали S45C. Термическая обработка повышает износостойкость и ударопрочность
            материала. Масляные канавки и отложения доступны в зависимости от требований. Смазочные канавки и рисунок
            отложений обеспечивают равномерное распределение масла или смазки по поверхности подшипника, что улучшает
            смазочные характеристики. В сочетании с технологией самосмазывания поверхность подшипника может быть покрыта
            или залита твердой смазкой для улучшения ее смазочных характеристик.
          </Ptag>
        </div>
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
                  rowSpan='2'
                  style={{ width: '16%' }}
                  className={cell}>
                  Макс. нагрузка
                </td>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  Статический режим
                </td>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  <span style={{ width: '16%' }}>
                    250 Н/мм<sup>2</sup>
                  </span>
                </td>
                <td
                  rowSpan='6'
                  className={cell}>
                  &nbsp;
                </td>
                <td
                  style={{ width: '24%' }}
                  className={cell}>
                  Коэффициент температурного расширения
                </td>
                <td
                  colSpan='2'
                  style={{ width: '24%' }}
                  className={cell}>
                  1.1*10<sup>-5 </sup>℃
                </td>
              </tr>
              <tr>
                <td className={cell}>Динамический режим</td>
                <td className={cell}>
                  <span style={{ width: '16%' }}>
                    100 Н/мм<sup>2</sup>
                  </span>
                </td>
                <td className={cell}>Диапазон рабочих температур</td>
                <td
                  colSpan='2'
                  className={cell}>
                  -400℃~+120℃
                </td>
              </tr>
              <tr>
                <td className={cell}>Макс. скорость</td>
                <td className={cell}>Со смазкой</td>
                <td className={cell}>10 м/с</td>
                <td className={cell}>Коэффициент трения</td>
                <td className={cell}>Со смазкой</td>
                <td className={cell}>0.1~0.25</td>
              </tr>
              <tr>
                <td className={cell}>Max. PV</td>
                <td className={cell}>Со смазкой</td>
                <td className={cell}>
                  1.5 Н/мм<sup>2</sup>*м/с
                </td>
                <td
                  rowSpan='2'
                  className={cell}>
                  Прочность соединения сплавов
                </td>
                <td className={cell}>Шероховатость</td>
                <td className={cell}>Ra＜0.8</td>
              </tr>
              <tr>
                <td className={cell}>Density</td>
                <td
                  colSpan='2'
                  className={cell}>
                  7.8 г/мм<sup>3</sup>
                </td>
                <td className={cell}>Твердость</td>
                <td className={cell}>HRC 58-62</td>
              </tr>
              <tr>
                <td className={cell}>Твердость</td>
                <td
                  colSpan='2'
                  className={cell}>
                  HB ≥40
                </td>
                <td
                  colSpan='3'
                  className={cell}>
                  Рекомендуется добавление консистентной смазки каждые 8 часов.
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
          Типичные области применения этого материала включают портовую технику, лесную технику, строительное
          оборудование, оси грузовых автомобилей и погрузочно-разгрузочную технику, а также проушины штоков
          гидравлических цилиндров и соединительные подшипники.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
