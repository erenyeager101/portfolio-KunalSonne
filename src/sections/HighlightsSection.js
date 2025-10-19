import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.js';

function HighlightsSection({ items = [] }) {
  if (!items.length) return null;

  return (
    <section id="highlights" className="scroll-mt-safe">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Highlights"
          title="Recognitions and wins"
          description="Selected milestones from hackathons, research showcases, and competitions where thoughtful engineering made the difference."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href || undefined}
              target={item.href ? '_blank' : undefined}
              rel={item.href ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
              className="group rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-2 hover:border-brand hover:shadow-glow dark:border-white/10 dark:bg-slate-950/70"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Award</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-slate-300 transition group-hover:text-brand" />
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HighlightsSection;
