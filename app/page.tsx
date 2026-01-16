import Link from 'next/link';
import { getProjects } from '@/lib/projects';
import { getExperience } from '@/lib/experience';
import { getCommunity } from '@/lib/community';
import Card from '@/components/Card';
import Tag from '@/components/Tag';
import SectionHeading from '@/components/SectionHeading';
import ProfilePhoto from '@/components/ProfilePhoto';
import EmailIcon from '@/components/icons/EmailIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import type { Metadata } from 'next';

const highlightedCourses = [
  { name: 'Big Data Algorithms', code: 'COMPSCI 2241', school: 'Harvard' },
  { name: 'Data Structures and Algorithms', code: 'COMPSCI 124', school: 'Harvard' },
  { name: 'Distributed Computing', code: 'COMPSCI 262', school: 'Harvard' },
  { name: 'High Performance Computing', code: 'COMPSCI 205', school: 'Harvard' },
  { name: 'Machine Learning', code: 'COMPSCI 181', school: 'Harvard' },
  { name: 'Quantum Learning Theory', code: 'COMPSCI 2233/PHYSICS 272', school: 'Harvard' },
];

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
        <div className="flex flex-col md:flex-row md:items-start md:gap-12 mb-8">
          {/* Photo */}
          <div className="mb-6 md:mb-0 flex-shrink-0">
            <ProfilePhoto />
          </div>
          
          {/* Text Content */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-heading font-semibold mb-6 text-text">
              Kathryn Harper
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-8 max-w-2xl leading-relaxed">
              Building impactful technology at the intersection of machine learning, systems, and human-centered design.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a
                href="mailto:kathryn@example.com"
                className="text-muted hover:text-text transition-colors"
                aria-label="Email"
              >
                <EmailIcon className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-text transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-text transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {selectedProjects.map((project) => (
            <Card key={project.slug} href={`/projects/${project.slug}`}>
              <h3 className="text-lg font-heading font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-muted text-sm mb-3 line-clamp-3">
                {project.description}
              </p>
              {(project.techStack || project.tags) && (
                <div className="flex flex-wrap gap-2">
                  {(project.techStack || project.tags || []).slice(0, 3).map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              )}
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
          {selectedExperience.map((item) => (
            <div key={item.slug} className="border-b border-border pb-6 last:border-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <h3 className="text-lg font-heading font-medium">
                  {item.role}
                </h3>
                <span className="text-sm text-muted mt-1 md:mt-0">
                  {item.org} ({item.dates})
                </span>
              </div>
              {item.highlights && item.highlights.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-sm text-muted mt-2">
                  {item.highlights.slice(0, 1).map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              )}
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
              <p className="text-muted text-sm">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coursework Highlights */}
      <section className="mb-20 md:mb-28">
        <div className="flex items-center justify-between mb-8">
          <SectionHeading>Coursework</SectionHeading>
          <Link
            href="/about"
            className="text-muted hover:text-text text-sm transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {highlightedCourses.map((course) => (
            <div key={course.code} className="border border-border rounded-lg p-3">
              <p className="font-medium text-sm">{course.name}</p>
              <p className="text-xs text-muted">{course.code}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
