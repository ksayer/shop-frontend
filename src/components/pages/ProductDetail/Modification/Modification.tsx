import React from 'react';
import styles from './Modification.module.css';
import { ImageType } from '@/api/types';

interface IFile {
  title: string;
  link: string;
}

interface IProduct {
  color: string;
  link: string;
  image: ImageType;
  scheme: ImageType;
  files?: IFile[];
  power?: string;
  beam?: string;
  color_index?: string;
  color_temperature?: string;
  dimming?: string;
  beam_angle?: string;
  protection?: string;
  frame_color?: string;
  price: string;
}

interface IModification {
  title: string;
  products: IProduct[];
}

export function Modification({ title, products }: IModification) {
  return (
    <div>
      <h3>Опции {title}</h3>
    </div>
  );
}
