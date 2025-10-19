import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import clsx from 'clsx';

function ProjectCard({ project, index }) {
  const { name, description, impact, stack, tags, links } = project;
  const hasGithub = Boolean(links?.github);
  const hasLive = Boolean(links?.live);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -14, rotateX: 1.5, rotateY: -1 }}
      style={{ transformPerspective: 1000 }}
      className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 shadow-lg transition-transform duration-300 dark:border-white/10 dark:bg-slate-950/80"
    >
      <div className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-br from-brand/20 via-transparent to-accent/20 p-6 dark:border-white/10 dark:from-brand/30 dark:to-accent/30">
        <motion.div
          className="absolute inset-0 -z-10 opacity-50 blur-3xl"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(37,99,235,0.4), transparent 45%), radial-gradient(circle at 80% 30%, rgba(249,115,22,0.35), transparent 45%)' }}
        />
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.35em] text-brand">
          {tags?.map((tag) => (
            <span key={tag} className="rounded-full bg-white/40 px-3 py-1 text-[0.65rem] font-medium text-brand dark:bg-white/10 dark:text-brand-light">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-slate-900 transition group-hover:text-brand dark:text-white">
          {name}
        </h3>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-6 p-6">
        <div className="space-y-4">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {description}
          </p>
          {impact && (
            <p className="rounded-2xl bg-slate-100/80 p-3 text-sm text-slate-700 dark:bg-white/5 dark:text-slate-200">
              {impact}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
          {stack?.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200/70 px-3 py-1 text-[0.65rem] text-slate-600 transition hover:border-brand hover:text-brand dark:border-white/10 dark:text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 border-t border-slate-200/70 bg-slate-50/80 p-6 dark:border-white/10 dark:bg-white/5">
        {hasGithub && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 transition hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:border-white/10 dark:bg-slate-900 dark:text-white"
          >
            <Github className="h-4 w-4" />
            <span>Code</span>
          </a>
        )}
        {hasLive && (
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand',
              'bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200'
            )}
          >
            <ArrowUpRight className="h-4 w-4" />
            <span>Live</span>
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
