import React from 'react';
import styles from './FormCatalog.module.css';
import {Section} from "@/components/Section";
import {FormHeader} from "@/components/FormHeader";
import {Profile} from "@/components/icons/Profile";
import {Mail} from "@/components/icons/Mail";
import {Phone} from "@/components/icons/Phone";
import {FormArrow} from "@/components/icons/FormArrow";
import Image from 'next/image';

const title = 'Получить наш каталог по электронной почте'
const text = 'Наши персональные консультанты отправят вам полный каталог по всему ассортименту компании.'

export function FormCatalog() {
  return (
    <Section>
      <div className={styles.wrapper}>
        <div className={styles.bg}>
          <Image
            src={'https://ledmonster.ru/media/filer_public/d2/cd/d2cd1822-0c30-4110-b1ad-d36e85e73f20/cat2020_desk.jpg'}
            alt={'bg'}
            fill
            sizes="(min-width: 1024px) 100vw"
          />
        </div>
        <div className={`${styles['form-wrapper']}`}>
          <FormHeader title={title} text={text} titleClass={styles.title} textClass={styles.text}
                      headerClass={styles.header}/>
          <form className={styles.form}>
            <div className={`${styles['input-wrapper']}`}>
              <input className={styles.input} placeholder={'Имя'} type="text"/>
              <Profile className={styles.icon}/>
            </div>
            <div className={`${styles['input-wrapper']}`}>
              <input className={styles.input} placeholder={'E-mail'} type="text"/>
              <Mail className={styles.icon}/>
            </div>
            <div className={`${styles['input-wrapper']}`}>
              <input className={styles.input} placeholder={'Телефон'} type="text"/>
              <Phone width={20} height={20} className={styles.icon}/>
            </div>
            <button className={styles.btn}>
              <span>Отправить</span>
              <FormArrow className={`${styles['submit-icon']}`}/>
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
