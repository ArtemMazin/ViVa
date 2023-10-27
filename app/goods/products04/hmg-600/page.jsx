import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import {
  flex,
  table,
  cell,
  image,
  section,
  scroll,
  caption,
} from './hmg600.module.css';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <main className={`${section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-600"
        links={[
          { href: 'https://vi-va.vercel.app/', name: 'Главнaя' },
          { href: 'https://vi-va.vercel.app/goods', name: 'Товары' },
          {
            href: 'https://vi-va.vercel.app/goods/products04',
            name: 'Металлические подшипники, требующие смазки',
          },
        ]}
      />
      <section className={flex}>
        <Image
          src="/image/pages/hmg600/hmg600.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-600"
          className={image}
        />
        <div>
          <Htag tag="h1">HMG-600</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag tag="p">
            Литой бронзовый сплав представляет собой высокопрочный материал с
            хорошей ударопрочностью, коррозионной стойкостью и износостойкостью
            в условиях эксплуатации при средних и высоких нагрузках. Высокая
            точность обработки обеспечивает хорошее соответствие допусков
            аналогам. Масляные канавки и масляные отложения могут быть
            спроектированы в соответствии с различными условиями применения.
            Размеры подшипников могут быть изменены для лучшего соответствия
            существующим аналогам заказчика.
          </Ptag>
        </div>
      </section>
      <section className={flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag tag="p">
            Подшипник из литого бронзового сплава представляет собой идеальное
            самосмазывающееся решение как с технической, так и с экономической
            точки зрения. Материал обладает высокой устойчивостью к нагрузкам и
            хорошей коррозионной стойкостью. Доступны различные сплавы в
            зависимости от различных требований применения.
          </Ptag>
        </div>
      </section>
      <section>
        <div className={scroll}>
          <table className={table}>
            <caption className={caption}>
              <Htag tag="h2" border="left">
                Сводная таблица технических данных материала HMG-600
              </Htag>
            </caption>
            <tbody>
              <tr>
                <td colSpan="2" className={cell}>
                  Тип
                </td>
                <td className={cell}>650</td>
                <td className={cell}>650S5</td>
                <td className={cell}>650W1</td>
                <td className={cell}>650W3</td>
                <td className={cell}>650S1</td>
                <td className={cell}>650S2</td>
                <td className={cell}>650S3</td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Материал
                </td>
                <td colSpan="4" className={cell}>
                  CuZn25AI5Mn4Fe3
                </td>
                <td className={cell}>CuSn5Pb5Zn5</td>
                <td className={cell}>CuAl10Ni5Fe5</td>
                <td className={cell}>CuSn12</td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Плотность
                </td>
                <td colSpan="4" className={cell}>
                  7.8
                </td>
                <td className={cell}>8.9</td>
                <td className={cell}>7.8</td>
                <td className={cell}>8.9</td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Твердость HB
                </td>
                <td className={cell}>≥210</td>
                <td className={cell}>≥250</td>
                <td className={cell}>≥210</td>
                <td className={cell}>≥230</td>
                <td className={cell}>≥70</td>
                <td className={cell}>≥150</td>
                <td className={cell}>≥75</td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Предел прочности МПа
                </td>
                <td className={cell}>≥750</td>
                <td className={cell}>≥800</td>
                <td className={cell}>≥755</td>
                <td className={cell}>≥755</td>
                <td className={cell}>≥250</td>
                <td className={cell}>≥500</td>
                <td className={cell}>≥270</td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Предел текучести МПа
                </td>
                <td className={cell}>≥450</td>
                <td className={cell}>≥450</td>
                <td className={cell}>≥400</td>
                <td className={cell}>≥400</td>
                <td className={cell}>≥90</td>
                <td className={cell}>≥260</td>
                <td className={cell}>≥150</td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Удлинение %
                </td>
                <td className={cell}>≥12</td>
                <td className={cell}>≥8</td>
                <td className={cell}>≥12</td>
                <td className={cell}>≥12</td>
                <td className={cell}>≥13</td>
                <td className={cell}>≥10</td>
                <td className={cell}>≥5</td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Коэффициент теплового расширения
                </td>
                <td colSpan="4" className={cell}>
                  1.9x10<sup>-5</sup>/°C
                </td>
                <td className={cell}>
                  1.8x10<sup>-5</sup>/°C
                </td>
                <td className={cell}>
                  1.6x10<sup>-5</sup>/°C
                </td>
                <td className={cell}>
                  1.8x10<sup>-5</sup>/°C
                </td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Макс. рабочая температура
                </td>
                <td colSpan="4" className={cell}>
                  -40~+250°C
                </td>
                <td colSpan="3" className={cell}>
                  -40~+400°C
                </td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Макс. нагрузка МПа
                </td>
                <td className={cell}>50</td>
                <td className={cell}>75</td>
                <td className={cell}>75</td>
                <td className={cell}>100</td>
                <td colSpan="3" className={cell}>
                  50
                </td>
              </tr>
              <tr>
                <td rowSpan="2" className={cell}>
                  Макс. скорость м/с
                </td>
                <td className={cell}>Сухой</td>
                <td className={cell}>0.5</td>
                <td className={cell}>0.1</td>
                <td className={cell}>0.5</td>
                <td className={cell}>0.1</td>
                <td colSpan="3" className={cell}>
                  0.5
                </td>
              </tr>
              <tr>
                <td className={cell}>Смазанный</td>
                <td className={cell}>1</td>
                <td className={cell}>0.25</td>
                <td className={cell}>1</td>
                <td className={cell}>0.25</td>
                <td colSpan="3" className={cell}>
                  2.5
                </td>
              </tr>
              <tr>
                <td rowSpan="2" className={cell}>
                  Макс. PV (Н/мм<sup>2</sup>*м/с)
                </td>
                <td className={cell}>Сухой</td>
                <td colSpan="4" className={cell}>
                  1.65
                </td>
                <td colSpan="3" className={cell}>
                  1
                </td>
              </tr>
              <tr>
                <td className={cell}>Смазанный</td>
                <td colSpan="4" className={cell}>
                  3.25
                </td>
                <td colSpan="3" className={cell}>
                  1.65
                </td>
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
          Типичные области применения этого материала включают портовое
          оборудование, строительное оборудование, оборудование для литья
          пластмасс под давлением, оси и погрузочно-разгрузочные машины. Он
          имеет высокую грузоподъемность и хорошую устойчивость к коррозии.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
