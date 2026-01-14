import Link from 'next/link';
import Image from 'next/image';
import Tag from './Tag';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import DocumentIcon from './icons/DocumentIcon';

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tags?: string[];
  year?: string;
  techStack?: string[];
  links?: {
    label: string;
    url: string;
  }[];
  banner?: string;
}

const getLinkIcon = (label: string) => {
  const labelLower = label.toLowerCase();
  if (labelLower.includes('github')) {
    return <GitHubIcon className="w-4 h-4" />;
  } else if (labelLower.includes('read more') || labelLower.includes('read')) {
    return <DocumentIcon className="w-4 h-4" />;
  }
  return <ExternalLinkIcon className="w-4 h-4" />;
};

export default function ProjectCard({
  slug,
  title,
  description,
  tags,
  year,
  techStack,
  links,
  banner,
}: ProjectCardProps) {
  return (
    <div className="border-b border-border py-8 last:border-0">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Text content */}
        <div className="flex-1">
          <div className="flex items-baseline gap-3 mb-2">
            <h3 className="text-2xl font-heading font-semibold">
              {title}
            </h3>
            {year && (
              <span className="text-sm text-muted">{year}</span>
            )}
          </div>
          
          <p className="text-muted text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Tech stack tags */}
          {(techStack || tags) && (
            <div className="flex flex-wrap gap-2 mb-4">
              {(techStack || tags || []).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}

          {/* Links */}
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-4">
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
              <Link
                href={`/projects/${slug}`}
                className="flex items-center gap-2 text-sm text-muted hover:text-text transition-colors"
              >
                <DocumentIcon className="w-4 h-4" />
                <span>Read More</span>
              </Link>
            </div>
          )}
        </div>

        {/* Right: Banner/Visual */}
        {banner && (
          <div className="flex-shrink-0 w-full md:w-80">
            <Link href={`/projects/${slug}`}>
              <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden border border-border">
                <Image
                  src={banner}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
