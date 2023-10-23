const REG_EXP_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i;

const REG_EXP_NAME = /^[А-ЯA-Zё\s-]+$/imu;

const messages = {
  INPUT_EMAIL: 'Неверный формат почты',
  INPUT_NAME:
    'Имя может содержать только латиницу, кириллицу, пробел или дефис',
};

const navLinks = [
  { name: 'Главная', href: '/' },
  { name: 'О компании', href: '/about' },
  { name: 'Товары', href: '/goods' },
  { name: 'Доставка', href: '/delivery' },
  { name: 'Каталог', href: '/catalog' },
  { name: 'Контакты', href: '/contacts' },
];

const presentationImage = [
  {
    name: 'Металлополимерные самосмазывающиеся подшипники',
    img: '/image/products01/pro01.jpg',
    href: '/goods/products01',
  },
  {
    name: 'Металлополимерные подшипники, требующие смазки',
    img: '/image/products02/pro02.jpg',
    href: '/goods/products02',
  },
  {
    name: 'Металлические самосмазывающиеся подшипники',
    img: '/image/products03/pro03.jpg',
    href: '/goods/products03',
  },
  {
    name: 'Металлические подшипники, требующие смазки',
    img: '/image/products04/pro04.jpg',
    href: '/goods/products04',
  },
  {
    name: 'Неметаллические самосмазывающиеся подшипники',
    img: '/image/products05/pro05.jpg',
    href: '/goods/products05',
  },
  {
    name: 'Высокопроизводительные стальные самосмазывающиеся подшипники',
    img: '/image/products06/pro06.jpg',
    href: '/goods/products06',
  },
];

const sliderImages = [
  { img: '/image/slider01.png' },
  { img: '/image/slider02.png' },
  { img: '/image/slider03.png' },
];

export {
  navLinks,
  presentationImage,
  sliderImages,
  REG_EXP_EMAIL,
  REG_EXP_NAME,
  messages,
};
