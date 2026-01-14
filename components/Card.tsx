import Link from 'next/link';

interface CardProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ href, children, className = '' }: CardProps) {
  const baseClasses =
    'block p-6 bg-surface border border-border rounded-lg hover:border-text transition-all duration-200';

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return <div className={`${baseClasses} ${className}`}>{children}</div>;
}
