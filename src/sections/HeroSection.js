import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { getIconComponent } from '../utils/iconMap.js';

function HeroSection({ data, socialLinks = [], resumeUrl }) {
  const Icon = getIconComponent('FileDown');

  return (
    <section id="about" className="scroll-mt-safe">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 p-8 shadow-glow backdrop-blur dark:border-white/10 dark:bg-slate-950/85 sm:p-12">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-br from-brand/30 via-transparent to-accent/30 opacity-80 blur-3xl" />
        <div className="pointer-events-none absolute -top-24 -left-24 -z-10 h-56 w-56 rounded-full bg-brand/25 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-28 -right-32 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-[140px]" />

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand">{data.greeting}</p>
              <h1 className="text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                {data.name}
              </h1>
              <div className="flex flex-wrap gap-2 text-sm font-medium uppercase tracking-[0.35em] text-brand">
                {data.roles?.map((role) => (
                  <span key={role} className="rounded-full bg-brand/10 px-3 py-1 text-[0.68rem] text-brand">
                    {role}
                  </span>
                ))}
              </div>
              <p className="text-base text-slate-600 dark:text-slate-300 sm:text-lg">
                {data.summary}
              </p>
              <div className="flex flex-col gap-3 rounded-3xl border border-brand/20 bg-gradient-to-br from-brand/10 via-white to-white p-5 text-sm text-brand shadow-inner dark:border-brand/30 dark:from-brand/15 dark:via-slate-950 dark:to-slate-950/80">
                <span className="inline-flex w-max rounded-full bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand/80 dark:bg-white/10 dark:text-brand-light">
                  In focus
                </span>
                {data.highlight}
              </div>
            </motion.div>

            <div className="flex flex-wrap items-center gap-4">
              {resumeUrl && (
                <a
                  href={resumeUrl}
                  className="inline-flex items-center gap-2 rounded-full border border-transparent bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-4 w-4" />
                  <span>Download Resume</span>
                </a>
              )}
              <div className="flex items-center gap-3">
                {socialLinks.map((item) => {
                  const SocialIcon = getIconComponent(item.icon);
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-900 transition hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:border-white/10 dark:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                    >
                      <SocialIcon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/85 p-6 shadow-glow backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
              <span className="pointer-events-none absolute -right-28 top-6 h-48 w-48 rounded-full bg-brand/25 blur-[120px]" />
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">Based in</p>
                  <p className="text-lg font-medium text-slate-900 dark:text-white">{data.location}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand">Availability</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{data.availability}</p>
                </div>
                <div className="space-y-3">
                  {data.metrics?.map((metric, metricIndex) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.45, delay: metricIndex * 0.05, ease: 'easeOut' }}
                      className="flex items-baseline justify-between rounded-2xl bg-slate-100/80 px-4 py-3 text-slate-600 dark:bg-white/5 dark:text-slate-300"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                        {metric.label}
                      </span>
                      <span className="text-xl font-semibold text-slate-900 dark:text-white">{metric.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-brand/30 bg-brand/10 p-4 text-sm text-brand dark:border-brand/40 dark:bg-brand/20 dark:text-brand-light">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold uppercase tracking-[0.3em]">Let’s collaborate</p>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <p className="mt-2 text-xs text-brand/80 dark:text-brand-light">
                  Reach out if you’re building in robotics, XR, or analytics. I love shipping ambitious systems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
