import SectionHeading from '../components/SectionHeading.js';
import ExperienceCard from '../components/ExperienceCard.js';

function ExperienceSection({ items = [] }) {
  return (
    <section id="experience" className="scroll-mt-safe">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Experience"
          title="Building for robotics, automation, and immersive learning"
          description="Hands-on experience delivering production features, shaping developer tooling, and leading realtime UX inside interdisciplinary teams."
        />

        <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-lg shadow-slate-200/40 dark:border-white/10 dark:bg-slate-950/80">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            I thrive in cross-functional robotics and XR teams, translating field feedback into products operators actually enjoy using. That means trimming telemetry latency by 25%, shaping modular dashboards that scale across devices, and keeping documentation tight so the next sprint moves faster.
          </p>
        </div>

        <div className="relative">
          <span className="timeline-line" aria-hidden="true" />
          <div className="space-y-10">
            {items.map((item, index) => (
              <ExperienceCard key={item.company} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
