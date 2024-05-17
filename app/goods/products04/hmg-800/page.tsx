import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import styles from './hmg800-815.module.css';
import Image from 'next/image';
import React from 'react';
import Table from './Table';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-800/815"
        links={[
          { href: process.env.URL, name: 'Главнaя' },
          { href: `${process.env.URL}/goods`, name: 'Товары' },
          {
            href: `${process.env.URL}/goods/products04`,
            name: 'Металлические подшипники, требующие смазки',
          },
        ]}
      />
      <section className={styles.flex}>
        <Image
          src="/image/pages/hmg800-815/hmg800-815.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-800/815"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-800/815</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag>
            Бронзово-свинцовый сплав HMG-800 представляет собой CuSb10Pb10,
            также доступен малосвинцовистый материал HMG-815 со сплавом
            CuSn10Pb5. Эти материалы обладают низкими коэффициентами трения и
            высокой износостойкостью, что делает их оптимальными для работы в
            смазываемых условиях. Для дополнительного улучшения смазочных
            характеристик в конструкции опционально могут быть предусмотрены
            масляные канавки или масляные отверстия.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag>
            1. Спеченный бронзово-алюминиево-свинцовый сплав обеспечивает
            превосходные самосмазывающиеся свойства, а также обладает высокой
            усталостной прочностью и антизадирными характеристиками.
          </Ptag>
          <Ptag>
            2. Стальная основа придает подшипнику требуемую механическую
            прочность.
          </Ptag>
        </div>

        <Image
          src="/image/pages/hmg800-815/hmg800-815structure.png"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-800/815"
        />
      </section>
      <section>
        <div className={styles.scroll}>
          <Table />
        </div>
      </section>
      <section>
        <Htag tag="h2" border="left">
          Типичные области применения
        </Htag>
        <Ptag>
          Данные материалы оптимальны для применения при средних нагрузках и
          средних-низких скоростях вращения. Подшипники могут эксплуатироваться
          в запыленной среде и в условиях загрязнений. Типичные области
          применения включают шатуны, опорные катки ходовой части, проушины
          штоков гидроцилиндров, погрузочно-разгрузочное оборудование,
          сельскохозяйственную и лесную технику и т.д. Оба материала содержат
          свинец, использование которого ограничено для некоторых специальных
          деталей согласно соответствующим законам или нормативам.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
