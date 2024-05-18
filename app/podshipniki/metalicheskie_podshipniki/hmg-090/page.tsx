import Image from 'next/image';
import React from 'react';
import styles from './hmg090.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import TableTop from './TableTop';
import TableBottom from './TableBottom';

const page = () => {
  return (
    <main className={`${styles.section} container`}>
      <BreadCrumbs
        currentLink="Подшипники HMG-090"
        links={[
          { href: process.env.URL, name: 'Главнaя' },
          { href: `${process.env.URL}/podshipniki`, name: 'Подшипники' },
          {
            href: `${process.env.URL}/podshipniki/metalicheskie_podshipniki`,
            name: 'Металлические подшипники, требующие смазки',
          },
        ]}
      />
      <section className={styles.flex}>
        <Image
          src="/image/pages/hmg090/hmg090.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-090"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-090</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag>
            Это тонкостенная свёртная втулка. Она представляет собой экономичное
            решение, когда жесткие допуски не являются критическими. Внутренняя
            насечка удерживает смазку для формирования смазочной пленки в
            начальный приработочный период. Внутренний диаметр втулки можно
            дополнительно обрабатывать после сборки узла. Бронзовый сплав
            обеспечивает хорошую коррозионную стойкость и эффективный отвод
            тепла благодаря высокой теплопроводности. Данная втулка оптимальна
            для применения при средних и низких нагрузках, а также низких
            скоростях вращения, при этом рекомендуется периодическая смазка.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag>
            Это свертная втулка из бронзового сплава CuSn8. Она рассчитана на
            средние нагрузки и обладает превосходной износостойкостью. Данная
            экономичная конструкция имеет внутреннюю рельефную поверхность с
            насечками для удержания смазочного материала и формирования
            эффективной смазочной пленки в начальный приработочный период
            эксплуатации.
          </Ptag>
        </div>

        <Image
          src="/image/pages/hmg090/hmg090structure.png"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-090"
        />
      </section>
      <section>
        <div className={styles.scroll}>
          <TableTop />
        </div>

        <div className={styles.scroll}>
          <TableBottom />
        </div>
      </section>
      <section>
        <Htag tag="h2" border="left">
          Типичные области применения
        </Htag>
        <Ptag>
          Типичные области применения данного материала включают подъемное
          оборудование, строительную технику, автомобильную промышленность,
          тракторы, грузовики, сельскохозяйственные и горнодобывающие машины.
          Доступная продукция включает втулки, фланцевые втулки и упорные шайбы.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
