import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { getIconComponent } from '../utils/iconMap.js';

function HeroSection({ data, socialLinks = [], resumeUrl }) {
  const Icon = getIconComponent('FileDown');

  return (
    <section id="about" className="scroll-mt-safe">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-glow backdrop-blur dark:border-white/10 dark:bg-slate-950/80 sm:p-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand/20 via-transparent to-accent/20 opacity-60 blur-3xl" />

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
              <div className="rounded-2xl border border-brand/20 bg-brand/5 p-4 text-sm text-brand dark:border-brand/30 dark:bg-brand/10">
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
            <div className="relative rounded-3xl border border-slate-200/60 bg-white/80 p-6 shadow-glow backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
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
                  {data.metrics?.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-baseline justify-between rounded-2xl bg-slate-100/80 p-3 text-slate-600 dark:bg-white/5 dark:text-slate-300"
                    >
                      <span className="text-sm font-medium uppercase tracking-[0.2em]">{metric.label}</span>
                      <span className="text-xl font-semibold text-slate-900 dark:text-white">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-brand/30 bg-brand/10 p-4 text-sm text-brand dark:border-brand/40 dark:bg-brand/15 dark:text-brand-light">
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
