import Htag from '@/components/Htag/Htag';
import styles from './hmgFR.module.css';
import React from 'react';

const Table = () => {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>
        <Htag tag="h2" border="left">
          Сводная таблица технических данных материала HMG-FR
        </Htag>
      </caption>
      <tbody>
        <tr></tr>
      </tbody>
      <tbody>
        <tr>
          <td style={{ width: '16%' }} className={styles.cell}>
            Стандартная толщина стенки, мм
          </td>
          <td style={{ width: '16%' }} className={styles.cell}>
            HMG-FR / Сетка из бронзы
          </td>
          <td style={{ width: '16%' }} className={styles.cell}>
            HMG-FRS / Сетка из нержавеющей стали
          </td>
          <td rowSpan={4} style={{ width: '4%' }} className={styles.cell}>
            &nbsp;
          </td>
          <td style={{ width: '16%' }} className={styles.cell}>
            Максимальная нагрузка
          </td>
          <td style={{ width: '16%' }} className={styles.cell}>
            Комнатная температура
          </td>
          <td style={{ width: '16%' }} className={styles.cell}>
            80 Н/мм<sup>2</sup>
          </td>
        </tr>
        <tr>
          <td className={styles.cell}>0.48</td>
          <td className={styles.cell}>*</td>
          <td className={styles.cell}>*</td>
          <td className={styles.cell}>Максимальная скорость</td>
          <td className={styles.cell}>Сухой ход</td>
          <td className={styles.cell}>1 м/с</td>
        </tr>
        <tr>
          <td className={styles.cell}>0.78</td>
          <td className={styles.cell}>*</td>
          <td className={styles.cell}>
            <span>*</span>
          </td>
          <td colSpan={2} className={styles.cell}>
            Диапазон рабочих температур
          </td>
          <td className={styles.cell}>-195℃~+260℃</td>
        </tr>
        <tr>
          <td className={styles.cell}>0.98</td>
          <td className={styles.cell}>*</td>
          <td className={styles.cell}>&nbsp;</td>
          <td colSpan={2} className={styles.cell}>
            Коэффициент трения
          </td>
          <td className={styles.cell}>0.03~0.20</td>
        </tr>
      </tbody>
      <tbody></tbody>
    </table>
  );
};

export default Table;
