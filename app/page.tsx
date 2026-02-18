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
  description: 'Kathryn Harper — CS at Harvard. AI/ML, systems, and decision-making.',
};

export default function Home() {

  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-8">
      {/* Hero */}
      <section className="mb-6 md:mb-8">
        {/* Mobile: Name + Tagline above, Photo + Contact side by side, Bio below */}
        {/* Desktop: Photo + Contact left, Name + Tagline + Bio right */}
        
        {/* Mobile only: Name + Tagline at top */}
        <div className="md:hidden mb-4">
          <h1 className="text-3xl font-heading font-semibold mb-1 text-text">
            Kathryn Harper
          </h1>
          <p className="text-text text-xs">
            <span className="block">AI/ML, systems, and decision-making.</span>
            <span className="block">Off-hours: card games and Rubik&apos;s cubes.</span>
          </p>
        </div>
        
        <div className="flex flex-row items-center md:items-start gap-4 md:gap-12 mb-6">
          {/* Photo */}
          <div className="flex-shrink-0 flex flex-col">
            <ProfilePhoto />
            {/* Desktop only: Contact below photo */}
            <div className="hidden md:flex flex-col gap-2 mt-6">
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
          
          {/* Mobile only: Contact links to the right of photo */}
          <div className="md:hidden flex flex-col gap-1 justify-center">
            <a
              href="mailto:kharper@college.harvard.edu"
              className="flex items-center gap-2 text-muted hover:text-text transition-colors text-xs"
            >
              <EmailIcon className="w-3 h-3" />
              <span>kharper@college.harvard.edu</span>
            </a>
            <a
              href="https://github.com/kharper2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-text transition-colors text-xs"
            >
              <GitHubIcon className="w-3 h-3" />
              <span>github.com/kharper2</span>
            </a>
            <a
              href="https://www.linkedin.com/in/harperkathryn/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-text transition-colors text-xs"
            >
              <LinkedInIcon className="w-3 h-3" />
              <span>linkedin.com/in/harperkathryn</span>
            </a>
          </div>
          
          {/* Desktop: Name + Tagline + Bio on right */}
          <div className="hidden md:block flex-1">
            <h1 className="text-6xl font-heading font-semibold mb-4 text-text">
              Kathryn Harper
            </h1>
            <p className="text-text text-base mb-6">
              <span className="block">AI/ML, systems, and decision-making.</span>
              <span className="block">Off-hours: card games and Rubik&apos;s cubes.</span>
            </p>
            <div className="text-sm leading-relaxed space-y-4 text-muted">
              <p>
                Hey, I&apos;m Kathryn. Thanks for stopping by. I&apos;m a junior at Harvard pursuing an AB/SM in Computer Science. Interested in AI/ML, systems, healthcare, and game theory. Proud Chicagoan (the city, not the burbs). Adrenaline junkie, poker/card-game enthusiast, and habitual Rubik&apos;s-cube fidgeter. Future Forbes 30 Under 30 to prison pipeline (kidding… mostly).
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll probably find me skiing, playing violin, or assembling a charcuterie board.
              </p>
            </div>
          </div>
        </div>
        
        {/* Mobile only: Bio below */}
        <div className="md:hidden text-xs leading-relaxed space-y-3 text-muted">
          <p>
            Hey, I&apos;m Kathryn. Thanks for stopping by. I&apos;m a junior at Harvard pursuing an AB/SM in Computer Science. Interested in AI/ML, systems, healthcare, and game theory. Proud Chicagoan (the city, not the burbs). Adrenaline junkie, poker/card-game enthusiast, and habitual Rubik&apos;s-cube fidgeter. Future Forbes 30 Under 30 to prison pipeline (kidding… mostly).
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll probably find me skiing, playing violin, or assembling a charcuterie board.
          </p>
        </div>
      </section>

      {/* Current */}
      <section>
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
