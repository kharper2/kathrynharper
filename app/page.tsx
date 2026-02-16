import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import ProfilePhoto from '@/components/ProfilePhoto';
import EmailIcon from '@/components/icons/EmailIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Kathryn Harper — CS at Harvard. ML/AI, systems, and decision-making.',
};

export default function Home() {

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* Hero */}
      <section className="mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-start md:gap-12 mb-8">
          {/* Photo + Contact Links */}
          <div className="mb-6 md:mb-0 flex-shrink-0 flex flex-col items-center md:items-start">
            <ProfilePhoto />
            {/* Contact Links */}
            <div className="flex flex-col gap-2 mt-6">
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
          
          {/* Text Content + Bio */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-heading font-semibold mb-6 text-text whitespace-nowrap">
              Kathryn Harper
            </h1>
            <div className="text-sm leading-relaxed space-y-4">
              <p className="text-text text-base mb-6">
                <span className="block">ML/AI, systems, and decision-making.</span>
                <span className="block">Off-hours: card games and Rubik&apos;s cubes.</span>
              </p>
              <p className="text-muted mt-8">
                Hey, I&apos;m Kathryn. Thanks for stopping by. I&apos;m a junior at Harvard pursuing an AB/SM in Computer Science. Interested in AI/ML, systems, healthcare, and game theory. Proud Chicagoan (the city, not the burbs). Adrenaline junkie, poker/card-game enthusiast, and habitual Rubik&apos;s-cube fidgeter. Future Forbes 30 Under 30 to prison pipeline (kidding… mostly).
              </p>
              <p className="text-muted">
                When I&apos;m not coding, you&apos;ll probably find me skiing, playing violin, or assembling a charcuterie board.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current */}
      <section className="mb-20 md:mb-28">
        <div className="mb-8">
          <SectionHeading>Current</SectionHeading>
        </div>
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          <div className="flex flex-col items-center text-center transition-all duration-200 hover:scale-[1.05] hover:-translate-y-1 cursor-default">
            <div className="h-20 md:h-24 flex items-center justify-center mb-3">
              <Image src="/logos/harvard.jpeg" alt="Harvard" width={64} height={64} className="object-contain max-h-full w-auto" />
            </div>
            <p className="text-xs md:text-sm font-medium">AB/SM in CS</p>
          </div>
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
        </div>
      </section>

    </div>
  );
}
