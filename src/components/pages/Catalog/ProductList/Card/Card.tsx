import React, { useState } from 'react';
import styles from './Card.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface IImage {
  id: string | number;
  color: string;
  file: string;
  width: string;
  height: string;
}

export interface ICard {
  id?: string | number;
  title: string;
  min_price: number;
  images: IImage[];
}

export function Card({ id, title, min_price, images }: ICard) {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <Link href={'/contacts'} className={styles.card}>
      <div className={`${styles['image-wrapper']}`}>
        <Image
          src={images[imageIndex].file}
          alt={'card'}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 38vw, 25vw"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h4 className={styles.title}>{title}</h4>
          <span className={styles.price}>от {min_price} Р</span>
        </div>
        <ul className={styles.options}>
          <li className={styles.option}>3000K</li>
          <li className={styles.option}>
            <div className={styles.colors}>
              {images.map((image, index) => (
                <span
                  onClick={e => {
                    e.preventDefault();
                    setImageIndex(index);
                  }}
                  key={image.id}
                  className={styles.color}
                  style={{ backgroundColor: image.color }}
                ></span>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </Link>
  );
}
