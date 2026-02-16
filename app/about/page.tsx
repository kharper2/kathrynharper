import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'Campus',
  description: 'Coursework and campus involvement at Harvard',
};

const extracurriculars = [
  { name: 'AI Safety Team', logo: '/logos/aiist.jpeg' },
  { name: 'HackHarvard', logo: '/logos/hackharvard_logo.jpeg' },
  { name: 'Satellite Team', logo: '/logos/seds.jpeg' },
  { name: 'Tech and Global Health Initiative', logo: '/logos/tghj.jpeg' },
  { name: 'Wine Society', logo: '/logos/wine.jpg' },
];

const courses = [
  { name: 'AI and Decision Making in Medicine: From Disease to Therapy', code: 'MIT 6.S983' },
  { name: 'Big Data Algorithms', code: 'COMPSCI 2241' },
  { name: 'Data Structures and Algorithms', code: 'COMPSCI 124' },
  { name: 'Distributed Computing', code: 'COMPSCI 262' },
  { name: 'Entrepreneurship and Innovation: Practical and Academic Insights', code: 'ENGSCI 94' },
  { name: 'Game Theory and Economic Applications', code: 'ECON 1052' },
  { name: 'High Performance Computing', code: 'COMPSCI 205' },
  { name: 'Machine Learning', code: 'COMPSCI 181' },
  { name: 'Probability', code: 'STAT 110' },
  { name: 'Quantum Learning Theory', code: 'COMPSCI 2233/PHYSICS 272' },
  { name: 'Software Engineering with Generative AI', code: 'COMPSCI 1060' },
  { name: 'Systems Programming and Machine Organization', code: 'COMPSCI 61' },
  { name: 'Theoretical Computer Science', code: 'COMPSCI 121' },
  { name: 'Vector Calculus and Linear Algebra', code: 'MATH 22A' },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
          Campus
        </h1>
      </div>

      {/* Extracurriculars Section */}
      <section className="mb-16">
        <SectionHeading>Extracurriculars</SectionHeading>
        <div className="mt-6 grid grid-cols-3 md:grid-cols-5 gap-4">
          {extracurriculars.map((club) => (
            <div key={club.name} className="flex flex-col items-center text-center transition-all duration-200 hover:scale-[1.05] hover:-translate-y-1 cursor-default">
              <div className="w-16 h-16 flex items-center justify-center mb-2">
                <Image src={club.logo} alt={club.name} width={56} height={56} className="object-contain" />
              </div>
              <p className="font-medium text-xs">{club.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coursework Section */}
      <section className="mb-16">
        <SectionHeading>Coursework</SectionHeading>
        <div className="mt-6 space-y-3">
          {courses.map((course) => (
            <div key={course.code} className="border border-neutral-200 rounded-lg p-3 transition-all duration-200 hover:border-neutral-300 hover:scale-[1.01] hover:-translate-y-0.5 cursor-default flex justify-between items-center">
              <p className="font-medium text-sm">{course.name}</p>
              <p className="text-xs text-neutral-500 text-right">{course.code}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
