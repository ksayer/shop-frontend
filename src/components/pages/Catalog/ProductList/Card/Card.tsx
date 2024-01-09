import React from 'react';
import styles from './Card.module.css';
import Image from 'next/image'


export function Card() {
  return (
    <a href={'#'} className={styles.card}>
      <div className={`${styles['image-wrapper']}`}>
        <Image
          src={'https://ledmonster.ru/media/filer_public/b3/1d/b31d4357-8b18-4f19-a229-37639adc5234/fog-tws.png'}
          alt={'card'}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 38vw, 25vw"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h4 className={styles.title}>
            Fog Table
          </h4>
          <span className={styles.price}>от 12910 Р</span>
        </div>
        <ul className={styles.options}>
          <li className={styles.option}>
            3000K
          </li>
          <li className={styles.option}>
            <div className={styles.colors}>
              <span className={styles.color} style={{backgroundColor: 'rgb(255, 255, 255)'}}></span>
              <span className={styles.color} style={{backgroundColor: 'rgb(0, 0, 0)'}}></span>
            </div>
          </li>
        </ul>
      </div>
    </a>
  );
}
