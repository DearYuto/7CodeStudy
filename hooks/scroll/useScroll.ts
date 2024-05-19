import { useEffect, useRef, useState } from 'react';

const debounce = (callback: () => void, delay: number) => {
  let timeoutId: NodeJS.Timeout | null = null;

  return () => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(callback, delay);
  };
};

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

    const debouncedHandleScroll = debounce(handleScroll, 200);

    current.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      current.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  return { isScrolled, headRef };
};

export default useScroll;
