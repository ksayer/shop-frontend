import { useEffect, useState } from 'react';
import { debounce } from '@/features/utils/debounce';

export const useWidth = (defaultWidth?: number) => {
  const [width, setWidth] = useState<number>(defaultWidth || 0);
  useEffect(() => {
    const handleChangeWidth = debounce(() => {
      setWidth(window.innerWidth);
    }, 300);
    handleChangeWidth();
    window.addEventListener('resize', handleChangeWidth);
    return () => {
      window.removeEventListener('resize', handleChangeWidth);
    };
  }, []);
  return [width];
};
