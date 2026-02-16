import { getProjects } from '@/lib/projects';
import SectionHeading from '@/components/SectionHeading';
import Tag from '@/components/Tag';
import ProjectCard from '@/components/ProjectCard';

export const metadata = {
  title: 'Projects',
  description: 'Selected projects and events in machine learning, systems, web development, and hackathon organizing',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  // Extract unique tags
  const allTags = Array.from(
    new Set(projects.flatMap((p) => p.tags || []))
  ).sort();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
          Projects
        </h1>
        <p className="text-muted text-lg">
          Selected work across machine learning, systems, web development, and event organizing.
        </p>
      </div>

      {/* Projects list */}
      <div className="space-y-0">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            description={project.description}
            category={project.category}
            tags={project.tags}
            year={project.year || project.date?.split('-')[0]}
            impact={project.impact}
            location={project.location}
            techStack={project.techStack}
            links={project.links}
            banner={project.banner || project.images?.[0]}
          />
        ))}
      </div>
    </div>
  );
}
