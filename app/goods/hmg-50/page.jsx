import Image from 'next/image';
import React from 'react';
import { flex, title, subtitle, text, table, cell, image, section, scroll } from './hmg50.module.css';

const hmg50 = () => {
  return (
    <div className={`${section} container`}>
      <div className={flex}>
        <Image
          src='/image/pages/hmg50.jpg'
          // fill
          width={600}
          height={450}
          alt='Подшипники HMG-50'
          className={image}
          priority={true}
        />
        <div>
          <h1 className={title}>HMG-50</h1>
          <h2 className={subtitle}>Описание</h2>
          <p className={text}>
            The material is with good wear resistance, low friction coefficient, corrosion resistance and high chemical
            resistance. It is suitable for the applications where the lubricating is hard to or not accessible. The
            machining requirement of the mating parts is not critical, so this kind of materials are widely used in
            general industry.
          </p>
        </div>
      </div>
      <div className={flex}>
        <div>
          <h2 className={subtitle}>Структура</h2>
          <p className={text}>
            1. PTFE/Fibre mixture thickness 0.01~0.03mm, provides an excellent initial transferred film, which
            effectively coats the mating surfaces of the bearing assembly to establish the self-lubricating feature.
          </p>
          <p className={text}>
            2. Sintered bronze powder thickness 0.20-0.35mm, provides strong mechanical bond and excellent thermal
            conductivity.
          </p>
          <p className={text}>3. Steel backing Provides mechanical strength.</p>
        </div>

        <Image
          src='/image/pages/hmg50structure.png'
          // fill
          width={300}
          height={240}
          alt='Структура материала HMG-50'
          // className={image}
          priority={true}
        />
      </div>
      <div className={scroll}>
        <h2 className={subtitle}>Технические данные</h2>
        <table
          border='1'
          cellpadding='0'
          cellspacing='0'
          width='100%'
          className={table}>
          <tbody>
            <tr>
              <td
                rowspan='3'
                style={{ width: '16%' }}
                className={cell}>
                <span style={{ width: '33%' }}>Max. load</span>
              </td>
              <td
                style={{ width: '16%' }}
                className={cell}>
                <span style={{ width: '33%' }}>Static</span>
              </td>
              <td
                style={{ width: '16%' }}
                className={cell}>
                250N/mm²
              </td>
              <td
                rowspan='6'
                className={cell}>
                &nbsp;
              </td>
              <td
                colspan='2'
                style={{ width: '28%' }}
                className={cell}>
                <span style={{ width: '33%' }}>Friction coefficient</span>
              </td>
              <td
                style={{ width: '20%' }}
                className={cell}>
                0.03~0.20
              </td>
            </tr>
            <tr>
              <td className={cell}>
                <span style={{ width: '33%' }}>Very low speed</span>
              </td>
              <td className={cell}>140N/mm²</td>
              <td
                rowspan='2'
                className={cell}>
                Max.<span style={{ fontSize: '12pt' }}>speed</span>
              </td>
              <td className={cell}>
                <span style={{ width: '33%' }}>Dry running</span>
              </td>
              <td className={cell}>2m/s</td>
            </tr>
            <tr>
              <td className={cell}>
                <span style={{ width: '33%' }}>Rotating oscillating</span>
              </td>
              <td className={cell}>60N/mm²</td>
              <td className={cell}>
                <span style={{ width: '33%' }}>Hydrodynamic operation</span>
              </td>
              <td className={cell}>&gt;2m/s</td>
            </tr>
            <tr>
              <td
                rowspan='2'
                className={cell}>
                <span style={{ width: '33%' }}>Max. PV Dry running</span>
              </td>
              <td className={cell}>
                <span style={{ width: '33%' }}>Short-term operation</span>
              </td>
              <td className={cell}>3.6N/mm²*m/s</td>
              <td
                colspan='2'
                className={cell}>
                <span style={{ width: '33%' }}>Thermal conductivity</span>
              </td>
              <td className={cell}>
                42W(m*K)<sup>-1</sup>
              </td>
            </tr>
            <tr>
              <td className={cell}>
                <span style={{ width: '33%' }}>Continuous operation</span>
              </td>
              <td className={cell}>1.8N/mm²*m/s</td>
              <td
                colspan='2'
                className={cell}>
                <span style={{ width: '33%' }}>Coefficient of thermal expansion</span>
              </td>
              <td className={cell}>
                11*10<sup>-6</sup>*K<sup>-1</sup>
              </td>
            </tr>
            <tr>
              <td
                colspan='2'
                className={cell}>
                <span style={{ width: '33%' }}>Operation Temperature range</span>
              </td>
              <td className={cell}>-195℃～+280℃</td>
              <td
                colspan='2'
                className={cell}>
                &nbsp;
              </td>
              <td className={cell}>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default hmg50;
