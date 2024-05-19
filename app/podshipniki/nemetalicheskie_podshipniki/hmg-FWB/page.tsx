import Image from 'next/image';
import React from 'react';
import styles from './hmgFWB.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Table from './Table';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title:
    'Композитный подшипник HMG-FWB для низких оборотов и высоких нагрузок | ВиВа Групп',
  description:
    'Купите высококачественный композитный подшипник HMG-FWB от ВиВа Групп. Изготовлен из стекловолокна с эпоксидной смолой, что обеспечивает высокую химическую стойкость. Идеален для применения при низких скоростях вращения и высоких нагрузках.',
  openGraph: {
    title:
      'Композитный подшипник HMG-FWB для низких оборотов и высоких нагрузок | ВиВа Групп',
    description:
      'Купите высококачественный композитный подшипник HMG-FWB от ВиВа Групп. Изготовлен из стекловолокна с эпоксидной смолой, что обеспечивает высокую химическую стойкость. Идеален для применения при низких скоростях вращения и высоких нагрузках.',
    url: process.env.URL + '/podshipniki/nemetalicheskie_podshipniki/hmg-FWB',
    images: [
      {
        url: '/image/nemetalicheskie_podshipniki/hmg-FWB.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-FWB"
        links={[
          { href: process.env.URL, name: 'Главнaя' },
          { href: `${process.env.URL}/podshipniki`, name: 'Подшипники' },
          {
            href: `${process.env.URL}/podshipniki/nemetalicheskie_podshipniki`,
            name: 'Неметаллические самосмазывающиеся подшипники',
          },
        ]}
      />
      <section className={styles.flex}>
        <Image
          src="/image/pages/hmgFWB/hmgFWB.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-FWB"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-FWB</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag>
            Подшипники из стекловолокна и волокнами ПТФЭ обладают превосходной
            износостойкостью. Этот материал оптимален для эксплуатации в
            запыленной среде при высоких нагрузках. ПТФЭ обеспечивает низкий
            коэффициент трения и самосмазывающиеся свойства. Данный материал
            идеален для применения при низких скоростях вращения и высоких
            нагрузках. Стекловолокно в сочетании с эпоксидной смолой придает
            высокую химическую стойкость.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag>
            1. Слой со специальными волокнами и волокнами ПТФЭ обеспечивает
            самосмазывающиеся свойства подшипников.
          </Ptag>
          <Ptag>
            2. Армированное стекловолокно с эпоксидной смолой придает
            необходимую механическую прочность и коррозионную стойкость.
          </Ptag>
        </div>
        <Image
          src="/image/pages/hmgFWB/hmgFWBstructure.jpg"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-FWB"
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
        <Ptag margin="bottom">
          Данный тип материалов разработан для вращательного и
          возвратно-поступательного движения, а также для условий, требующих
          частых пусков и остановок. Они широко применяются в
          сельскохозяйственной технике, подъемных механизмах,
          погрузочно-разгрузочном оборудовании, строительной технике, судах,
          соединениях гидроцилиндров и проушинах штоков.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
