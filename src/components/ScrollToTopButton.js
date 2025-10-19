import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="fixed bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-glow transition hover:-translate-y-1 hover:bg-brand hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:border-white/10 dark:bg-slate-900 dark:text-white"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}

export default ScrollToTopButton;
