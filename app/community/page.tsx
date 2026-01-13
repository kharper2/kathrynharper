import { getCommunity } from '@/lib/community';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';

export const metadata = {
  title: 'Community',
  description: 'Hackathons, CS education, and community leadership work',
};

export default async function CommunityPage() {
  const community = await getCommunity();

  const hackathons = community.filter(
    (e) => e.category === 'Hackathons & CS Education'
  );
  const leadership = community.filter(
    (e) => e.category === 'Leadership / Organizing'
  );
  const workshops = community.filter(
    (e) => e.category === 'Workshops / Talks'
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
          Community
        </h1>
        <p className="text-muted text-lg">
          Hackathons, CS education initiatives, and community organizing work.
        </p>
      </div>

      {/* Hackathons & CS Education */}
      <section className="mb-16">
        <SectionHeading>Hackathons & CS Education</SectionHeading>
        <div className="mt-8 space-y-10">
          {hackathons.map((entry, idx) => (
            <div key={idx} className="border-b border-border pb-8 last:border-0">
              <h3 className="text-xl font-heading font-medium mb-2">
                {entry.title}
              </h3>
              <p className="text-muted mb-4">{entry.description}</p>
              {entry.metrics && (
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted">
                  {entry.metrics.attendees && (
                    <span>
                      <span className="font-medium">{entry.metrics.attendees}</span>{' '}
                      attendees
                    </span>
                  )}
                  {entry.metrics.mentors && (
                    <span>
                      <span className="font-medium">{entry.metrics.mentors}</span>{' '}
                      mentors
                    </span>
                  )}
                  {entry.metrics.schools && (
                    <span>
                      <span className="font-medium">{entry.metrics.schools}</span>{' '}
                      schools
                    </span>
                  )}
                  {entry.metrics.countries && (
                    <span>
                      <span className="font-medium">{entry.metrics.countries}</span>{' '}
                      countries
                    </span>
                  )}
                </div>
              )}
              {entry.links && entry.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {entry.links.map((link, i) => (
                    <Button
                      key={i}
                      href={link.url}
                      variant="secondary"
                      external
                    >
                      {link.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Leadership / Organizing */}
      <section className="mb-16">
        <SectionHeading>Leadership / Organizing</SectionHeading>
        <div className="mt-8 space-y-10">
          {leadership.map((entry, idx) => (
            <div key={idx} className="border-b border-border pb-8 last:border-0">
              <h3 className="text-xl font-heading font-medium mb-2">
                {entry.title}
              </h3>
              <p className="text-muted mb-4">{entry.description}</p>
              {entry.links && entry.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {entry.links.map((link, i) => (
                    <Button
                      key={i}
                      href={link.url}
                      variant="secondary"
                      external
                    >
                      {link.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Workshops / Talks */}
      {workshops.length > 0 && (
        <section className="mb-16">
          <SectionHeading>Workshops / Talks</SectionHeading>
          <div className="mt-8 space-y-10">
            {workshops.map((entry, idx) => (
              <div key={idx} className="border-b border-border pb-8 last:border-0">
                <h3 className="text-xl font-heading font-medium mb-2">
                  {entry.title}
                </h3>
                <p className="text-muted mb-4">{entry.description}</p>
                {entry.links && entry.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {entry.links.map((link, i) => (
                      <Button
                        key={i}
                        href={link.url}
                        variant="secondary"
                        external
                      >
                        {link.label}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
