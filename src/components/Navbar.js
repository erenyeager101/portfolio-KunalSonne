import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { FileDown, Menu, X } from 'lucide-react';
import ThemeSwitch from './ThemeSwitch';

const isBrowser = typeof window !== 'undefined';

const focusClass =
  'rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white';

const mobileFocusClass =
  'rounded-xl px-3 py-2 text-base font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white';

function Navbar({ sections, theme, onToggleTheme, resumeUrl }) {
  const [activeSection, setActiveSection] = useState(sections?.[0]?.id ?? 'about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isBrowser || !sections?.length) return;
    const sectionNodes = sections
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sectionNodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-48% 0px -45% 0px',
        threshold: 0.2
      }
    );

    sectionNodes.forEach((node) => observer.observe(node));
    return () => {
      sectionNodes.forEach((node) => observer.unobserve(node));
    };
  }, [sections]);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
  <div className="mt-4 rounded-2xl border border-slate-200/70 bg-white/80 py-2.5 shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
          <nav className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => handleScroll('about')}
              className="relative inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand/90 text-xs font-bold text-white shadow-lg">KS</span>
              <span>Kunal Sonne</span>
            </button>

            <div className="hidden items-center gap-2 lg:flex">
              {sections?.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleScroll(section.id)}
                  className={clsx(focusClass, activeSection === section.id && 'bg-slate-900 text-white dark:bg-white/20 dark:text-white')}
                >
                  {section.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {resumeUrl && (
                <a
                  href={resumeUrl}
                  className="hidden items-center gap-2 rounded-full border border-transparent bg-brand px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:bg-brand/90 dark:hover:bg-brand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Resume</span>
                </a>
              )}
              <ThemeSwitch theme={theme} onToggle={onToggleTheme} />

              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-900 shadow-sm transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-white/10 lg:hidden"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>

          {menuOpen && (
            <div className="mt-3 space-y-1 border-t border-slate-200/70 pt-3 dark:border-white/10 lg:hidden">
              {sections?.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleScroll(section.id)}
                  className={clsx(
                    mobileFocusClass,
                    'flex w-full items-center justify-between',
                    activeSection === section.id && 'bg-slate-900 text-white dark:bg-white/20'
                  )}
                >
                  <span>{section.label}</span>
                  <span className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-300">{section.id}</span>
                </button>
              ))}
              {resumeUrl && (
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:border-white/10 dark:bg-white/5 dark:text-white"
                >
                  <span>Download resume</span>
                  <FileDown className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
