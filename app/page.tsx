import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '@/lib/projects';
import { getExperience } from '@/lib/experience';
import { getCommunity } from '@/lib/community';
import Tag from '@/components/Tag';
import SectionHeading from '@/components/SectionHeading';
import ProfilePhoto from '@/components/ProfilePhoto';
import EmailIcon from '@/components/icons/EmailIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import type { Metadata } from 'next';

const highlightedCourses = [
  { name: 'Big Data Algorithms', code: 'COMPSCI 2241' },
  { name: 'Data Structures and Algorithms', code: 'COMPSCI 124' },
  { name: 'Distributed Computing', code: 'COMPSCI 262' },
  { name: 'High Performance Computing', code: 'COMPSCI 205' },
  { name: 'Machine Learning', code: 'COMPSCI 181' },
  { name: 'Quantum Learning Theory', code: 'COMPSCI 2233/PHYSICS 272' },
];

export const metadata: Metadata = {
  title: 'Home',
  description: 'Kathryn Harper — CS at Harvard. ML/AI, systems, and decision-making.',
};

export default async function Home() {
  const projects = await getProjects();
  const experience = await getExperience();
  const community = await getCommunity();

  // Get specific highlighted items
  const highlightedExperience = experience.filter(e => 
    e.slug === 'mit-ccrg' || e.slug === 'harvard-seas-cs124' || e.slug === 'aws-incident-tooling'
  ).sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

  const selectedProjects = projects.filter(p => 
    p.slug === 'cubesat-flight-software' || p.slug === 'graphene' || p.slug === 'taco'
  ).sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

  const hackHarvardChina = community.find(c => c.slug === 'hackharvard-china');

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
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              <span className="block">ML/AI, systems, and decision-making.</span>
              <span className="block">Off-hours: card games and Rubik&apos;s cubes.</span>
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a
                href="mailto:kharper@college.harvard.edu"
                className="text-muted hover:text-text transition-colors"
                aria-label="Email"
              >
                <EmailIcon className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/kharper2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-text transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/harperkathryn/"
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

      {/* Highlighted Experience */}
      <section className="mb-20 md:mb-28">
        <div className="flex items-center justify-between mb-8">
          <SectionHeading>Highlighted Experience</SectionHeading>
          <Link
            href="/experience"
            className="text-muted hover:text-text text-sm transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-3">
              <Image src="/logos/MIT-logo.png" alt="MIT" width={64} height={64} className="object-contain" />
            </div>
            <p className="text-sm font-medium">ML Research at MIT</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-3">
              <Image src="/logos/seas.png" alt="Harvard SEAS" width={64} height={64} className="object-contain" />
            </div>
            <p className="text-sm font-medium">Harvard Teaching Fellow</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-16 mb-3">
              <Image src="/logos/Amazon-Smile-Logo-PNG-Photos.png" alt="AWS" width={80} height={64} className="object-contain" />
            </div>
            <p className="text-sm font-medium">AWS Intern</p>
          </div>
        </div>
      </section>

      {/* Recent Community */}
      <section className="mb-20 md:mb-28">
        <div className="flex items-center justify-between mb-8">
          <SectionHeading>Recent Community</SectionHeading>
          <Link
            href="/community"
            className="text-muted hover:text-text text-sm transition-colors"
          >
            View all →
          </Link>
        </div>
        {hackHarvardChina && (
          <div className="border-b border-border pb-6">
            <h3 className="text-lg font-heading font-medium mb-1">
              {hackHarvardChina.title}
            </h3>
            <p className="text-sm text-muted mb-2">
              {hackHarvardChina.dates} · {hackHarvardChina.location}
            </p>
            {hackHarvardChina.impact && (
              <p className="text-sm font-medium text-neutral-700 mb-2">{hackHarvardChina.impact}</p>
            )}
            <p className="text-sm text-muted">{hackHarvardChina.summary}</p>
          </div>
        )}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {selectedProjects.map((project) => (
            <div key={project.slug} className="group">
              {project.banner && (
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-border mb-3">
                  <Image
                    src={project.banner}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <p className="text-sm font-medium text-center">{project.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlighted Coursework */}
      <section className="mb-20 md:mb-28">
        <div className="flex items-center justify-between mb-8">
          <SectionHeading>Highlighted Coursework</SectionHeading>
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
