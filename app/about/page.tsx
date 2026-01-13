import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';

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
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="mailto:kathryn@example.com" variant="primary">
            Email
          </Button>
          <Button href="https://github.com" variant="secondary" external>
            GitHub
          </Button>
          <Button href="https://linkedin.com" variant="secondary" external>
            LinkedIn
          </Button>
          <Button href="/cv.pdf" variant="secondary" external>
            CV
          </Button>
        </div>
      </section>
    </div>
  );
}
