import Htag from '@/components/Htag/Htag';
import styles from './hmg650.module.css';
import React from 'react';

const TableBottom = () => {
  return (
    <table className={styles.table}>
      <caption className={styles.caption}>
        <Htag tag="h2" border="left">
          Твердые смазочные материалы
        </Htag>
      </caption>
      <tbody>
        <tr>
          <td className={styles.cell}>Смазка</td>
          <td className={styles.cell}>Особенность</td>
          <td className={styles.cell}>Типичные области применения</td>
        </tr>
        <tr>
          <td className={styles.cell}>
            SL1
            <br />
            Графит + добавки
          </td>
          <td className={styles.cell}>
            Хорошая химическая стойкость и низкие коэффициенты трения.
            <br /> Рабочая температура до +400°C
          </td>
          <td className={styles.cell}>
            Подходит для общепромышленного применения, <br />
            подверженного воздействию атмосферы.
          </td>
        </tr>
        <tr>
          <td className={styles.cell}>
            SL4
            <br />
            PTFE+MoS2+добавки
          </td>
          <td className={styles.cell}>
            Низкий коэффициент трения и хорошая смазка водой.
            <br />
            Рабочая температура до +300°C
          </td>
          <td className={styles.cell}>
            Подходит для условий водной смазки. Приложения включают суда,
            <br />
            гидравлические турбины и паровые турбины.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableBottom;
