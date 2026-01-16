import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ExperienceEntry {
  slug: string;
  order: number;
  org: string;
  role: string;
  dates: string;
  location?: string;
  icon: string; // simple-icons key or path to /public/logos/*.svg
  description?: string;
  tags?: string[];
  highlights?: string[];
  tech?: string;
  link?: string;
  content?: string;
}

const experienceDirectory = path.join(process.cwd(), 'content/experience');

export async function getExperience(): Promise<ExperienceEntry[]> {
  if (!fs.existsSync(experienceDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(experienceDirectory);
  const entries = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(experienceDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      } as ExperienceEntry;
    });

  // Sort by order field (1..5)
  return entries.sort((a, b) => {
    return (a.order || 999) - (b.order || 999);
  });
}
