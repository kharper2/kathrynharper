import { getCommunity } from '@/lib/community';
import CommunityEntry from '@/components/CommunityEntry';

export const metadata = {
  title: 'Community',
  description: 'Expanding CS education and building communities through hackathons and organizing',
};

export default async function CommunityPage() {
  const community = await getCommunity();

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
            Community
          </h1>
          <p className="text-muted text-lg">
            Expanding CS education and building community through hackathons, workshops, and outreach.
          </p>
        </div>
      </div>

      {/* Community Entries */}
      <div className="space-y-0">
        {community.map((entry, index) => (
          <CommunityEntry key={entry.slug} entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
}
