import { ExperienceEntry } from '@/lib/experience';
import MITIcon from './icons/MITIcon';
import HarvardSEASIcon from './icons/HarvardSEASIcon';
import AWSIcon from './icons/AWSIcon';
import HarvardChanIcon from './icons/HarvardChanIcon';
import Tag from './Tag';

interface ExperienceTimelineProps {
  entries: ExperienceEntry[];
}

const getOrganizationIcon = (organization: string) => {
  const orgLower = organization.toLowerCase();
  if (orgLower.includes('mit') && !orgLower.includes('harvard')) {
    return <MITIcon />;
  } else if (orgLower.includes('harvard') && (orgLower.includes('seas') || orgLower.includes('engineering'))) {
    return <HarvardSEASIcon />;
  } else if (orgLower.includes('harvard') && (orgLower.includes('chan') || orgLower.includes('public health') || orgLower.includes('hsph'))) {
    return <HarvardChanIcon />;
  } else if (orgLower.includes('aws') || orgLower.includes('amazon web services') || orgLower.includes('amazon')) {
    return <AWSIcon />;
  }
  // Default icon
  return (
    <div className="w-12 h-12 rounded-lg bg-section-tint border border-border flex items-center justify-center">
      <span className="text-xs font-bold text-text">
        {organization.charAt(0).toUpperCase()}
      </span>
    </div>
  );
};

export default function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    <div className="space-y-8">
      {entries.map((entry, idx) => (
        <div key={idx} className="flex gap-6">
          {/* Left side: Icon and dates */}
          <div className="flex-shrink-0 flex flex-col items-start w-24">
            <div className="mb-3">
              {getOrganizationIcon(entry.organization)}
            </div>
            <p className="text-xs text-muted leading-tight">
              {entry.dates}
            </p>
          </div>
          
          {/* Right side: Content */}
          <div className="flex-1">
            <h3 className="text-xl font-heading font-semibold mb-1">
              {entry.title}
            </h3>
            <p className="text-muted text-sm mb-3">
              {entry.organization}
            </p>
            {entry.impact && entry.impact.length > 0 && (
              <p className="text-muted text-sm mb-4 leading-relaxed">
                {entry.impact[0]}
              </p>
            )}
            {entry.tech && entry.tech.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {entry.tech.map((skill, i) => (
                  <Tag key={i}>{skill}</Tag>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
