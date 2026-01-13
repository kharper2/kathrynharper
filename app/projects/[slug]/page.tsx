import { getProjects, getProject } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Prose from '@/components/Prose';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);
  if (!project) {
    return {};
  }
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  const { content } = project as any;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-muted mb-6">{project.description}</p>
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
      </div>

      {content && (
        <div className="mb-12">
          <Prose>
            <ReactMarkdown>{content}</ReactMarkdown>
          </Prose>
        </div>
      )}

      {project.problem && (
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-semibold mb-4">Problem</h2>
          <p className="text-muted leading-relaxed">{project.problem}</p>
        </section>
      )}

      {project.approach && (
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-semibold mb-4">Approach</h2>
          <p className="text-muted leading-relaxed">{project.approach}</p>
        </section>
      )}

      {project.results && (
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-semibold mb-4">Results</h2>
          <p className="text-muted leading-relaxed">{project.results}</p>
        </section>
      )}

      {project.techStack && project.techStack.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-semibold mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </section>
      )}

      {project.links && project.links.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-semibold mb-4">Links</h2>
          <div className="flex flex-wrap gap-4">
            {project.links.map((link, idx) => (
              <Button
                key={idx}
                href={link.url}
                variant="secondary"
                external
              >
                {link.label}
              </Button>
            ))}
          </div>
        </section>
      )}

      {project.images && project.images.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-semibold mb-4">Images</h2>
          <div className="grid gap-4">
            {project.images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`${project.title} - Image ${idx + 1}`}
                className="rounded-lg w-full"
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
