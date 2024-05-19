import Image from 'next/image';
import React from 'react';
import styles from './hmg22.module.css';
import Htag from '@/components/Htag/Htag';
import Ptag from '@/components/Ptag/Ptag';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Table from './Table';

export const metadata = {
  metadataBase: new URL(process.env.URL),
  title:
    'Износостойкий металополимерный подшипник HMG-22 для высоких нагрузок | ВиВа Групп',
  description:
    'Купите высококачественный металополимерный подшипник HMG-22 от ВиВа Групп. Обладает высокой износостойкостью, что делает его пригодным для применения в условиях средних и высоких нагрузок, ударных воздействий и запыленной среды.',
  openGraph: {
    title:
      'Износостойкий металополимерный подшипник HMG-22 для высоких нагрузок | ВиВа Групп',
    description:
      'Купите высококачественный металополимерный подшипник HMG-22 от ВиВа Групп. Обладает высокой износостойкостью, что делает его пригодным для применения в условиях средних и высоких нагрузок, ударных воздействий и запыленной среды.',
    url: process.env.URL + '/podshipniki/metalopolimernye_podshipniki/hmg-22',
    images: [
      {
        url: '/image/metalopolimernye_podshipniki/hmg-22.jpg',
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
        currentLink="Подшипники HMG-22"
        links={[
          { href: process.env.URL, name: 'Главнaя' },
          { href: `${process.env.URL}/podshipniki`, name: 'Подшипники' },
          {
            href: `${process.env.URL}/podshipniki/metalopolimernye_podshipniki`,
            name: 'Металлополимерные подшипники, требующие смазки',
          },
        ]}
      />
      <section className={styles.flex}>
        <Image
          src="/image/pages/hmg22/hmg22.jpg"
          width={600}
          height={450}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 50vw, (max-width: 1280px) 25vw, 40vw"
          priority={true}
          alt="Подшипники HMG-22"
          className={styles.image}
        />
        <div>
          <Htag tag="h1">HMG-22</Htag>
          <Htag tag="h2" border="left">
            Описание
          </Htag>
          <Ptag>
            Данный материал оптимален для применения в условиях граничной
            смазки. Перед сборкой настоятельно рекомендуется тщательно нанести
            консистентную смазку на все трущиеся поверхности деталей. HMG-22M
            представляет собой композитный материал с тонким слоем
            поливинилидендифторида (PVDF) толщиной 0,1-0,2 мм, не содержащим
            насечки на поверхности. После сборки узла этот материал можно
            дополнительно обрабатывать механическим путем.
          </Ptag>
        </div>
      </section>
      <section className={styles.flex}>
        <div>
          <Htag tag="h2" border="left">
            Структура
          </Htag>
          <Ptag>
            1. Слой поливинилидендифторида (PVDF) толщиной 0,20-0,35 мм придает
            материалу высокую износостойкость и обеспечивает низкий коэффициент
            трения даже при недостаточной смазке.
          </Ptag>
          <Ptag>
            2. Спеченный бронзовый слой толщиной 0,20-0,35 мм обеспечивает
            прочное сцепление с основой и отличную теплопроводность.
          </Ptag>
          <Ptag>
            3. Низкоуглеродистая стальная основа придает материалу необходимую
            механическую прочность и теплопроводность.
          </Ptag>
        </div>

        <Image
          src="/image/pages/hmg22/hmg22structure.png"
          width={300}
          height={240}
          sizes="(max-width: 520px) 45vw, (max-width: 768px) 30vw, 20vw"
          priority={true}
          alt="Структура материала HMG-22"
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
          Этот материал отличается высокой износостойкостью, что делает его
          пригодным для применения в условиях средних и высоких нагрузок,
          ударных воздействий и запыленной среды. Перед сборкой обязательно
          требуется нанесение смазочного материала. Данный композит широко
          используется в коммерческом транспорте (оси, тормозные системы,
          подвески), воздушных компрессорах, гидравлических поршневых насосах и
          двигателях, а также в сельскохозяйственной, лесозаготовительной
          технике и погрузочно-разгрузочном оборудовании.
        </Ptag>
      </section>
    </main>
  );
};

export default page;
