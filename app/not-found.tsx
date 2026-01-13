import Link from 'next/link';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
        404
      </h1>
      <p className="text-muted text-lg mb-8">Page not found</p>
      <Button href="/" variant="primary">
        Return Home
      </Button>
    </div>
  );
}
