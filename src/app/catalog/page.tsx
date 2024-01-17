'use client';
import { Catalog } from '@/components/pages/Catalog';
import { Preview } from '@/components/Preview';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const preview = {
  title: 'Полный каталог',
  description:
    'Мы специально для вас подготовили уникальную подборку модных светильников, которая поможет вам создать уютную атмосферу в вашем доме, квартире или офисе. Наша команда из талантливых дизайнеров и экспертов предложила широкий выбор различных стилей и уникальных решений, которые подойдут для любого интерьера.\n' +
    '<br><br>' +
    'Наша цель – помочь вам выбрать лучшие светильники и рассказать об их преимуществах и особенностях использования. Мы считаем, что правильное освещение – это ключевой фактор для создания уютной атмосферы в доме или офисе. У нас вы найдете широкий выбор светильников и умные решения. ',
};

export default function CatalogPage() {
  return (
    <main className={'main-flex'}>
      <Preview {...preview} />
      <Catalog />
    </main>
  );
}
