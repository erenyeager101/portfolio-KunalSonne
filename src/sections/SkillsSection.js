import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.js';

function SkillsSection({ data }) {
  return (
    <section id="skills" className="scroll-mt-safe">
      <div className="space-y-14">
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack toolkit tuned for real-time products"
          description={data?.blurb}
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            {data?.categories?.slice(0, 3).map((category) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-lg shadow-slate-200/40 transition hover:-translate-y-1 hover:border-brand hover:shadow-glow dark:border-white/10 dark:bg-slate-950/80"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-300">
                  {category.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-slate-200/70 px-3 py-1 transition hover:border-brand hover:text-brand dark:border-white/10"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-brand/15 via-white to-accent/10 p-6 text-brand shadow-lg dark:border-brand/30 dark:from-brand/20 dark:via-slate-950 dark:to-accent/20"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.35),_transparent_55%)] opacity-80" />
            <h3 className="text-lg font-semibold uppercase tracking-[0.32em] text-brand dark:text-brand-light">
              Focus Areas
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-brand/90 dark:text-brand-light">
              {data?.categories?.[3]?.items.map((focus) => (
                <li key={focus} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-brand-light" />
                  <span>{focus}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data?.stats?.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
              className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-lg shadow-slate-200/40 dark:border-white/10 dark:bg-slate-950/80"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">{stat.label}</p>
              <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
              {stat.helper && <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.helper}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
