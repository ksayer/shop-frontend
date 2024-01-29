import React from 'react';
import styles from './ModificationList.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ImageType } from '@/api/types';

export interface IModification {
  id?: number;
  title: string;
  image: ImageType;
  link: string;
}

interface IModifications {
  modifications: IModification[];
}

export function ModificationList({ modifications }: IModifications) {
  return (
    <div>
      <h3 className={styles.title}>Модификации</h3>
      {modifications.map(modification => (
        <Link key={modification.id} className={styles.link} href={modification.link} replace>
          <Image
            src={modification.image?.absolute_url}
            alt={'image'}
            fill={true}
            sizes="50vw"
            quality={modification.image.optimized ? 100 : 75}
            className={`${styles.image}`}
          />
          <h4>{modification.title}</h4>
        </Link>
      ))}
    </div>
  );
}
