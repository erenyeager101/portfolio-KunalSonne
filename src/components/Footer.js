import { getIconComponent } from '../utils/iconMap.js';

function Footer({ socialLinks = [] }) {
  return (
    <footer className="border-t border-slate-200/70 bg-white/80 py-10 text-sm text-slate-600 dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand">Let’s build the future</p>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
            Crafted with React, Tailwind CSS, and Framer Motion. Deployed to run fast anywhere.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((item) => {
            const Icon = getIconComponent(item.icon);
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-900 transition hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:border-white/10 dark:text-white"
                aria-label={item.label}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
