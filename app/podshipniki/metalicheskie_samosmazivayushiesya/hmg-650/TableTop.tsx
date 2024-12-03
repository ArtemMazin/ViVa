import Htag from '@/components/Htag/Htag';
import styles from './hmg650.module.css';
import React from 'react';

const TableTop = () => {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>
        <Htag tag="h2" border="left">
          Сводная таблица технических данных материала HMG-650
        </Htag>
      </caption>
      <tbody>
        <tr>
          <td colSpan={2} className={styles.cell}>
            Тип
          </td>
          <td className={styles.cell}>650</td>
          <td className={styles.cell}>650S5</td>
          <td className={styles.cell}>650W1</td>
          <td className={styles.cell}>650W3</td>
          <td className={styles.cell}>650S1</td>
          <td className={styles.cell}>650S2</td>
          <td className={styles.cell}>650S3</td>
        </tr>
        <tr>
          <td colSpan={2} className={styles.cell}>
            Материал
          </td>
          <td colSpan={4} className={styles.cell}>
            CuZn25AI5Mn4Fe3
          </td>
          <td className={styles.cell}>CuSn5Pb5Zn5</td>
          <td className={styles.cell}>CuAl10Ni5Fe5</td>
          <td className={styles.cell}>CuSn12</td>
        </tr>
        <tr>
          <td colSpan={2} className={styles.cell}>
            Плотность
          </td>
          <td colSpan={4} className={styles.cell}>
            7.8
          </td>
          <td className={styles.cell}>8.9</td>
          <td className={styles.cell}>7.8</td>
          <td className={styles.cell}>8.9</td>
        </tr>
        <tr>
          <td colSpan={2} className={styles.cell}>
            Твердость HB
          </td>
          <td className={styles.cell}>≥210</td>
          <td className={styles.cell}>≥250</td>
          <td className={styles.cell}>≥210</td>
          <td className={styles.cell}>≥230</td>
          <td className={styles.cell}>≥70</td>
          <td className={styles.cell}>≥150</td>
          <td className={styles.cell}>≥75</td>
        </tr>
        <tr>
          <td colSpan={2} className={styles.cell}>
            Предел прочности МПа
          </td>
          <td className={styles.cell}>≥750</td>
          <td className={styles.cell}>≥800</td>
          <td className={styles.cell}>≥755</td>
          <td className={styles.cell}>≥755</td>
          <td className={styles.cell}>≥250</td>
          <td className={styles.cell}>≥500</td>
          <td className={styles.cell}>≥270</td>
        </tr>
        <tr>
          <td colSpan={2} className={styles.cell}>
            Предел текучести МПа
          </td>
          <td className={styles.cell}>≥450</td>
          <td className={styles.cell}>≥450</td>
          <td className={styles.cell}>≥400</td>
          <td className={styles.cell}>≥400</td>
          <td className={styles.cell}>≥90</td>
          <td className={styles.cell}>≥260</td>
          <td className={styles.cell}>≥150</td>
        </tr>
        <tr>
          <td colSpan={2} className={styles.cell}>
            Удлинение %
          </td>
          <td className={styles.cell}>≥12</td>
          <td className={styles.cell}>≥8</td>
          <td className={styles.cell}>≥12</td>
          <td className={styles.cell}>≥12</td>
          <td className={styles.cell}>≥13</td>
          <td className={styles.cell}>≥10</td>
          <td className={styles.cell}>≥5</td>
        </tr>
        <tr>
          <td colSpan={2} className={styles.cell}>
            Коэффициент теплового расширения
          </td>
          <td colSpan={4} className={styles.cell}>
            1.9x10<sup>-5</sup>/°C
          </td>
          <td className={styles.cell}>
            1.8x10<sup>-5</sup>/°C
          </td>
          <td className={styles.cell}>
            1.6x10<sup>-5</sup>/°C
          </td>
          <td className={styles.cell}>
            1.8x10<sup>-5</sup>/°C
          </td>
        </tr>
        <tr>
          <td colSpan={2} className={styles.cell}>
            Макс. рабочая температура
          </td>
          <td colSpan={4} className={styles.cell}>
            -40~+250°C
          </td>
          <td colSpan={3} className={styles.cell}>
            -40~+400°C
          </td>
        </tr>
        <tr>
          <td colSpan={2} className={styles.cell}>
            Макс. нагрузка МПа
          </td>
          <td className={styles.cell}>50</td>
          <td className={styles.cell}>75</td>
          <td className={styles.cell}>75</td>
          <td className={styles.cell}>100</td>
          <td colSpan={3} className={styles.cell}>
            50
          </td>
        </tr>
        <tr>
          <td rowSpan={2} className={styles.cell}>
            Макс. скорость м/с
          </td>
          <td className={styles.cell}>Сухой</td>
          <td className={styles.cell}>0.5</td>
          <td className={styles.cell}>0.1</td>
          <td className={styles.cell}>0.5</td>
          <td className={styles.cell}>0.1</td>
          <td colSpan={3} className={styles.cell}>
            0.5
          </td>
        </tr>
        <tr>
          <td className={styles.cell}>Смазанный</td>
          <td className={styles.cell}>1</td>
          <td className={styles.cell}>0.25</td>
          <td className={styles.cell}>1</td>
          <td className={styles.cell}>0.25</td>
          <td colSpan={3} className={styles.cell}>
            2.5
          </td>
        </tr>
        <tr>
          <td rowSpan={2} className={styles.cell}>
            Макс. PV (Н/мм<sup>2</sup>*м/с)
          </td>
          <td className={styles.cell}>Сухой</td>
          <td colSpan={4} className={styles.cell}>
            1.65
          </td>
          <td colSpan={3} className={styles.cell}>
            1
          </td>
        </tr>
        <tr>
          <td className={styles.cell}>Смазанный</td>
          <td colSpan={4} className={styles.cell}>
            3.25
          </td>
          <td colSpan={3} className={styles.cell}>
            1.65
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableTop;
