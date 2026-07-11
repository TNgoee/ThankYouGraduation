import React from 'react';

interface UseScrollProgressProps {
  containerRef?: React.RefObject<HTMLElement>;
}

export function useScrollProgress({ containerRef }: UseScrollProgressProps = {}) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (containerRef?.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const totalScroll = scrollHeight - clientHeight;
        setProgress((scrollTop / totalScroll) * 100);
      } else {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const totalScroll = scrollHeight - clientHeight;
        setProgress((scrollTop / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [containerRef]);

  return progress;
}
