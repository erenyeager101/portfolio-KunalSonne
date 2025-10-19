import { useEffect, useState } from 'react';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const denominator = scrollHeight - clientHeight;
  const scrolled = denominator <= 0 ? 100 : (scrollTop / denominator) * 100;
  setProgress(Math.min(100, Math.max(0, scrolled)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <span
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-brand via-brand-light to-accent transition-transform duration-150"
      style={{ transform: `scaleX(${progress / 100})` }}
      aria-hidden="true"
    />
  );
}

export default ScrollProgress;
