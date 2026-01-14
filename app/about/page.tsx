import SectionHeading from '@/components/SectionHeading';
import EmailIcon from '@/components/icons/EmailIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';

export const metadata = {
  title: 'About',
  description: 'About Kathryn Harper',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
          About
        </h1>
      </div>

      <div className="prose max-w-none mb-16">
        <p className="text-lg leading-relaxed mb-4">
          I'm a software engineer and researcher passionate about building
          technology that makes a meaningful impact. My work spans machine
          learning, distributed systems, and human-centered design, with a
          particular interest in applications that improve healthcare outcomes
          and educational access.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Throughout my career, I've worked at the intersection of research and
          industry, translating academic insights into production systems. I
          believe in the power of thoughtful engineering—code that is not just
          functional, but maintainable, scalable, and accessible.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          When I'm not coding, I'm often thinking about how to make computer
          science education more inclusive and engaging. I've organized
          hackathons, mentored students, and developed curriculum that brings
          technical concepts to life through hands-on projects.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Outside of work, I enjoy solving Rubik's cubes and playing poker and
          card games—activities that combine pattern recognition, strategy, and
          a bit of friendly competition.
        </p>
      </div>

      <section>
        <SectionHeading>Contact</SectionHeading>
        <div className="mt-8 flex items-center gap-6">
          <a
            href="mailto:kathryn@example.com"
            className="text-muted hover:text-text transition-colors"
            aria-label="Email"
          >
            <EmailIcon className="w-6 h-6" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}
