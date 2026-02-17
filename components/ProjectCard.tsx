import Image from 'next/image';
import Tag from './Tag';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  slug?: string;
  title: string;
  description: string;
  category?: 'Software' | 'Event' | 'Research';
  tags?: string[];
  year?: string;
  impact?: string;
  location?: string;
  techStack?: string[];
  links?: {
    label: string;
    url: string;
  }[];
  banner?: string;
  bannerScale?: number;
  bannerPosition?: string;
}

const getLinkIcon = (label: string) => {
  const labelLower = label.toLowerCase();
  if (labelLower.includes('github')) {
    return <GitHubIcon className="w-4 h-4" />;
  }
  return <ExternalLinkIcon className="w-4 h-4" />;
};

export default function ProjectCard({
  slug,
  title,
  description,
  category,
  tags,
  year,
  impact,
  location,
  techStack,
  links,
  banner,
  bannerScale,
  bannerPosition,
}: ProjectCardProps) {
  return (
    <div id={slug} className="border-b border-border py-6 last:border-0 scroll-mt-24 transition-all duration-200 hover:scale-[1.01] hover:-translate-y-1 cursor-default">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Text content */}
        <div className="flex-1">
          <div className="mb-2">
            <div className="flex items-baseline gap-3 mb-1 flex-wrap">
              <h3 className="text-lg font-heading font-semibold">
                {title}
              </h3>
              {category && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 font-medium">
                  {category}
                </span>
              )}
              {year && (
                <span className="text-sm text-muted">{year}</span>
              )}
            </div>
            {/* Location for event-type projects */}
            {location && (
              <p className="text-sm text-muted">{location}</p>
            )}
          </div>
          
          {/* Impact line for events */}
          {impact && (
            <p className="text-sm font-medium text-neutral-700 mb-2">{impact}</p>
          )}
          
          <p className="text-muted text-sm mb-3">
            {description}
          </p>

          {/* Tech stack tags */}
          {(techStack || tags) && (
            <div className="flex flex-wrap gap-2 mt-2">
              {(techStack || tags || []).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}

          {/* Links */}
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-3">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors"
                >
                  {getLinkIcon(link.label)}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Right: Banner/Visual */}
        {banner && (
          <div className="flex-shrink-0 w-full md:w-80">
            <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden border border-border">
              <Image
                src={banner}
                alt={title}
                fill
                className="object-cover"
                style={{
                  ...(bannerScale && { transform: `scale(${bannerScale})` }),
                  ...(bannerPosition && { objectPosition: bannerPosition }),
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
