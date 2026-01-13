import { getExperience } from '@/lib/experience';
import SectionHeading from '@/components/SectionHeading';
import Prose from '@/components/Prose';

export const metadata = {
  title: 'Experience',
  description: 'Industry, research, and teaching experience',
};

export default async function ExperiencePage() {
  const experience = await getExperience();

  const industry = experience.filter((e) => e.category === 'Industry');
  const research = experience.filter((e) => e.category === 'Research');
  const teaching = experience.filter((e) => e.category === 'Teaching');

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
          Experience
        </h1>
        <p className="text-muted text-lg">
          Industry, research, and teaching roles that have shaped my work.
        </p>
      </div>

      {/* Industry */}
      <section className="mb-16">
        <SectionHeading>Industry</SectionHeading>
        <div className="mt-8 space-y-10">
          {industry.map((entry, idx) => (
            <div key={idx} className="border-b border-border pb-8 last:border-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <h3 className="text-xl font-heading font-medium">
                  {entry.title}
                </h3>
                <span className="text-sm text-muted mt-1 md:mt-0">
                  {entry.organization} ({entry.dates})
                </span>
              </div>
              {entry.impact && entry.impact.length > 0 && (
                <ul className="list-disc list-inside space-y-1 mb-3 text-muted">
                  {entry.impact.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {entry.tech && entry.tech.length > 0 && (
                <p className="text-sm text-muted">
                  <span className="font-medium">Tech:</span>{' '}
                  {entry.tech.join(', ')}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Research */}
      <section className="mb-16">
        <SectionHeading>Research</SectionHeading>
        <div className="mt-8 space-y-10">
          {research.map((entry, idx) => (
            <div key={idx} className="border-b border-border pb-8 last:border-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <h3 className="text-xl font-heading font-medium">
                  {entry.title}
                </h3>
                <span className="text-sm text-muted mt-1 md:mt-0">
                  {entry.organization} ({entry.dates})
                </span>
              </div>
              {entry.impact && entry.impact.length > 0 && (
                <ul className="list-disc list-inside space-y-1 mb-3 text-muted">
                  {entry.impact.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {entry.tech && entry.tech.length > 0 && (
                <p className="text-sm text-muted">
                  <span className="font-medium">Tech:</span>{' '}
                  {entry.tech.join(', ')}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Teaching */}
      <section className="mb-16">
        <SectionHeading>Teaching</SectionHeading>
        <div className="mt-8 space-y-10">
          {teaching.map((entry, idx) => (
            <div key={idx} className="border-b border-border pb-8 last:border-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <h3 className="text-xl font-heading font-medium">
                  {entry.title}
                </h3>
                <span className="text-sm text-muted mt-1 md:mt-0">
                  {entry.organization} ({entry.dates})
                </span>
              </div>
              {entry.impact && entry.impact.length > 0 && (
                <ul className="list-disc list-inside space-y-1 mb-3 text-muted">
                  {entry.impact.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {entry.tech && entry.tech.length > 0 && (
                <p className="text-sm text-muted">
                  <span className="font-medium">Tech:</span>{' '}
                  {entry.tech.join(', ')}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
