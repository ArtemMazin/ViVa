import Htag from '@/components/Htag/Htag';
import styles from './hmgFWB.module.css';
import React from 'react';
import Image from 'next/image';

const Table = () => {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>
        <Htag tag="h2" border="left">
          Сводная таблица технических данных материала HMG-FWB
        </Htag>
      </caption>
      <tbody>
        <tr>
          <td className={styles.cell}>Тип материала</td>
          <td className={styles.cell}>Стандарт</td>
          <td className={styles.cell}>Единицы</td>
          <td className={styles.cell}>HMG-CRM</td>
          <td className={styles.cell}>HMG-CRB</td>
          <td className={styles.cell}>HMG-CRG</td>
          <td className={styles.cell}>HMG-CRP</td>
          <td className={styles.cell}>HMG-CRW</td>
          <td className={styles.cell}>HMG-CRF</td>
        </tr>
        <tr>
          <td className={styles.cell}>Категория</td>
          <td className={styles.cell}>&nbsp;</td>
          <td className={styles.cell}>&nbsp;</td>
          <td className={styles.cell}>Общий</td>
          <td className={styles.cell}>Стандартный</td>
          <td className={styles.cell}>Нагруженный</td>
          <td className={styles.cell}>Скоростной</td>
          <td className={styles.cell}>Водостойкий</td>
          <td className={styles.cell}>Экономичный</td>
        </tr>
        <tr>
          <td className={styles.cell}>Плотность</td>
          <td className={styles.cell}>ISO1183</td>
          <td className={styles.cell}>
            г/см<sup>3</sup>
          </td>
          <td className={styles.cell}>1.95</td>
          <td className={styles.cell}>1.95</td>
          <td className={styles.cell}>1.95</td>
          <td className={styles.cell}>1.95</td>
          <td className={styles.cell}>1.95</td>
          <td className={styles.cell}>1.95</td>
        </tr>
        <tr>
          <td className={styles.cell}>Макс. впитывание воды</td>
          <td className={styles.cell}>ISO62</td>
          <td className={styles.cell}>%</td>
          <td className={styles.cell}>0.1</td>
          <td className={styles.cell}>0.1</td>
          <td className={styles.cell}>0.1</td>
          <td className={styles.cell}>0.1</td>
          <td className={styles.cell}>0.1</td>
          <td className={styles.cell}>0.5</td>
        </tr>
        <tr>
          <td className={styles.cell}>Макс. PV</td>
          <td className={styles.cell}>ITS026</td>
          <td className={styles.cell}>
            Н/мм<sup>2</sup>×м/с
          </td>
          <td className={styles.cell}>1.8</td>
          <td className={styles.cell}>1.8</td>
          <td className={styles.cell}>2.0</td>
          <td className={styles.cell}>1.6</td>
          <td className={styles.cell}>1.8</td>
          <td className={styles.cell}>1.2</td>
        </tr>
        <tr>
          <td className={styles.cell}>Коэффициент трения</td>
          <td className={styles.cell}>ITS025</td>
          <td className={styles.cell}>μ</td>
          <td className={styles.cell}>0.05～0.15</td>
          <td className={styles.cell}>0.03～0.12</td>
          <td className={styles.cell}>0.03～0.12</td>
          <td className={styles.cell}>0.02～0.12</td>
          <td className={styles.cell}>0.02～0.10</td>
          <td className={styles.cell}>0.08～0.30</td>
        </tr>
        <tr>
          <td className={styles.cell}>Непрерывная рабочая температура.</td>
          <td className={styles.cell}>ITS029</td>
          <td className={styles.cell}>℃</td>
          <td className={styles.cell}>+160</td>
          <td className={styles.cell}>+160</td>
          <td className={styles.cell}>+160</td>
          <td className={styles.cell}>+160</td>
          <td className={styles.cell}>+100</td>
          <td className={styles.cell}>+130</td>
        </tr>
        <tr>
          <td className={styles.cell}>Мгновенная рабочая температура.</td>
          <td className={styles.cell}>ITS029</td>
          <td className={styles.cell}>℃</td>
          <td className={styles.cell}>+180</td>
          <td className={styles.cell}>+180</td>
          <td className={styles.cell}>+180</td>
          <td className={styles.cell}>+180</td>
          <td className={styles.cell}>+160</td>
          <td className={styles.cell}>+160</td>
        </tr>
        <tr>
          <td className={styles.cell}>Минимальная рабочая температура.</td>
          <td className={styles.cell}>ITS029</td>
          <td className={styles.cell}>℃</td>
          <td className={styles.cell}>-100</td>
          <td className={styles.cell}>-100</td>
          <td className={styles.cell}>-100</td>
          <td className={styles.cell}>-100</td>
          <td className={styles.cell}>-100</td>
          <td className={styles.cell}>-40</td>
        </tr>
        <tr>
          <td className={styles.cell}>Макс. скорость</td>
          <td className={styles.cell}>ITS032</td>
          <td className={styles.cell}>м/с</td>
          <td className={styles.cell}>0.20</td>
          <td className={styles.cell}>0.20</td>
          <td className={styles.cell}>0.20</td>
          <td className={styles.cell}>0.40</td>
          <td className={styles.cell}>0.40</td>
          <td className={styles.cell}>0.13</td>
        </tr>
        <tr>
          <td className={styles.cell}>Прочность на сжатие</td>
          <td className={styles.cell}>ITS033</td>
          <td className={styles.cell}>МПа</td>
          <td className={styles.cell}>420</td>
          <td className={styles.cell}>420</td>
          <td className={styles.cell}>420</td>
          <td className={styles.cell}>420</td>
          <td className={styles.cell}>420</td>
          <td className={styles.cell}>300</td>
        </tr>
        <tr>
          <td className={styles.cell}>Макс. статическая нагрузка</td>
          <td className={styles.cell}>ITS027</td>
          <td className={styles.cell}>МПа</td>
          <td className={styles.cell}>240</td>
          <td className={styles.cell}>240</td>
          <td className={styles.cell}>240</td>
          <td className={styles.cell}>240</td>
          <td className={styles.cell}>240</td>
          <td className={styles.cell}>150</td>
        </tr>
        <tr>
          <td className={styles.cell}>Макс. динамическая нагрузка</td>
          <td className={styles.cell}>ITS028</td>
          <td className={styles.cell}>МПа</td>
          <td className={styles.cell}>120</td>
          <td className={styles.cell}>140</td>
          <td className={styles.cell}>160</td>
          <td className={styles.cell}>30</td>
          <td className={styles.cell}>120</td>
          <td className={styles.cell}>45</td>
        </tr>
        <tr>
          <td className={styles.cell}>Твердость по Шору</td>
          <td className={styles.cell}>ISO868</td>
          <td className={styles.cell}>D</td>
          <td className={styles.cell}>95</td>
          <td className={styles.cell}>95</td>
          <td className={styles.cell}>95</td>
          <td className={styles.cell}>95</td>
          <td className={styles.cell}>95</td>
          <td className={styles.cell}>90</td>
        </tr>
        <tr>
          <td className={styles.cell}>Коэф. теплового расширения (25～150℃)</td>
          <td className={styles.cell}>ISO11359</td>
          <td className={styles.cell}>
            10<sup>-6</sup>*K<sup>-1</sup>
          </td>
          <td className={styles.cell}>13</td>
          <td className={styles.cell}>13</td>
          <td className={styles.cell}>13</td>
          <td className={styles.cell}>13</td>
          <td className={styles.cell}>13</td>
          <td className={styles.cell}>40</td>
        </tr>
        <tr>
          <td colSpan="3" className={styles.cell}>
            Цвет
          </td>
          <td className={styles.cell}>
            <Image
              src="/image/pages/hmgFWB/blue.jpg"
              width={100}
              height={90}
              sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
              priority={true}
              alt="Подшипник HMG-CRM синего цвета"
            />
          </td>
          <td className={styles.cell}>
            <Image
              src="/image/pages/hmgFWB/cofee.jpg"
              width={100}
              height={90}
              sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
              priority={true}
              alt="Подшипник HMG-CRB кофейного цвета"
            />
          </td>
          <td className={styles.cell}>
            <Image
              src="/image/pages/hmgFWB/black.jpg"
              width={100}
              height={90}
              sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
              priority={true}
              alt="Подшипник HMG-CRG черного цвета"
            />
          </td>
          <td className={styles.cell}>
            <Image
              src="/image/pages/hmgFWB/white.jpg"
              width={100}
              height={90}
              sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
              priority={true}
              alt="Подшипник HMG-CRP белого цвета"
            />
          </td>
          <td className={styles.cell}>
            <Image
              src="/image/pages/hmgFWB/green.jpg"
              width={100}
              height={90}
              sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
              priority={true}
              alt="Подшипник HMG-CRW зеленого цвета"
            />
          </td>
          <td className={styles.cell}>
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
  );
};

export default Table;
