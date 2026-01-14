import { getExperience } from '@/lib/experience';
import ExperienceItem from '@/components/ExperienceItem';

export const metadata = {
  title: 'Experience',
  description: 'Research, teaching, and industry experience',
};

export default async function ExperiencePage() {
  const experience = await getExperience();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
          Experience
        </h1>
        <p className="text-muted text-lg">
          Industry, research, and teaching roles that have shaped my work.
        </p>
      </div>

      <div className="space-y-0">
        {experience.map((entry) => (
          <ExperienceItem key={entry.slug} entry={entry} />
        ))}
      </div>
    </div>
  );
}
