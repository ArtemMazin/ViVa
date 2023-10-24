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
} from './hmg260.module.css';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <main className={`${section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-260"
        links={[
          { href: 'https://vi-va.vercel.app/', name: 'Главнaя' },
          { href: 'https://vi-va.vercel.app/goods', name: 'Товары' },
          {
            href: 'https://vi-va.vercel.app/goods/products06',
            name: 'Высокопроизводительные стальные самосмазывающиеся подшипники',
          },
        ]}
      />
      <section className={flex}>
        <Image
          src="/image/pages/hmg260/hmg260.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-260"
          className={image}
        />
        <div>
          <Htag tag="h1">HMG-260</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag tag="p">
            По сравнению с традиционными подшипниками из закаленной стали,
            специально обработанный материал повышает твердость и снижает
            коэффициенты трения. Благодаря хорошей износостойкости материала,
            испытаниям на выносливость при высоких нагрузках, а также надлежащим
            условиям герметизации и смазки, комплексные характеристики этого
            материала даже лучше, чем у бронзового сплава с твердыми смазочными
            материалами. Он подходит для работы с высокими нагрузками и низкой
            скоростью, где существуют условия работы в условиях ударной и
            запыленной среды.
          </Ptag>
        </div>
      </section>
      <section className={flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag tag="p">
            Основанная на легированной стали, поверхность подшипника специально
            обработана для улучшения износостойкости и противозадирных свойств
            материала, а также значительно снижает коэффициенты трения
            подшипников. Специальная узорчатая поверхность увеличивает срок
            смазки.
          </Ptag>
        </div>
      </section>
      <section>
        <div className={scroll}>
          <table className={table}>
            <caption className={caption}>
              <Htag tag="h2" border="left">
                Сводная таблица технических данных материала HMG-260
              </Htag>
            </caption>
            <tbody>
              <tr>
                <td colSpan="2" className={cell}>
                  Типы материалов
                </td>
                <td className={cell}>HMG-320</td>
                <td className={cell}>HMG-262</td>
                <td className={cell}>HMG-265</td>
              </tr>
              <tr>
                <td rowSpan="2" className={cell}>
                  Макс. нагрузка
                </td>
                <td className={cell}>Статический режим</td>
                <td className={cell}>250 МПа</td>
                <td className={cell}>300 МПа</td>
                <td className={cell}>300 МПа</td>
              </tr>
              <tr>
                <td className={cell}>Динамический режим</td>
                <td className={cell}>100 МПа</td>
                <td className={cell}>100 МПа</td>
                <td className={cell}>150 МПа</td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Макс. скорость
                </td>
                <td className={cell}>10 м/с</td>
                <td className={cell}>10 м/с</td>
                <td className={cell}>10 м/с</td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Макс. PV
                </td>
                <td className={cell}>
                  1.5 Н/мм<sup>2</sup>*м/с
                </td>
                <td className={cell}>
                  2.0 Н/мм<sup>2</sup>*м/с
                </td>
                <td className={cell}>
                  2.5 Н/мм<sup>2</sup>*м/с
                </td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Плотность
                </td>
                <td className={cell}>
                  7.8 г/см<sup>3</sup>
                </td>
                <td className={cell}>
                  7.8 г/см<sup>3</sup>
                </td>
                <td className={cell}>
                  7.8 г/см<sup>3</sup>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Твердость
                </td>
                <td className={cell}>≥550 HV1</td>
                <td className={cell}>≥550 HV1</td>
                <td className={cell}>≥550 HV1</td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Коэффициент температурного расширения
                </td>
                <td className={cell}>0.05~0.2</td>
                <td className={cell}>0.03~0.2</td>
                <td className={cell}>0.03~0.</td>
              </tr>
              <tr>
                <td className={cell}>Коэффициент трения</td>
                <td className={cell}>Со смазкой</td>
                <td className={cell}>0.05~0.2</td>
                <td className={cell}>0.05~0.2</td>
                <td className={cell}>0.05~0.2</td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Диапазон рабочих температур
                </td>
                <td className={cell}> -40~+250°C</td>
                <td className={cell}> -40~+250°C</td>
                <td className={cell}> -40~+250°C</td>
              </tr>
              <tr>
                <td rowSpan="2" className={cell}>
                  Сопряженный вал
                </td>
                <td className={cell}>Шероховатость</td>
                <td className={cell}>Ra＜0.8</td>
                <td className={cell}>Ra＜0.8</td>
                <td className={cell}>Ra＜0.8</td>
              </tr>
              <tr>
                <td className={cell}>Твердость</td>
                <td className={cell}>HRC 58-62</td>
                <td className={cell}>HRC 58-62</td>
                <td className={cell}>HRC 58-62</td>
              </tr>
              <tr>
                <td colSpan="2" className={cell}>
                  Рекомендуемый период смазки
                </td>
                <td className={cell}>＜50 часов</td>
                <td className={cell}>50-100 часов</td>
                <td className={cell}>250 часов</td>
              </tr>
              <tr>
                <td colSpan="5" className={cell}>
                  Рекомендуемый допуск / Корпус: H7, Вал: f7
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
          Этот тип подшипников разработан для замены традиционных подшипников из
          закаленной стали, чтобы уменьшить стоимость технического обслуживания.
          Типичные области применения этого материала включают портовую технику,
          лесную технику, строительное оборудование, оси грузовых автомобилей и
          погрузочно-разгрузочную технику, а также проушины штоков
          гидравлических цилиндров и соединительные подшипники.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
