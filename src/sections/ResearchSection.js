import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.js';

function ResearchSection({ items = [] }) {
  if (!items.length) return null;

  return (
    <section id="research" className="scroll-mt-safe">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Research"
          title="Exploring ML and how it can assist in immersive therapy and automation"
          description="I routinely translate project learnings into documented insights—fueling papers, have published couple of articles in conferences too."
        />

        <div className="grid gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
              className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm transition hover:border-brand dark:border-white/10 dark:bg-slate-950/70"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Research Focus</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-900 transition hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:border-white/10 dark:text-white"
                    aria-label={`Read more about ${item.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
              <div className="mt-3 text-sm text-slate-500 dark:text-slate-400">{item.venue}</div>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">{item.status}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchSection;
