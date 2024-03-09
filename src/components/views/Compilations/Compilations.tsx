import React from 'react';
import styles from './Compilations.module.css';
import { Card } from '@/components/views/Compilations/Card';

const cards = [
  {
    title: 'Светильники с реверберацией',
    image:
      'http://led.apptrix.ru/media/filer_public/53/b8/53b8eded-65e9-4eed-b981-70fb7fb58e28/ufo-1-desk.jpg',
    slug: 'slug',
    id: 1,
  },
  {
    title: 'Светильники с реверберацией',
    image:
      'http://led.apptrix.ru/media/filer_public/53/b8/53b8eded-65e9-4eed-b981-70fb7fb58e28/ufo-1-desk.jpg',
    slug: 'slug',
    id: 2,
  },
  {
    title: 'Светильники с реверберацией',
    image:
      'http://led.apptrix.ru/media/filer_public/53/b8/53b8eded-65e9-4eed-b981-70fb7fb58e28/ufo-1-desk.jpg',
    slug: 'slug',
    id: 3,
  },
  {
    title: 'Светильники с реверберацией',
    image:
      'http://led.apptrix.ru/media/filer_public/53/b8/53b8eded-65e9-4eed-b981-70fb7fb58e28/ufo-1-desk.jpg',
    slug: 'slug',
    id: 4,
  },
  {
    title: 'Светильники с реверберацией',
    image:
      'http://led.apptrix.ru/media/filer_public/53/b8/53b8eded-65e9-4eed-b981-70fb7fb58e28/ufo-1-desk.jpg',
    slug: 'slug',
    id: 5,
  },
  {
    title: 'Светильники с реверберацией',
    image:
      'http://led.apptrix.ru/media/filer_public/53/b8/53b8eded-65e9-4eed-b981-70fb7fb58e28/ufo-1-desk.jpg',
    slug: 'slug',
    id: 6,
  },
  {
    title: 'Светильники с реверберацией',
    image:
      'http://led.apptrix.ru/media/filer_public/53/b8/53b8eded-65e9-4eed-b981-70fb7fb58e28/ufo-1-desk.jpg',
    slug: 'slug',
    id: 7,
  },
  {
    title: 'Светильники с реверберацией',
    image:
      'http://led.apptrix.ru/media/filer_public/53/b8/53b8eded-65e9-4eed-b981-70fb7fb58e28/ufo-1-desk.jpg',
    slug: 'slug',
    id: 8,
  },
  {
    title: 'Светильники с реверберацией',
    image:
      'http://led.apptrix.ru/media/filer_public/53/b8/53b8eded-65e9-4eed-b981-70fb7fb58e28/ufo-1-desk.jpg',
    slug: 'slug',
    id: 9,
  },
  {
    title: 'Светильники с реверберацией',
    image:
      'http://led.apptrix.ru/media/filer_public/53/b8/53b8eded-65e9-4eed-b981-70fb7fb58e28/ufo-1-desk.jpg',
    slug: 'slug',
    id: 10,
  },
  {
    title: 'Светильники с реверберацией',
    image:
      'http://led.apptrix.ru/media/filer_public/53/b8/53b8eded-65e9-4eed-b981-70fb7fb58e28/ufo-1-desk.jpg',
    slug: 'slug',
    id: 11,
  },
];

export function Compilations() {
  return (
    <div className={`container`}>
      <div className={styles.compilations}>
        {cards.map(c => (
          <Card key={c.id} {...c} />
        ))}
      </div>
    </div>
  );
}
