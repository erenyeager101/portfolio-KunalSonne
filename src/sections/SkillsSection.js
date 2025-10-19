import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.js';

function SkillsSection({ data }) {
  return (
    <section id="skills" className="scroll-mt-safe">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack toolkit tuned for real-time products"
          description={data?.blurb}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {data?.categories?.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-950/70"
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data?.stats?.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="rounded-3xl border border-brand/20 bg-brand/5 p-5 text-brand dark:border-brand/40 dark:bg-brand/15"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em]">{stat.label}</p>
              <p className="mt-3 text-3xl font-semibold">{stat.value}</p>
              {stat.helper && <p className="mt-2 text-sm text-brand/80">{stat.helper}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
