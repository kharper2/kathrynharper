import Link from 'next/link';
import { ExperienceEntry } from '@/lib/experience';
import CompanyIcon from './CompanyIcon';
import Tag from './Tag';

interface ExperienceItemProps {
  entry: ExperienceEntry;
}

export default function ExperienceItem({ entry }: ExperienceItemProps) {
  const content = (
    <div className="flex gap-8 group">
      {/* Left: Icon */}
      <div className="flex-shrink-0 flex items-center justify-center w-24">
        <CompanyIcon 
          icon={entry.icon} 
          className={entry.org?.toLowerCase().includes('amazon') || entry.org?.toLowerCase().includes('aws') ? 'w-32 h-32' : 'w-16 h-16'}
        />
      </div>

      {/* Right: Content */}
      <div className="flex-1 min-w-0">
        <div className="mb-2">
          <h3 className="text-lg font-heading font-semibold mb-1">
            {entry.role}
          </h3>
          <p className="text-sm text-muted mb-1">
            {entry.org}
          </p>
          <p className="text-xs text-muted">
            {entry.dates}
            {entry.location && ` • ${entry.location}`}
          </p>
        </div>

        {/* Highlights */}
        {entry.highlights && entry.highlights.length > 0 && (
          <ul className="list-disc list-inside space-y-1 mb-3 text-sm text-muted">
            {entry.highlights.slice(0, 2).map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        )}

        {/* Tech or Tags */}
        {entry.tech && (
          <p className="text-xs text-muted">
            <span className="font-medium">Tech:</span> {entry.tech}
          </p>
        )}
        {entry.tags && entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {entry.tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (entry.link) {
    return (
      <Link
        href={entry.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block border-b border-border py-6 hover:border-primary transition-colors"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="border-b border-border py-6">
      {content}
    </div>
  );
}
