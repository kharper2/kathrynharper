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
        <div className="flex flex-col md:flex-row md:items-center md:gap-12 mb-8">
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
            
            {/* Contact Links */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:kharper@college.harvard.edu"
                className="flex items-center gap-3 text-muted hover:text-text transition-colors text-sm"
              >
                <EmailIcon className="w-5 h-5" />
                <span>kharper@college.harvard.edu</span>
              </a>
              <a
                href="https://github.com/kharper2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-text transition-colors text-sm"
              >
                <GitHubIcon className="w-5 h-5" />
                <span>github.com/kharper2</span>
              </a>
              <a
                href="https://www.linkedin.com/in/harperkathryn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-text transition-colors text-sm"
              >
                <LinkedInIcon className="w-5 h-5" />
                <span>linkedin.com/in/harperkathryn</span>
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
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          <Link href="/experience#mit-ccrg" className="flex flex-col items-center text-center transition-all duration-200 hover:scale-[1.05] hover:-translate-y-1 cursor-pointer">
            <div className="h-20 md:h-24 flex items-center justify-center mb-3">
              <Image src="/logos/MIT-logo.png" alt="MIT" width={96} height={96} className="object-contain max-h-full w-auto" />
            </div>
            <p className="text-xs md:text-sm font-medium">ML Research at MIT</p>
          </Link>
          <Link href="/experience#harvard-seas-cs124" className="flex flex-col items-center text-center transition-all duration-200 hover:scale-[1.05] hover:-translate-y-1 cursor-pointer">
            <div className="h-20 md:h-24 flex items-center justify-center mb-3">
              <Image src="/logos/seas.png" alt="Harvard SEAS" width={64} height={64} className="object-contain max-h-full w-auto" />
            </div>
            <p className="text-xs md:text-sm font-medium">Harvard Teaching Fellow</p>
          </Link>
          <Link href="/experience#aws-incident-tooling" className="flex flex-col items-center text-center transition-all duration-200 hover:scale-[1.05] hover:-translate-y-1 cursor-pointer">
            <div className="h-20 md:h-24 flex items-center justify-center mb-3">
              <Image src="/logos/Amazon-Smile-Logo-PNG-Photos.png" alt="AWS" width={140} height={100} className="object-contain max-h-full w-auto" />
            </div>
            <p className="text-xs md:text-sm font-medium">AWS Intern</p>
          </Link>
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
          <Link href="/community#hackharvard-china" className="block border-b border-border pb-6 transition-all duration-200 hover:scale-[1.01] hover:-translate-y-1 cursor-pointer">
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
          </Link>
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
            <Link key={project.slug} href={`/projects#${project.slug}`} className="group block transition-all duration-200 hover:scale-[1.03] hover:-translate-y-1">
              {project.banner && (
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-border mb-3 transition-shadow duration-200 group-hover:shadow-lg">
                  <Image
                    src={project.banner}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <p className="text-sm font-medium text-center">{project.title}</p>
            </Link>
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
            <div key={course.code} className="border border-border rounded-lg p-3 transition-all duration-200 hover:border-neutral-300 hover:scale-[1.03] hover:-translate-y-1 cursor-default">
              <p className="font-medium text-sm">{course.name}</p>
              <p className="text-xs text-muted">{course.code}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
