import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface CommunityEntry {
  slug: string;
  order: number;
  title: string;
  role: string;
  dates: string;
  location?: string;
  summary: string;
  impact?: string;
  coverImage: string;
  coverAlt: string;
  coverPosition?: string;
  links?: {
    label: string;
    url: string;
  }[];
  // Optional fields for expansion
  progression?: string; // e.g., "Hacker Experience → Logistics → Finance → Advisory Board"
  highlights?: string[];
  rolesTimeline?: string[];
  content?: string;
}

const communityDirectory = path.join(process.cwd(), 'content/community');

export async function getCommunity(): Promise<CommunityEntry[]> {
  if (!fs.existsSync(communityDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(communityDirectory);
  const entries = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(communityDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      } as CommunityEntry;
    })
    .filter((entry) => {
      // Only include entries with required fields
      return entry.order !== undefined && entry.coverImage && entry.title;
    });

  // Sort by order field (1..5)
  return entries.sort((a, b) => {
    return (a.order || 999) - (b.order || 999);
  });
}
