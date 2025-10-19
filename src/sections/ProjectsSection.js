import SectionHeading from '../components/SectionHeading.js';
import ProjectCard from '../components/ProjectCard.js';

function ProjectsSection({ items = [] }) {
  if (!items.length) return null;

  return (
    <section id="projects" className="scroll-mt-safe">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Projects"
          title="My Projects"
          description="A snapshot of platforms bridging robotics, XR, and analytics. Each one blends pragmatic delivery with thoughtful human experiences."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
