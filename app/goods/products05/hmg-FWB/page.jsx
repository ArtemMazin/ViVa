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
} from './hmgFWB.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

const page = () => {
  return (
    <main className={`${section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-FWB"
        links={[
          { href: 'https://vi-va.vercel.app/', name: 'Главнaя' },
          { href: 'https://vi-va.vercel.app/goods', name: 'Товары' },
          {
            href: 'https://vi-va.vercel.app/goods/products05',
            name: 'Неметаллические самосмазывающиеся подшипники',
          },
        ]}
      />
      <section className={flex}>
        <Image
          src="/image/pages/hmgFWB/hmgFWB.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-FWB"
          className={image}
        />
        <div>
          <Htag tag="h1">HMG-FWB</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag tag="p">
            Несущий слой со специальным волокном и волокном ПТФЭ обладает
            хорошей износостойкостью. Подходит для использования в пыльных
            условиях с высокими нагрузками. ПТФЭ обеспечивает низкий коэффициент
            трения и функцию самосмазывания. Материал хорош для применения с
            низкой скоростью и высокой нагрузкой. Стекловолокно и эпоксидная
            смола обладают хорошей химической стойкостью.
          </Ptag>
        </div>
      </section>
      <section className={flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag tag="p">
            1. Специальное волокно и слой волокна из ПТФЭ обеспечивают
            самосмазывающиеся свойства подшипников.
          </Ptag>
          <Ptag tag="p">
            2. Укрепите стекловолокно эпоксидной смолой, что обеспечивает
            механическую прочность и устойчивость к коррозии.
          </Ptag>
        </div>
        <Image
          src="/image/pages/hmgFWB/hmgFWBstructure.jpg"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-FWB"
        />
      </section>
      <section>
        <div className={scroll}>
          <table className={table}>
            <caption className={caption}>
              <Htag tag="h2" border="left">
                Сводная таблица технических данных материала HMG-FWB
              </Htag>
            </caption>
            <tbody>
              <tr>
                <td className={cell}>Тип материала</td>
                <td className={cell}>Стандарт</td>
                <td className={cell}>Единицы</td>
                <td className={cell}>HMG-CRM</td>
                <td className={cell}>HMG-CRB</td>
                <td className={cell}>HMG-CRG</td>
                <td className={cell}>HMG-CRP</td>
                <td className={cell}>HMG-CRW</td>
                <td className={cell}>HMG-CRF</td>
              </tr>
              <tr>
                <td className={cell}>Категория</td>
                <td className={cell}>&nbsp;</td>
                <td className={cell}>&nbsp;</td>
                <td className={cell}>Общий</td>
                <td className={cell}>Стандартный</td>
                <td className={cell}>Нагруженный</td>
                <td className={cell}>Скоростной</td>
                <td className={cell}>Водостойкий</td>
                <td className={cell}>Экономичный</td>
              </tr>
              <tr>
                <td className={cell}>Плотность</td>
                <td className={cell}>ISO1183</td>
                <td className={cell}>
                  г/см<sup>3</sup>
                </td>
                <td className={cell}>1.95</td>
                <td className={cell}>1.95</td>
                <td className={cell}>1.95</td>
                <td className={cell}>1.95</td>
                <td className={cell}>1.95</td>
                <td className={cell}>1.95</td>
              </tr>
              <tr>
                <td className={cell}>Макс. впитывание воды</td>
                <td className={cell}>ISO62</td>
                <td className={cell}>%</td>
                <td className={cell}>0.1</td>
                <td className={cell}>0.1</td>
                <td className={cell}>0.1</td>
                <td className={cell}>0.1</td>
                <td className={cell}>0.1</td>
                <td className={cell}>0.5</td>
              </tr>
              <tr>
                <td className={cell}>Макс. PV</td>
                <td className={cell}>ITS026</td>
                <td className={cell}>
                  Н/мм<sup>2</sup>×м/с
                </td>
                <td className={cell}>1.8</td>
                <td className={cell}>1.8</td>
                <td className={cell}>2.0</td>
                <td className={cell}>1.6</td>
                <td className={cell}>1.8</td>
                <td className={cell}>1.2</td>
              </tr>
              <tr>
                <td className={cell}>Коэффициент трения</td>
                <td className={cell}>ITS025</td>
                <td className={cell}>μ</td>
                <td className={cell}>0.05～0.15</td>
                <td className={cell}>0.03～0.12</td>
                <td className={cell}>0.03～0.12</td>
                <td className={cell}>0.02～0.12</td>
                <td className={cell}>0.02～0.10</td>
                <td className={cell}>0.08～0.30</td>
              </tr>
              <tr>
                <td className={cell}>Непрерывная рабочая температура.</td>
                <td className={cell}>ITS029</td>
                <td className={cell}>℃</td>
                <td className={cell}>+160</td>
                <td className={cell}>+160</td>
                <td className={cell}>+160</td>
                <td className={cell}>+160</td>
                <td className={cell}>+100</td>
                <td className={cell}>+130</td>
              </tr>
              <tr>
                <td className={cell}>Мгновенная рабочая температура.</td>
                <td className={cell}>ITS029</td>
                <td className={cell}>℃</td>
                <td className={cell}>+180</td>
                <td className={cell}>+180</td>
                <td className={cell}>+180</td>
                <td className={cell}>+180</td>
                <td className={cell}>+160</td>
                <td className={cell}>+160</td>
              </tr>
              <tr>
                <td className={cell}>Минимальная рабочая температура.</td>
                <td className={cell}>ITS029</td>
                <td className={cell}>℃</td>
                <td className={cell}>-100</td>
                <td className={cell}>-100</td>
                <td className={cell}>-100</td>
                <td className={cell}>-100</td>
                <td className={cell}>-100</td>
                <td className={cell}>-40</td>
              </tr>
              <tr>
                <td className={cell}>Макс. скорость</td>
                <td className={cell}>ITS032</td>
                <td className={cell}>м/с</td>
                <td className={cell}>0.20</td>
                <td className={cell}>0.20</td>
                <td className={cell}>0.20</td>
                <td className={cell}>0.40</td>
                <td className={cell}>0.40</td>
                <td className={cell}>0.13</td>
              </tr>
              <tr>
                <td className={cell}>Прочность на сжатие</td>
                <td className={cell}>ITS033</td>
                <td className={cell}>МПа</td>
                <td className={cell}>420</td>
                <td className={cell}>420</td>
                <td className={cell}>420</td>
                <td className={cell}>420</td>
                <td className={cell}>420</td>
                <td className={cell}>300</td>
              </tr>
              <tr>
                <td className={cell}>Макс. статическая нагрузка</td>
                <td className={cell}>ITS027</td>
                <td className={cell}>МПа</td>
                <td className={cell}>240</td>
                <td className={cell}>240</td>
                <td className={cell}>240</td>
                <td className={cell}>240</td>
                <td className={cell}>240</td>
                <td className={cell}>150</td>
              </tr>
              <tr>
                <td className={cell}>Макс. динамическая нагрузка</td>
                <td className={cell}>ITS028</td>
                <td className={cell}>МПа</td>
                <td className={cell}>120</td>
                <td className={cell}>140</td>
                <td className={cell}>160</td>
                <td className={cell}>30</td>
                <td className={cell}>120</td>
                <td className={cell}>45</td>
              </tr>
              <tr>
                <td className={cell}>Твердость по Шору</td>
                <td className={cell}>ISO868</td>
                <td className={cell}>D</td>
                <td className={cell}>95</td>
                <td className={cell}>95</td>
                <td className={cell}>95</td>
                <td className={cell}>95</td>
                <td className={cell}>95</td>
                <td className={cell}>90</td>
              </tr>
              <tr>
                <td className={cell}>Коэф. теплового расширения (25～150℃)</td>
                <td className={cell}>ISO11359</td>
                <td className={cell}>
                  10<sup>-6</sup>*K<sup>-1</sup>
                </td>
                <td className={cell}>13</td>
                <td className={cell}>13</td>
                <td className={cell}>13</td>
                <td className={cell}>13</td>
                <td className={cell}>13</td>
                <td className={cell}>40</td>
              </tr>
              <tr>
                <td colSpan="3" className={cell}>
                  Цвет
                </td>
                <td className={cell}>
                  <Image
                    src="/image/pages/hmgFWB/blue.jpg"
                    width={100}
                    height={90}
                    sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
                    priority={true}
                    alt="Подшипник HMG-CRM синего цвета"
                  />
                </td>
                <td className={cell}>
                  <Image
                    src="/image/pages/hmgFWB/cofee.jpg"
                    width={100}
                    height={90}
                    sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
                    priority={true}
                    alt="Подшипник HMG-CRB кофейного цвета"
                  />
                </td>
                <td className={cell}>
                  <Image
                    src="/image/pages/hmgFWB/black.jpg"
                    width={100}
                    height={90}
                    sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
                    priority={true}
                    alt="Подшипник HMG-CRG черного цвета"
                  />
                </td>
                <td className={cell}>
                  <Image
                    src="/image/pages/hmgFWB/white.jpg"
                    width={100}
                    height={90}
                    sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
                    priority={true}
                    alt="Подшипник HMG-CRP белого цвета"
                  />
                </td>
                <td className={cell}>
                  <Image
                    src="/image/pages/hmgFWB/green.jpg"
                    width={100}
                    height={90}
                    sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
                    priority={true}
                    alt="Подшипник HMG-CRW зеленого цвета"
                  />
                </td>
                <td className={cell}>
                  <Image
                    src="/image/pages/hmgFWB/grey.jpg"
                    width={100}
                    height={90}
                    sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
                    priority={true}
                    alt="Подшипник HMG-CRF серого цвета"
                  />
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
          Этот тип материалов предназначен для применений, связанных с
          вращением, колебательным движением и необходимостью частого
          перезапуска. Они широко используются в сельскохозяйственной технике,
          подъемных машинах, погрузочно-разгрузочных машинах, строительной
          технике, судах, соединениях гидроцилиндров и проушинах штоков.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
