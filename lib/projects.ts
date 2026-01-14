import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Project {
  slug: string;
  title: string;
  description: string;
  order?: number;
  tags?: string[];
  date?: string;
  year?: string;
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

  return projects.sort((a, b) => {
    // Sort by order if available, otherwise by date
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    if (a.order !== undefined) return -1;
    if (b.order !== undefined) return 1;
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
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
