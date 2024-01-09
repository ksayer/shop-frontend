import React from 'react';
import styles from './FormConsult.module.css';
import { Section } from '../../Section';
import Image from 'next/image';
import { FormHeader } from '../FormHeader';

const title = 'Подобрать светильники под проект';
const text =
  '<p>Наши технические специалисты в срок подготовят для вас светотехнический расчет. </p><p>Приложите альбом проекта или чертеж помещения.</p>';

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
        <FormHeader title={title} text={text} />
        <form className={styles.form}>
          <div className={styles.inputs}>
            <div className={`${styles['input-wrapper']}`}>
              <input className={styles.input} type="text" />
              <span className={styles.label}>Имя</span>
            </div>
            <div className={`${styles['input-wrapper']}`}>
              <input className={styles.input} type="text" />
              <span className={styles.label}>Email</span>
            </div>
            <div className={`${styles['input-wrapper']}`}>
              <input className={styles.input} type="text" />
              <span className={styles.label}>Телефон</span>
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.btn}>Загрузить проект</button>
            <button className={styles.btn}>Отправить</button>
          </div>
        </form>
      </div>
    </Section>
  );
}
