import { Catalog } from '@/components/views/Catalog';
import { getCategories, getGroups } from '@/api/catalog/catalog';
import { Preview } from '@/components/views/Catalog/Preview';

const preview = {
  title: 'Полный каталог',
  description:
    'Мы специально для вас подготовили уникальную подборку модных светильников, которая поможет вам создать уютную атмосферу в вашем доме, квартире или офисе. Наша команда из талантливых дизайнеров и экспертов предложила широкий выбор различных стилей и уникальных решений, которые подойдут для любого интерьера.\n' +
    '<br><br>' +
    'Наша цель – помочь вам выбрать лучшие светильники и рассказать об их преимуществах и особенностях использования. Мы считаем, что правильное освещение – это ключевой фактор для создания уютной атмосферы в доме или офисе. У нас вы найдете широкий выбор светильников и умные решения. ',
};

export default async function CatalogPage() {
  const groups = await getGroups();
  const categories = await getCategories();
  return (
    <main className={'main-flex'}>
      <Preview {...preview} />
      <Catalog groups={groups.results} categories={categories} />
    </main>
  );
}
