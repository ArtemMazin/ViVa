const REG_EXP_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i;

const REG_EXP_NAME = /^[А-ЯA-Zё\s-]+$/imu;

const REG_EXP_TEL = /^[\d\+][\d\(\)\ -]{8,14}\d$/;

const messages = {
  INPUT_EMAIL: 'Неверный формат почты',
  INPUT_TEL: 'Некорректный номер',
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

const sliderImages = [
  { img: '/image/slider01.png' },
  { img: '/image/slider02.png' },
  { img: '/image/slider03.png' },
];

const SCREEN_SM = 576;
const SCREEN_MD = 768;
const SCREEN_LG = 992;
const SCREEN_XL = 1200;

export {
  navLinks,
  sliderImages,
  REG_EXP_EMAIL,
  REG_EXP_NAME,
  REG_EXP_TEL,
  messages,
  SCREEN_SM,
  SCREEN_MD,
  SCREEN_LG,
  SCREEN_XL,
};
