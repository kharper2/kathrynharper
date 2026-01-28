import Image from 'next/image';
import { CommunityEntry as CommunityEntryType } from '@/lib/community';

interface CommunityEntryProps {
  entry: CommunityEntryType;
  index: number;
}

export default function CommunityEntry({ entry, index }: CommunityEntryProps) {
  const reverse = index % 2 === 1;

  return (
    <section id={entry.slug} className="py-12 border-b border-[#D1D5DE] last:border-0 scroll-mt-24 transition-all duration-200 hover:scale-[1.01] hover:-translate-y-1 cursor-default">
      <div className="mx-auto w-full max-w-4xl px-6">
        <div
          className={`grid grid-cols-1 md:grid-cols-12 md:gap-12 items-start ${
            reverse ? 'md:[&_.imgCol]:order-2 md:[&_.textCol]:order-1' : ''
          }`}
        >
          {/* Image Column - spans 7 columns */}
          <div className="imgCol col-span-1 md:col-span-7 mb-4 md:mb-0">
            <div className="relative w-full overflow-hidden rounded-2xl border border-[#D1D5DE] aspect-[4/3]">
              <Image
                src={entry.coverImage}
                alt={entry.coverAlt}
                fill
                className={`object-cover ${
                  entry.coverPosition === 'top'
                    ? 'object-top'
                    : 'object-center'
                } ${
                  entry.coverImage.includes('jonesjam')
                    ? 'scale-125'
                    : ''
                }`}
                style={
                  entry.coverImage.includes('jonesjam')
                    ? { filter: 'saturate(1.2)' }
                    : undefined
                }
                sizes="(min-width: 768px) 58vw, 100vw"
                priority={index === 0}
              />
            </div>
          </div>

          {/* Text Column - spans 5 columns */}
          <div className="textCol col-span-1 md:col-span-5 flex flex-col">
            {/* Title */}
            <h2 className="text-2xl font-heading font-semibold mb-2">
              {entry.title}
            </h2>

            {/* Dates · Location */}
            <p className="text-sm text-neutral-500 mb-2">
              {entry.dates}
              {entry.location && ` · ${entry.location}`}
            </p>

            {/* Impact line (emphasized) */}
            {entry.impact && (
              <p className="text-sm font-medium text-neutral-700 mb-3">
                {entry.impact}
              </p>
            )}

            {/* Summary (one sentence) */}
            <p className="text-sm text-neutral-600 leading-relaxed mb-3">
              {entry.summary}
            </p>

            {/* Links row */}
            {entry.links && entry.links.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 mt-auto">
                {entry.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
