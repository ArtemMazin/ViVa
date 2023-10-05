import Image from 'next/image';
import React from 'react';
import { flex, title, subtitle, text, table, cell, image, section, scroll } from './hmgFR.module.css';

const hmgFR = () => {
  return (
    <main className={`${section} container`}>
      <section className={flex}>
        <Image
          src='/image/pages/hmgFR/hmgFR.jpg'
          width={600}
          height={450}
          alt='Подшипники HMG-50'
          className={image}
        />
        <div>
          <h1 className={title}>HMG-FR</h1>
          <h2 className={subtitle}>Описание</h2>
          <p className={text}>
            Металлическая тканевая основа обеспечивает износостойкость и самосмазывающиеся свойства, а ее легкий вес
            подходит для ручной и автоматической сборки. Окончательную точность установки и крутящий момент можно
            отрегулировать путем калибровки после установки втулки. Доступны два материала: CSB-FR — тканевая основа из
            бронзы и CSB-FRS — тканевая основа из нержавеющей стали. Последний имеет лучшую устойчивость к коррозии.
          </p>
        </div>
      </section>
      <section className={flex}>
        <div>
          <h2 className={subtitle}>Структура</h2>
          <p className={text}>1. Лента из ПТФЭ обеспечивает функцию самосмазывания.</p>
          <p className={text}>2. Металлическая ткань обеспечивает механическую прочность и теплопроводность.</p>
        </div>

        <Image
          src='/image/pages/hmgFR/hmgFRstructure.png'
          width={300}
          height={240}
          alt='Структура материала HMG-50'
        />
      </section>
      <section>
        <h2 className={subtitle}>Технические данные</h2>
        <div className={scroll}>
          <table className={table}>
            <tbody>
              <tr></tr>
            </tbody>
            <tbody>
              <tr>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  Стандартная толщина стенки, мм
                </td>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  HMG-FR / Сетка из бронзы
                </td>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  HMG-FRS / Сетка из нержавеющей стали
                </td>
                <td
                  rowSpan='4'
                  style={{ width: '4%' }}
                  className={cell}>
                  &nbsp;
                </td>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  Максимальная нагрузка
                </td>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  Комнатная температура
                </td>
                <td
                  style={{ width: '16%' }}
                  className={cell}>
                  80 Н/мм<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td className={cell}>0.48</td>
                <td className={cell}>*</td>
                <td className={cell}>*</td>
                <td className={cell}>Максимальная скорость</td>
                <td className={cell}>Сухой ход</td>
                <td className={cell}>1 м/с</td>
              </tr>
              <tr>
                <td className={cell}>0.78</td>
                <td className={cell}>*</td>
                <td className={cell}>
                  <span>*</span>
                </td>
                <td
                  colSpan='2'
                  className={cell}>
                  Диапазон рабочих температур
                </td>
                <td className={cell}>-195℃～+260℃</td>
              </tr>
              <tr>
                <td className={cell}>0.98</td>
                <td className={cell}>*</td>
                <td className={cell}>&nbsp;</td>
                <td
                  colSpan='2'
                  className={cell}>
                  Коэффициент трения
                </td>
                <td className={cell}>0.03~0.20</td>
              </tr>
            </tbody>
            <tbody></tbody>
          </table>
        </div>
      </section>
      <section>
        <h2 className={subtitle}>Типичные области применения</h2>
        <p className={text}>
          Материал подходит для изготовления дверных петель, компонентов клапанов, машин общего назначения и
          текстильного оборудования. Это легкий по весу материал.
        </p>
      </section>
    </main>
  );
};

export default hmgFR;
