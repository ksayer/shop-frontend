import React, { Dispatch, SetStateAction, useEffect } from 'react';

interface IUseClickOutside {
  ref: React.RefObject<HTMLDivElement>;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  isOpened?: boolean;
}

export const useClickOutside = ({ ref, setIsOpened, isOpened }: IUseClickOutside) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      console.log(ref.current, event.target);
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        console.log('click outside');
        setIsOpened(false);
      }
    }

    if (isOpened) document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, isOpened, setIsOpened]);
};
