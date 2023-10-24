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
} from './hmg650GT.module.css';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <main className={`${section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-650GT"
        links={[
          { href: 'https://vi-va.vercel.app/', name: 'Главнaя' },
          { href: 'https://vi-va.vercel.app/goods', name: 'Товары' },
          {
            href: 'https://vi-va.vercel.app/goods/products03',
            name: 'Металлические самосмазывающиеся подшипники',
          },
        ]}
      />
      <section className={flex}>
        <Image
          src="/image/pages/hmg650GT/hmg650GT.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-650GT"
          className={image}
        />
        <div>
          <Htag tag="h1">HMG-650GT</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag tag="p">
            Бронзовый сплав обеспечивает механическую прочность и несущую
            способность подшипника, а также снижает стоимость материала. Твердые
            смазочные материалы обеспечивают непрерывный источник смазки для
            создания надежной системы смазки. Он подходит для условий
            эксплуатации со средней и высокой нагрузкой и там, где требуется
            частый перезапуск.
          </Ptag>
        </div>
      </section>
      <section className={flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag tag="p">
            1. Твердые смазочные материалы, расположенные в соответствии с
            направлением движения подшипника для создания смазочной пленки,
            улучшающей коэффициенты трения и износостойкость.
          </Ptag>
          <Ptag tag="p">
            2. Бронзовый сплав обеспечивает механическую прочность, улучшает
            ударопрочность и коррозионную стойкость.
          </Ptag>
          <Ptag tag="p">
            3. Стальная основа снижает стоимость материала и повышает
            механическую прочность.
          </Ptag>
        </div>

        <Image
          src="/image/pages/hmg650GT/hmg650GTstructure.png"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-650GT"
        />
      </section>
      <section>
        <div className={scroll}>
          <table className={table}>
            <caption className={caption}>
              <Htag tag="h2" border="left">
                Сводная таблица технических данных материала HMG-650GT
              </Htag>
            </caption>
            <tbody>
              <tr>
                <td rowSpan="2" className={cell}>
                  Макс. нагрузка
                </td>
                <td className={cell}>Статическая</td>
                <td className={cell}>
                  <span>
                    250 Н/мм<sup>2</sup>
                  </span>
                </td>
                <td rowSpan="6" className={cell}>
                  &nbsp;
                </td>
                <td className={cell}>Диапазон рабочих температур</td>
                <td className={cell}>-100℃~+300℃</td>
              </tr>
              <tr>
                <td className={cell}>Динамическая</td>
                <td className={cell}>
                  <span>
                    100 Н/мм<sup>2</sup>
                  </span>
                </td>
                <td className={cell}>Коэффициент трения</td>
                <td className={cell}>0.03~0.20</td>
              </tr>
              <tr>
                <td rowSpan="2" className={cell}>
                  Максимальная скорость
                </td>
                <td className={cell}>Сухой режим</td>
                <td className={cell}>0.5 м/с</td>
                <td className={cell}>Теплопроводность</td>
                <td className={cell}>
                  60 Вт(м*К)<sup>-1</sup>
                </td>
              </tr>
              <tr>
                <td className={cell}>Со смазкой</td>
                <td className={cell}>1.0 м/с</td>
                <td className={cell}>Коэф. теплового расширения</td>
                <td className={cell}>
                  19*10<sup>-6</sup>*K<sup>-1</sup>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Макс. PV
                </td>
                <td className={cell}>
                  3.25 Н/мм<sup>2</sup>*м/с
                </td>
                <td className={cell}>Прочность соединения сплавов</td>
                <td className={cell}>
                  150 Н/мм<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Твердость сплава
                </td>
                <td className={cell}>HB＞210</td>
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
          Материал широко используется в машинах для литья пластмасс, портовом
          оборудовании, горнодобывающих машинах, направляющих. втулка для
          пресс-формы и так далее. Он подходит для применений в условиях ударной
          нагрузки и пыльной среды, а также при частом перезапуске.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
