import { ExperienceEntry } from '@/lib/experience';
import CompanyIcon from './CompanyIcon';

interface ExperienceItemProps {
  entry: ExperienceEntry;
}

export default function ExperienceItem({ entry }: ExperienceItemProps) {
  return (
    <div className="border-b border-border py-8 last:border-0">
      <div className="flex gap-8">
        {/* Left: Icon */}
        <div className="flex-shrink-0 flex items-start justify-center w-20">
          <CompanyIcon 
            icon={entry.icon} 
            className={entry.org?.toLowerCase().includes('amazon') || entry.org?.toLowerCase().includes('aws') ? 'w-24 h-24' : 'w-14 h-14'}
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-heading font-semibold">
            {entry.role}
          </h3>
          <p className="text-sm text-muted mb-1">
            {entry.org}
          </p>
          <p className="text-xs text-muted mb-3">
            {entry.dates}
            {entry.location && ` · ${entry.location}`}
          </p>

          {/* Description - conversational paragraph */}
          {entry.description && (
            <p className="text-sm text-muted leading-relaxed">
              {entry.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
