import Htag from '@/components/Htag/Htag';
import styles from './hmg650GT.module.css';
import React from 'react';

const Table = () => {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>
        <Htag tag="h2" border="left">
          Сводная таблица технических данных материала HMG-650GT
        </Htag>
      </caption>
      <tbody>
        <tr>
          <td rowSpan="2" className={styles.cell}>
            Макс. нагрузка
          </td>
          <td className={styles.cell}>Статическая</td>
          <td className={styles.cell}>
            <span>
              250 Н/мм<sup>2</sup>
            </span>
          </td>
          <td rowSpan="6" className={styles.cell}>
            &nbsp;
          </td>
          <td className={styles.cell}>Диапазон рабочих температур</td>
          <td className={styles.cell}>-100℃~+300℃</td>
        </tr>
        <tr>
          <td className={styles.cell}>Динамическая</td>
          <td className={styles.cell}>
            <span>
              100 Н/мм<sup>2</sup>
            </span>
          </td>
          <td className={styles.cell}>Коэффициент трения</td>
          <td className={styles.cell}>0.03~0.20</td>
        </tr>
        <tr>
          <td rowSpan="2" className={styles.cell}>
            Максимальная скорость
          </td>
          <td className={styles.cell}>Сухой режим</td>
          <td className={styles.cell}>0.5 м/с</td>
          <td className={styles.cell}>Теплопроводность</td>
          <td className={styles.cell}>
            60 Вт(м*К)<sup>-1</sup>
          </td>
        </tr>
        <tr>
          <td className={styles.cell}>Со смазкой</td>
          <td className={styles.cell}>1.0 м/с</td>
          <td className={styles.cell}>Коэф. теплового расширения</td>
          <td className={styles.cell}>
            19*10<sup>-6</sup>*K<sup>-1</sup>
          </td>
        </tr>
        <tr>
          <td colSpan="2" className={styles.cell}>
            Макс. PV
          </td>
          <td className={styles.cell}>
            3.25 Н/мм<sup>2</sup>*м/с
          </td>
          <td className={styles.cell}>Прочность соединения сплавов</td>
          <td className={styles.cell}>
            150 Н/мм<sup>2</sup>
          </td>
        </tr>
        <tr>
          <td colSpan="2" className={styles.cell}>
            Твердость сплава
          </td>
          <td className={styles.cell}>HB＞210</td>
          <td className={styles.cell}>&nbsp;</td>
          <td className={styles.cell}>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
