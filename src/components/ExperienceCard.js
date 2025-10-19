import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

function ExperienceCard({ item, index }) {
  const { company, role, location, timeline, contributions, tech } = item;

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
      className="relative ml-10 overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-7 shadow-lg transition hover:-translate-y-1 hover:border-brand hover:shadow-glow dark:border-white/10 dark:bg-slate-950/80"
    >
      <span className="absolute -left-10 top-8 flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand bg-white text-brand shadow-[0_18px_36px_-18px_rgba(37,99,235,0.55)] dark:bg-slate-950">
        <Briefcase className="h-5 w-5" />
      </span>
      <span className="absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r from-brand via-brand-light to-accent" aria-hidden="true" />

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">{timeline}</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{role}</h3>
          <p className="text-base font-medium text-slate-600 dark:text-slate-300">{company}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
      </div>

      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {contributions?.map((point) => (
          <li key={point} className="leading-relaxed">
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
        {tech?.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200/70 px-3 py-1 text-[0.65rem] text-slate-600 transition dark:border-white/10 dark:text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default ExperienceCard;
