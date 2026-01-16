import SectionHeading from '@/components/SectionHeading';
import EmailIcon from '@/components/icons/EmailIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';

export const metadata = {
  title: 'About',
  description: 'About Kathryn Harper',
};

const courses = [
  { name: 'Big Data Algorithms', code: 'COMPSCI 2241', school: 'Harvard', highlight: true },
  { name: 'Data Structures and Algorithms', code: 'COMPSCI 124', school: 'Harvard', highlight: true },
  { name: 'Distributed Computing', code: 'COMPSCI 262', school: 'Harvard', highlight: true },
  { name: 'High Performance Computing', code: 'COMPSCI 205', school: 'Harvard', highlight: true },
  { name: 'Machine Learning', code: 'COMPSCI 181', school: 'Harvard', highlight: true },
  { name: 'Quantum Learning Theory', code: 'COMPSCI 2233/PHYSICS 272', school: 'Harvard', highlight: true },
  { name: 'AI and Decision Making in Medicine: From Disease to Therapy', code: 'MIT 6.S983', school: 'MIT', highlight: false },
  { name: 'Entrepreneurship and Innovation: Practical and Academic Insights', code: 'ENGSCI 94', school: 'Harvard', highlight: false },
  { name: 'Game Theory and Economic Applications', code: 'ECON 1052', school: 'Harvard', highlight: false },
  { name: 'Probability', code: 'STAT 110', school: 'Harvard', highlight: false },
  { name: 'Software Engineering with Generative AI', code: 'COMPSCI 1060', school: 'Harvard', highlight: false },
  { name: 'Systems Programming and Machine Organization', code: 'COMPSCI 61', school: 'Harvard', highlight: false },
  { name: 'Theoretical Computer Science', code: 'COMPSCI 121', school: 'Harvard', highlight: false },
  { name: 'Vector Calculus and Linear Algebra', code: 'MATH 22A', school: 'Harvard', highlight: false },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
          About
        </h1>
      </div>

          <div className="prose max-w-none mb-16">
            <p className="text-lg leading-relaxed mb-4">
              Hey, I&apos;m Kathryn and I study CS at Harvard. I&apos;m focused on ML/AI and the systems that make it work reliably at scale—I&apos;ve bounced between research and engineering, but I&apos;m happiest when I&apos;m building something concrete and iterating fast.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Outside of class, I&apos;m around HackHarvard, Harvard SEDS / Satellite Team, Poker Club, the Tech and Global Health Initiative, and the Slavic Language Program. I love poker and basically any card game. I also solve Rubik&apos;s cubes while thinking, which is really just a socially acceptable way to fidget and look productive.
            </p>
          </div>

      {/* Coursework Section */}
      <section className="mb-16">
        <SectionHeading>Coursework</SectionHeading>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          {courses.map((course) => (
            <div key={course.code} className="border border-neutral-200 rounded-lg p-3">
              <p className="font-medium text-sm">{course.name}</p>
              <p className="text-xs text-neutral-500">{course.code}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading>Contact</SectionHeading>
        <div className="mt-8 flex items-center gap-6">
          <a
            href="mailto:kharper@college.harvard.edu"
            className="text-muted hover:text-text transition-colors"
            aria-label="Email"
          >
            <EmailIcon className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/kharper2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/harperkathryn/"
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
