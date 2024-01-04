import React from 'react';
import styles from './FormConsult.module.css';
import {Section} from "@/components/Section";
import Image from 'next/image';

export function FormConsult() {
  return (
    <Section>
      <div className={styles.wrapper}>
        <Image
          src={'https://ledmonster.ru/static/img/new-content/form-bg-xxl-new.png'}
          alt={'bg'}
          fill
          className={styles.bg}
        />
        <div className={styles.header}>
          <h2 className={styles.title}>Подобрать светильники под проект</h2>
          <div className={styles.text}>
            <p>
              Наши технические специалисты в срок подготовят для вас
              светотехнический расчет.
            </p>
            <p>
              Приложите альбом проекта или чертеж помещения.
            </p>
          </div>
        </div>
        <form className={styles.form}>
          <div className={styles.inputs}>
            <div className={`${styles['input-wrapper']}`}>
              <input className={styles.input} type="text"/>
              <span className={styles.label}>Имя</span>
            </div>
            <div className={`${styles['input-wrapper']}`}>
              <input className={styles.input} type="text"/>
              <span className={styles.label}>Email</span>
            </div>
            <div className={`${styles['input-wrapper']}`}>
              <input className={styles.input} type="text"/>
              <span className={styles.label}>Телефон</span>
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.btn}>
              Загрузить проект
            </button>
            <button className={styles.btn}>
              Отправить
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
