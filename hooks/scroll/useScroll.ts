import { useEffect, useRef, useState } from 'react';

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const headRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const current = headRef.current;
    if (!current) return;

    const handleScroll = () => {
      if (current?.scrollTop !== 0) {
        setIsScrolled(true);
        return;
      }

      setIsScrolled(false);
    };

    current.addEventListener('scroll', handleScroll);

    return () => {
      current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isScrolled, headRef };
};

export default useScroll;
