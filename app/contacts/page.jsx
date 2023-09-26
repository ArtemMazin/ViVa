import { contacts } from './contacts.module.css';

export default function Contacts() {
  return (
    <main className={`${contacts}`}>
      <iframe
        src='https://yandex.ru/map-widget/v1/?um=constructor%3A778ecc0b2189d3f08dc38c79e91971f31d7cbf00bd0f8e98abad39ff995a7272&amp;source=constructor'
        width='100%'
        height='300'
        title='Встроенные Яндекс Карты'
        frameBorder={0}></iframe>
    </main>
  );
}
