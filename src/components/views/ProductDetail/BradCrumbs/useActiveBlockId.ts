import { useEffect, useRef, useState } from 'react';

export const useActiveBlockId = () => {
  const [activeBlockId, setActiveBlockId] = useState('infoblock');
  const direction = useRef<string>('down');
  const y = useRef<number>(0);
  useEffect(() => {
    const handlePosition = () => {
      if (window.scrollY > y.current) {
        direction.current = 'down';
      } else {
        direction.current = 'up';
      }
      y.current = window.scrollY;
    };
    const sections = [
      document.getElementById('infoblock'),
      document.getElementById('banners'),
      document.getElementById('gallery'),
      document.getElementById('modifications'),
    ];
    const observer = new IntersectionObserver(
      entries => {
        handlePosition();
        for (let el of entries) {
          if (direction.current == 'up' && el.isIntersecting) {
            setActiveBlockId(el.target.id);
            break;
          } else if (direction.current == 'down' && !el.isIntersecting) {
            setActiveBlockId(
              el.target.nextElementSibling ? el.target.nextElementSibling.id : el.target.id,
            );
          }
        }
      },
      { rootMargin: '-130px' },
    );

    sections.forEach(el => {
      if (el) observer.observe(el);
    });
  }, [y, direction]);
  return [activeBlockId];
};
