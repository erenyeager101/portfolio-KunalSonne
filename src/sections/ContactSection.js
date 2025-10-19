import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionHeading from '../components/SectionHeading.js';
import { getIconComponent } from '../utils/iconMap.js';

function ContactSection({ contact }) {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formRef.current) return;

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setErrorMessage('Email service is not configured yet. Add your EmailJS keys to a .env file to enable sending.');
      return;
    }

    setIsSubmitting(true);
    setStatus('sending');
    setErrorMessage('');

    const formData = new FormData(formRef.current);
    const templateParams = {
      from_name: formData.get('name'),
      reply_to: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error', error);
      setStatus('error');
      setErrorMessage('Unable to send message right now. Please retry or drop a direct email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      label: 'Email',
      value: contact?.email,
      icon: 'Mail',
      href: contact?.email ? `mailto:${contact.email}` : undefined
    },
    {
      label: 'Phone',
      value: contact?.phone,
      icon: 'Phone',
      href: contact?.phone ? `tel:${contact.phone}` : undefined
    },
    {
      label: 'Location',
      value: contact?.location,
      icon: 'MapPin'
    }
  ];

  return (
    <section id="contact" className="scroll-mt-safe">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something ambitious together"
          description={contact?.availability}
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-950/70"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Quick details</h3>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              {contactItems.map((item) => {
                const Icon = getIconComponent(item.icon);
                return (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-slate-200 text-slate-900 dark:border-white/10 dark:text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-slate-900 transition hover:text-brand dark:text-white"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{item.value}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>

            {contact?.socialCTA && (
              <p className="rounded-2xl border border-brand/20 bg-brand/5 p-4 text-sm text-brand dark:border-brand/30 dark:bg-brand/10">
                {contact.socialCTA}
              </p>
            )}
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="space-y-5 rounded-3xl border border-brand/20 bg-white/90 p-6 shadow-glow dark:border-brand/40 dark:bg-slate-950/80"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                Name
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/50 dark:border-white/10 dark:bg-slate-900 dark:text-white"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/50 dark:border-white/10 dark:bg-slate-900 dark:text-white"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
              Subject
              <input
                name="subject"
                type="text"
                placeholder="How can we collaborate?"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/50 dark:border-white/10 dark:bg-slate-900 dark:text-white"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
              Message
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Share a few sentences about your project or opportunity."
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/50 dark:border-white/10 dark:bg-slate-900 dark:text-white"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-light focus:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-80"
            >
              {isSubmitting ? 'Sending…' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="text-sm font-medium text-brand">
                Message delivered! I’ll reply within 48 hours.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm font-medium text-accent">
                {errorMessage || 'Something went wrong. Please try again later.'}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
