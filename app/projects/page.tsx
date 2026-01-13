import { getProjects } from '@/lib/projects';
import Link from 'next/link';
import Card from '@/components/Card';
import SectionHeading from '@/components/SectionHeading';
import Tag from '@/components/Tag';

export const metadata = {
  title: 'Projects',
  description: 'Selected projects in machine learning, systems, and web development',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  // Extract unique tags
  const allTags = Array.from(
    new Set(projects.flatMap((p) => p.tags || []))
  ).sort();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
          Projects
        </h1>
        <p className="text-muted text-lg">
          Selected work across machine learning, systems, and web development.
        </p>
      </div>

      {/* Tags filter - client-side filtering would be better, but keeping simple for now */}
      {allTags.length > 0 && (
        <div className="mb-12 flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}

      {/* Projects grid */}
      <div className="grid gap-6 md:gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.slug} href={`/projects/${project.slug}`}>
            <h3 className="text-xl font-heading font-medium mb-2">
              {project.title}
            </h3>
            <p className="text-muted mb-4">{project.description}</p>
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
