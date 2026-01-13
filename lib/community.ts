import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface CommunityEntry {
  title: string;
  description: string;
  category: 'Hackathons & CS Education' | 'Leadership / Organizing' | 'Workshops / Talks';
  metrics?: {
    attendees?: number;
    mentors?: number;
    schools?: number;
    countries?: number;
  };
  links?: {
    label: string;
    url: string;
  }[];
  date?: string;
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
      const fullPath = path.join(communityDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        ...data,
      } as CommunityEntry;
    });

  // Sort by date (most recent first)
  return entries.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });
}
