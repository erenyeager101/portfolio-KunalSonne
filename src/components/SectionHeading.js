import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const maxWidth = align === 'center' ? 'max-w-3xl' : 'max-w-2xl';

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${alignment} ${maxWidth} space-y-3`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-base text-slate-600 dark:text-slate-300 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
