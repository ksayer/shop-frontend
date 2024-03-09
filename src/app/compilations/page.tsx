import { Preview } from '@/components/views/Catalog/Preview';
import { Compilations } from '@/components/views/Compilations';

const preview = {
  title: 'Подборки',
  description:
    'Мы специально для вас подготовили уникальную подборку модных светильников, которая поможет вам создать уютную атмосферу в вашем доме, квартире или офисе. Наша команда из талантливых дизайнеров и экспертов предложила широкий выбор различных стилей и уникальных решений, которые подойдут для любого интерьера.\n' +
    '<br><br>' +
    'Наша цель – помочь вам выбрать лучшие светильники и рассказать об их преимуществах и особенностях использования. Мы считаем, что правильное освещение – это ключевой фактор для создания уютной атмосферы в доме или офисе. У нас вы найдете широкий выбор светильников и умные решения. ',
  image:
    'http://led.apptrix.ru/media/filer_public/c8/f8/c8f8043a-0fb6-4aae-be5e-9376fa972e4f/compilations.jpg',
};

export default async function CompilationsPage() {
  return (
    <main className={'main-flex'}>
      <Preview {...preview} />
      <div className={`container`}>
        <div className={`splitter`}></div>
      </div>
      <Compilations />
    </main>
  );
}
