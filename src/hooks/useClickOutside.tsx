import React, { Dispatch, SetStateAction, useEffect } from 'react';

interface IUseClickOutside {
  ref: React.RefObject<HTMLDivElement>;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  isOpened?: boolean;
}

export const useClickOutside = ({ ref, setIsOpened, isOpened }: IUseClickOutside) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        setIsOpened(false);
      }
    }

    if (isOpened) window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [ref, isOpened, setIsOpened]);
};
