import { IBanner } from '@/components/Section/BannerBlock/Banner';
import { BannerBlock } from '@/components/Section/BannerBlock';

const contacts: IBanner[] = [
  {
    id: 1,
    imageUrl:
      'https://ledmonster.ru/media/filer_public/4b/69/4b69ba7d-27e3-4f0c-9bd1-59becd6c957d/frame_1813_desk.png',
    text: 'Напишите нам в любой удобный мессенджер. Персональный консультант в режиме "онлайн" с 10 до 20 часов по московскому времени ответит на все вопросы.',
    title: 'Свяжитесь с нами',
    imageSecond: false,
    buttons: [
      {
        id: 1,
        text: 'Whatsapp',
        url: 'urlbutton',
      },
      {
        id: 2,
        text: 'Telegram',
        url: 'urlbutton',
      },
    ],
  },
  {
    id: 2,
    imageUrl:
      'https://ledmonster.ru/media/filer_public/dc/95/dc95b242-253a-4fb3-b639-d384117b006c/artplay_1_desk.jpg',
    title: 'Центральный офис в Москве "ARTPLAY"\n',
    phone: '+74958587898',
    address: 'ул. Нижняя Сыромятническая д.10, стр. 5',
    email: 'sale@ledmonster.ru',
    imageSecond: true,
    buttons: [
      {
        id: 1,
        text: 'Маршрут',
        url: 'urlbutton',
      },
    ],
  },
  {
    id: 3,
    imageUrl:
      'https://ledmonster.ru/media/filer_public/08/e4/08e429cf-5489-4694-8f57-e6d2667577ae/vasileostrovskii_shourum_desk.jpg',
    title: 'Дистрибьютор в Санкт-Петербурге "Василеостровский"',
    phone: '+74958587898',
    address: 'Железноводская ул., д.3, секция 37',
    email: 'spb@ledmonster.ru',
    imageSecond: true,
    buttons: [
      {
        id: 1,
        text: 'Подробнее',
        url: 'urlbutton',
      },
    ],
  },
  {
    id: 24,
    imageUrl:
      'https://ledmonster.ru/media/filer_public/cc/d8/ccd8b64e-55ce-43dc-9493-cc9529132c89/about_desk.png',
    text: 'Компания Ledmonster основана в 2012 году и является одним из ведущих производителей светодиодных светильников в России. Обладая собственными производственными мощностями в России, на площади более 2 000 м2, Ledmonster создаёт серийные и эксклюзивные светотехнические решения. Специалисты компании изготавливают до 600 000 светильников в год. Постоянный ассортимент насчитывает более 1 000 моделей светильников в наличии.',
    title: 'О компании\n',
    imageSecond: false,
    buttons: [
      {
        id: 1,
        text: 'Подробнее',
        url: 'urlbutton',
      },
    ],
  },
];

export default function Contacts() {
  return (
    <main className={'main-flex'}>
      <BannerBlock banners={contacts} />
    </main>
  );
}
