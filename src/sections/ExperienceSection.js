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
