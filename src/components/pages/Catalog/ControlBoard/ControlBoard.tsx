import React from 'react';
import styles from './ControlBoard.module.css';
import {Navigator} from "@/components/pages/Catalog/ControlBoard/Navigator";
import {Filters} from "@/components/pages/Catalog/ControlBoard/Filters";

export function ControlBoard() {
  return (
    <>
      <Navigator title={'Категории'}/>
      <Navigator title={'Группы'}/>
      <Filters/>
    </>
  );
}
