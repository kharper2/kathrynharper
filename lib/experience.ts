import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ExperienceEntry {
  title: string;
  organization: string;
  dates: string;
  category: 'Industry' | 'Research' | 'Teaching';
  impact?: string[];
  tech?: string[];
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
      const fullPath = path.join(experienceDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        ...data,
      } as ExperienceEntry;
    });

  // Sort by date (most recent first)
  return entries.sort((a, b) => {
    const dateA = extractYear(a.dates);
    const dateB = extractYear(b.dates);
    return dateB - dateA;
  });
}

function extractYear(dates: string): number {
  const match = dates.match(/\d{4}/);
  return match ? parseInt(match[0], 10) : 0;
}
