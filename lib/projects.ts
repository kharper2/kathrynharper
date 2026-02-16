import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Project {
  slug: string;
  title: string;
  description: string;
  order?: number;
  category?: 'Software' | 'Event' | 'Research'; // For distinguishing project types
  tags?: string[];
  date?: string;
  year?: string | number;
  impact?: string; // For event-type projects (e.g., "750+ attendees")
  role?: string; // For event-type projects
  location?: string;
  problem?: string;
  approach?: string;
  results?: string;
  techStack?: string[];
  links?: {
    label: string;
    url: string;
  }[];
  images?: string[];
  banner?: string; // Main banner/visual image for the card
  codeSnippet?: string;
  preview?: string;
}

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export async function getProjects(): Promise<Project[]> {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      } as Project;
    });

  // Helper to extract the earliest year from year field
  // Handles: "2025", "2022–2023", "2023–Present", or numeric 2025
  const getEarliestYear = (yearVal?: string | number): number => {
    if (!yearVal) return 0;
    // If it's already a number, return it
    if (typeof yearVal === 'number') return yearVal;
    // Extract the first 4-digit year from the string
    const match = String(yearVal).match(/(\d{4})/);
    return match ? parseInt(match[1], 10) : 0;
  };

  // Sort by year (newest first)
  return projects.sort((a, b) => {
    const yearA = getEarliestYear(a.year) || getEarliestYear(a.date);
    const yearB = getEarliestYear(b.year) || getEarliestYear(b.date);
    return yearB - yearA; // Descending (newest first)
  });
}

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content,
    } as Project & { content: string };
  } catch {
    return null;
  }
}
