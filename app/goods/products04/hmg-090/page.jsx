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
} from './hmg090.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

const page = () => {
  return (
    <main className={`${section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-090"
        links={[
          { href: 'https://vi-va.vercel.app/', name: 'Главнaя' },
          { href: 'https://vi-va.vercel.app/goods', name: 'Товары' },
          {
            href: 'https://vi-va.vercel.app/goods/products04',
            name: 'Биметаллические подшипники, требующие смазки',
          },
        ]}
      />
      <section className={flex}>
        <Image
          src="/image/pages/hmg090/hmg090.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-090"
          className={image}
        />
        <div>
          <Htag tag="h1">HMG-090</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag tag="p">
            Это тонкостенная свёртная втулка. Внутренняя насечка удерживает
            смазку для образования смазочной пленки во время начальной обкатки.
            Внутренний диаметр втулки может быть обработан после сборки.
            Бронзовый сплав обеспечивает хорошую коррозионную стойкость и
            теплопроводность. Он подходит для средних и низких нагрузок и низких
            скоростей, поэтому рекомендуется периодически смазывать.
          </Ptag>
        </div>
      </section>
      <section className={flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag tag="p">
            Это втулка из бронзового сплава CuSn8. Он имеет хорошие нагрузочные
            характеристики и хорошую износостойкость. Это экономичная
            конструкция с насечкой, которая удерживает масло для образования
            смазочной пленки во время первоначальной обкатки.
          </Ptag>
        </div>

        <Image
          src="/image/pages/hmg090/hmg090structure.png"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-090"
        />
      </section>
      <section>
        <div className={scroll}>
          <table className={table}>
            <caption className={caption}>
              <Htag tag="h2" border="left">
                Химический состав материала HMG-090
              </Htag>
            </caption>
            <tbody>
              <tr>
                <td className={cell}>Тип</td>
                <td className={cell}>Cu %</td>
                <td className={cell}>Sn %</td>
                <td className={cell}>P %</td>
                <td className={cell}>Pb %</td>
                <td className={cell}>Zn %</td>
              </tr>
              <tr>
                <td className={cell}>HMG-090</td>
                <td className={cell}>91.3</td>
                <td className={cell}>8.5</td>
                <td className={cell}>0.2</td>
                <td className={cell}>/</td>
                <td className={cell}>/</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={scroll}>
          <table className={table}>
            <caption className={caption}>
              <Htag tag="h2" border="left">
                Сводная таблица технических данных материала HMG-090
              </Htag>
            </caption>
            <tbody>
              <tr>
                <td rowSpan="2" style={{ width: '16%' }} className={cell}>
                  Макс. нагрузка
                </td>
                <td style={{ width: '16%' }} className={cell}>
                  Статический режим
                </td>
                <td style={{ width: '16%' }} className={cell}>
                  <span style={{ width: '16%' }}>
                    120 Н/мм<sup>2</sup>
                  </span>
                </td>
                <td rowSpan="6" className={cell}>
                  &nbsp;
                </td>
                <td style={{ width: '16%' }} className={cell}>
                  Удлинение
                </td>
                <td style={{ width: '16%' }} className={cell}>
                  40%
                </td>
              </tr>
              <tr>
                <td className={cell}>Динамический режим</td>
                <td className={cell}>
                  <span style={{ width: '16%' }}>
                    40 Н/мм<sup>2</sup>
                  </span>
                </td>
                <td className={cell}>Диапазон рабочих температур</td>
                <td className={cell}>-100℃~+200℃</td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Макс. скорость (со смазкой)
                </td>
                <td className={cell}>2 м/с</td>
                <td className={cell}>Коэффициент трения</td>
                <td className={cell}>0.08~0.25</td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Макс. PV
                </td>
                <td className={cell}>
                  2.8 Н/мм<sup>2</sup>*м/с
                </td>
                <td className={cell}>Теплопроводность</td>
                <td className={cell}>
                  58 Вт(м*K)<sup>-1</sup>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Предел прочности
                </td>
                <td className={cell}>
                  450 Н/мм<sup>2</sup>
                </td>
                <td className={cell}>Коэффициент температурного расширения</td>
                <td className={cell}>
                  18.5*10<sup>-6</sup>*K<sup>-1</sup>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Твердость сплава
                </td>
                <td className={cell}>HB 110-150</td>
                <td className={cell}>&nbsp;</td>
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
          Типичные области применения этого материала включают подъемное
          оборудование, строительное оборудование, автомобильную промышленность,
          тракторы, грузовики, сельскохозяйственную технику и горнодобывающую
          технику. Доступная продукция включает цилиндрические втулки, фланцевые
          втулки и упорные шайбы.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
