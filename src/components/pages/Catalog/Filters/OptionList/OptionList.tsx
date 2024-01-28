import React from 'react';
import styles from './OptionList.module.css';
import { IOptionValue, Option } from '@/components/pages/Catalog/Filters/OptionList/Option';

interface IMenu {
  filters: {
    power?: IOptionValue[];
    beam?: IOptionValue[];
    color_temperature?: IOptionValue[];
    beam_angle?: IOptionValue[];
    dimming?: IOptionValue[];
    protection?: IOptionValue[];
  };
}

export function OptionList({
  filters: { power, beam, color_temperature, beam_angle, dimming, protection },
}: IMenu) {
  return (
    <ul className={styles.list}>
      {beam && beam.length > 0 && (
        <Option key={'beam'} properties={beam} title={'Световой поток'} filterName={'beam'} />
      )}
      {power && power.length > 0 && (
        <Option key={'power'} properties={power} title={'Мощность'} filterName={'power'} />
      )}
      {color_temperature && color_temperature.length > 0 && (
        <Option
          key={'color_temperature'}
          properties={color_temperature}
          title={'Температура'}
          filterName={'color_temperature'}
        />
      )}
      {beam_angle && beam_angle.length > 0 && (
        <Option
          key={'beam_angle'}
          properties={beam_angle}
          title={'Угол рассеивания'}
          filterName={'beam_angle'}
        />
      )}
      {dimming && dimming.length > 0 && (
        <Option
          key={'dimming'}
          properties={dimming}
          title={'Диммирование'}
          filterName={'dimming'}
        />
      )}
      {protection && protection.length > 0 && (
        <Option
          key={'protection'}
          properties={protection}
          title={'Влагозащита'}
          filterName={'protection'}
        />
      )}
    </ul>
  );
}
