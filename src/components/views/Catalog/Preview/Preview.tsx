import React from 'react';
import styles from './Preview.module.css';
import { Section } from '@/components/ui/Section';
import Image from 'next/image';

interface IPreview {
  title: string;
  description: string;
  image?: string;
}

export function Preview({ title, description, image }: IPreview) {
  return (
    <Section>
      <article className={styles.article}>
        <div className={`${styles.content} ${image && styles['content--half']}`}>
          <h2 className={styles.title}>{title}</h2>
          <p className={`base-text`} dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        {image && (
          <div className={`${styles['image--wrapper']}`}>
            <Image
              src={image}
              alt={'image'}
              width={400}
              height={400}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={styles.image}
              priority
            />
          </div>
        )}
      </article>
    </Section>
  );
}
