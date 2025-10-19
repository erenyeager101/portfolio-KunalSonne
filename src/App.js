import { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import HighlightsSection from './sections/HighlightsSection';
import ResearchSection from './sections/ResearchSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import {
  hero,
  skills,
  experiences,
  projects,
  highlights,
  research,
  contact,
  socialLinks
} from './data/content';

const NAV_SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' }
];

function App() {
  const prefersDark = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches,
    []
  );

  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return (
      localStorage.getItem('portfolio-theme') || (prefersDark ? 'dark' : 'light')
    );
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    root.style.setProperty('color-scheme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (event) => {
      setTheme(event.matches ? 'dark' : 'light');
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }

    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div
      className={clsx(
        theme === 'dark' ? 'dark' : '',
        'min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100'
      )}
    >
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-grid-light bg-[size:32px_32px] opacity-80 dark:bg-grid-dark dark:opacity-60"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-brand/10 via-transparent to-transparent dark:from-brand/20"
          aria-hidden="true"
        />

        <Navbar
          sections={NAV_SECTIONS}
          theme={theme}
          onToggleTheme={toggleTheme}
          resumeUrl={contact.resumeUrl}
        />

        <main className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-24 pt-32 sm:px-6 lg:gap-32 lg:px-8">
          <HeroSection data={hero} socialLinks={socialLinks} resumeUrl={contact.resumeUrl} />
          <SkillsSection data={skills} />
          <ExperienceSection items={experiences} />
          <ProjectsSection items={projects} />
          {highlights.length > 0 && <HighlightsSection items={highlights} />}
          {research.length > 0 && <ResearchSection items={research} />}
          <ContactSection contact={contact} />
        </main>

        <Footer socialLinks={socialLinks} />
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default App;
