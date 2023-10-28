import Htag from '@/components/Htag/Htag';
import styles from './hmg260.module.css';
import React from 'react';

const Table = () => {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>
        <Htag tag="h2" border="left">
          Сводная таблица технических данных материала HMG-260
        </Htag>
      </caption>
      <tbody>
        <tr>
          <td colSpan="2" className={styles.cell}>
            Типы материалов
          </td>
          <td className={styles.cell}>HMG-320</td>
          <td className={styles.cell}>HMG-262</td>
          <td className={styles.cell}>HMG-265</td>
        </tr>
        <tr>
          <td rowSpan="2" className={styles.cell}>
            Макс. нагрузка
          </td>
          <td className={styles.cell}>Статический режим</td>
          <td className={styles.cell}>250 МПа</td>
          <td className={styles.cell}>300 МПа</td>
          <td className={styles.cell}>300 МПа</td>
        </tr>
        <tr>
          <td className={styles.cell}>Динамический режим</td>
          <td className={styles.cell}>100 МПа</td>
          <td className={styles.cell}>100 МПа</td>
          <td className={styles.cell}>150 МПа</td>
        </tr>
        <tr>
          <td colSpan="2" className={styles.cell}>
            Макс. скорость
          </td>
          <td className={styles.cell}>10 м/с</td>
          <td className={styles.cell}>10 м/с</td>
          <td className={styles.cell}>10 м/с</td>
        </tr>
        <tr>
          <td colSpan="2" className={styles.cell}>
            Макс. PV
          </td>
          <td className={styles.cell}>
            1.5 Н/мм<sup>2</sup>*м/с
          </td>
          <td className={styles.cell}>
            2.0 Н/мм<sup>2</sup>*м/с
          </td>
          <td className={styles.cell}>
            2.5 Н/мм<sup>2</sup>*м/с
          </td>
        </tr>
        <tr>
          <td colSpan="2" className={styles.cell}>
            Плотность
          </td>
          <td className={styles.cell}>
            7.8 г/см<sup>3</sup>
          </td>
          <td className={styles.cell}>
            7.8 г/см<sup>3</sup>
          </td>
          <td className={styles.cell}>
            7.8 г/см<sup>3</sup>
          </td>
        </tr>
        <tr>
          <td colSpan="2" className={styles.cell}>
            Твердость
          </td>
          <td className={styles.cell}>≥550 HV1</td>
          <td className={styles.cell}>≥550 HV1</td>
          <td className={styles.cell}>≥550 HV1</td>
        </tr>
        <tr>
          <td colSpan="2" className={styles.cell}>
            Коэффициент температурного расширения
          </td>
          <td className={styles.cell}>0.05~0.2</td>
          <td className={styles.cell}>0.03~0.2</td>
          <td className={styles.cell}>0.03~0.</td>
        </tr>
        <tr>
          <td className={styles.cell}>Коэффициент трения</td>
          <td className={styles.cell}>Со смазкой</td>
          <td className={styles.cell}>0.05~0.2</td>
          <td className={styles.cell}>0.05~0.2</td>
          <td className={styles.cell}>0.05~0.2</td>
        </tr>
        <tr>
          <td colSpan="2" className={styles.cell}>
            Диапазон рабочих температур
          </td>
          <td className={styles.cell}> -40~+250°C</td>
          <td className={styles.cell}> -40~+250°C</td>
          <td className={styles.cell}> -40~+250°C</td>
        </tr>
        <tr>
          <td rowSpan="2" className={styles.cell}>
            Сопряженный вал
          </td>
          <td className={styles.cell}>Шероховатость</td>
          <td className={styles.cell}>Ra＜0.8</td>
          <td className={styles.cell}>Ra＜0.8</td>
          <td className={styles.cell}>Ra＜0.8</td>
        </tr>
        <tr>
          <td className={styles.cell}>Твердость</td>
          <td className={styles.cell}>HRC 58-62</td>
          <td className={styles.cell}>HRC 58-62</td>
          <td className={styles.cell}>HRC 58-62</td>
        </tr>
        <tr>
          <td colSpan="2" className={styles.cell}>
            Рекомендуемый период смазки
          </td>
          <td className={styles.cell}>＜50 часов</td>
          <td className={styles.cell}>50-100 часов</td>
          <td className={styles.cell}>250 часов</td>
        </tr>
        <tr>
          <td colSpan="5" className={styles.cell}>
            Рекомендуемый допуск / Корпус: H7, Вал: f7
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
