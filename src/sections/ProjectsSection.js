import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.js';
import ProjectCard from '../components/ProjectCard.js';

function ProjectsSection({ items = [] }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const tagFilters = useMemo(() => {
    const tagSet = new Set();
    items.forEach((project) => {
      project.tags?.forEach((tag) => tagSet.add(tag));
    });
    return ['All', ...Array.from(tagSet)];
  }, [items]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return items;
    return items.filter((project) => project.tags?.includes(activeFilter));
  }, [items, activeFilter]);

  if (!items.length) return null;

  return (
    <section id="projects" className="scroll-mt-safe">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Projects"
          title="Ship-ready builds and ongoing experiments"
          description="Explore production work and prototypes across robotics, XR, and analytics. Filter by focus area to jump straight to what matters most to you."
        />

        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/90 p-3 shadow-lg dark:border-white/10 dark:bg-slate-950/80">
          {tagFilters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <motion.button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                whileTap={{ scale: 0.96 }}
                className={
                  isActive
                    ? 'rounded-full border border-transparent bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-glow dark:bg-white dark:text-slate-900'
                    : 'rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-brand hover:text-brand dark:border-white/10 dark:text-slate-300'
                }
                aria-pressed={isActive}
              >
                {filter}
              </motion.button>
            );
          })}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;
