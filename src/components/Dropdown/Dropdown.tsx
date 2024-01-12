import React, { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './transition.css';

interface IDropdown {
  handleClick: () => void;
  isOpened: boolean;
  children: React.ReactNode;
  menu: React.ReactNode;
  wrapperClass?: string;
}

export function Dropdown({ isOpened, wrapperClass, handleClick, children, menu }: IDropdown) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as HTMLElement)) {
        console.log('outside click');
        handleClick();
      }
    }
    if (isOpened) document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [wrapperRef, handleClick, isOpened]);

  return (
    <div className={wrapperClass} ref={wrapperRef}>
      <>{children}</>
      <CSSTransition in={isOpened} timeout={200} classNames="dropdown-transition" nodeRef={menuRef}>
        <div ref={menuRef} className={'dropdown-transition'}>
          {menu}
        </div>
      </CSSTransition>
    </div>
  );
}
