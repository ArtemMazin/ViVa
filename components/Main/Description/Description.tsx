import Htag from '@/components/Htag/Htag';
import styles from './Description.module.css';
import * as React from 'react';
import Ptag from '@/components/Ptag/Ptag';

export default function Description() {
  return (
    <section className={styles.description}>
      <div className={styles.title}>
        <Htag tag="h1" border="down" className={styles.main__title}>
          ПОДШИПНИКИ HMG
        </Htag>
        <Htag tag="h3">ВТУЛКИ/ШАЙБЫ/ЛЕНТА</Htag>
      </div>
      <div className={styles.description__container}>
        <div className="container">
          <div className={styles.description__text}>
            <Htag tag="h3">
              ВиВа Групп - надежный поставщик высококачественных подшипников
              скольжения HMG.
            </Htag>
            <Ptag>
              Мы предлагаем широкий ассортимент продукции, изготовленной из
              различных материалов: бронзовых, полимерных и металлических
              сплавов. Наша компания гордится многолетним опытом работы и
              сотрудничеством с проверенными производителями. Благодаря этому мы
              можем обеспечить российских потребителей качественной и
              высокотехнологичной продукцией по конкурентным ценам.
            </Ptag>
          </div>

          <div className={styles.description__advantages}>
            <Htag tag="h3">
              Подшипники скольжения HMG отличаются целым рядом преимуществ:
            </Htag>
            <ul className={styles.description__list}>
              <li>
                <Ptag>
                  Высокая износостойкость благодаря использованию передовых
                  материалов.
                </Ptag>
              </li>
              <li>
                <Ptag>
                  Низкий коэффициент трения за счет самосмазывающихся свойств
                  материалов и специальных покрытий.
                </Ptag>
              </li>
              <li>
                <Ptag>
                  Длительный срок эксплуатации даже в условиях высоких нагрузок
                  и агрессивной среды.
                </Ptag>
              </li>
              <li>
                <Ptag>
                  Широкий диапазон применения в различных отраслях:
                  автомобильной, сельскохозяйственной, строительной,
                  горнодобывающей и многих других.
                </Ptag>
              </li>
              <li>
                <Ptag>
                  Индивидуальные решения - возможность изготовления подшипников
                  по чертежам заказчика.
                </Ptag>
              </li>
            </ul>
          </div>
          <Ptag className={styles.description__text}>
            Подшипники HMG - оптимальный выбор для обеспечения надежной и
            бесперебойной работы оборудования. Свяжитесь с нами, и мы поможем
            подобрать идеальное решение для ваших задач!
          </Ptag>
        </div>
      </div>
    </section>
  );
}
