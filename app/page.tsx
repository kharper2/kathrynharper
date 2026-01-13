import Link from 'next/link';
import { getProjects } from '@/lib/projects';
import { getExperience } from '@/lib/experience';
import { getCommunity } from '@/lib/community';
import Button from '@/components/Button';
import Card from '@/components/Card';
import SectionHeading from '@/components/SectionHeading';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Kathryn Harper - Building impactful technology at the intersection of machine learning, systems, and human-centered design.',
};

export default async function Home() {
  const projects = await getProjects();
  const experience = await getExperience();
  const community = await getCommunity();

  const selectedProjects = projects.slice(0, 3);
  const selectedExperience = experience.slice(0, 5);
  const selectedCommunity = community.slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* Hero */}
      <section className="mb-24 md:mb-32">
        <h1 className="text-5xl md:text-7xl font-heading font-semibold mb-6 text-text">
          Kathryn Harper
        </h1>
        <p className="text-xl md:text-2xl text-muted mb-8 max-w-2xl leading-relaxed">
          Building impactful technology at the intersection of machine learning, systems, and human-centered design.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href="mailto:kathryn@example.com" variant="primary">
            Email
          </Button>
          <Button href="https://github.com" variant="secondary" external>
            GitHub
          </Button>
          <Button href="https://linkedin.com" variant="secondary" external>
            LinkedIn
          </Button>
          <Button href="/cv.pdf" variant="secondary" external>
            CV
          </Button>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="mb-20 md:mb-28">
        <div className="flex items-center justify-between mb-8">
          <SectionHeading>Selected Projects</SectionHeading>
          <Link
            href="/projects"
            className="text-muted hover:text-text text-sm transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 md:gap-8">
          {selectedProjects.map((project) => (
            <Card key={project.slug} href={`/projects/${project.slug}`}>
              <h3 className="text-xl font-heading font-medium mb-2">
                {project.title}
              </h3>
              <p className="text-muted mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags?.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-surface border border-border rounded text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Selected Experience */}
      <section className="mb-20 md:mb-28">
        <div className="flex items-center justify-between mb-8">
          <SectionHeading>Experience</SectionHeading>
          <Link
            href="/experience"
            className="text-muted hover:text-text text-sm transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="space-y-6">
          {selectedExperience.map((item, idx) => (
            <div key={idx} className="border-b border-border pb-6 last:border-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <h3 className="text-lg font-heading font-medium">
                  {item.title}
                </h3>
                <span className="text-sm text-muted mt-1 md:mt-0">
                  {item.organization} ({item.dates})
                </span>
              </div>
              <p className="text-muted text-sm">{item.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Preview */}
      <section className="mb-20 md:mb-28">
        <div className="flex items-center justify-between mb-8">
          <SectionHeading>Community</SectionHeading>
          <Link
            href="/community"
            className="text-muted hover:text-text text-sm transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="space-y-6">
          {selectedCommunity.map((item, idx) => (
            <div key={idx} className="border-b border-border pb-6 last:border-0">
              <h3 className="text-lg font-heading font-medium mb-2">
                {item.title}
              </h3>
              <p className="text-muted text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
