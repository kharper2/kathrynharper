import Link from 'next/link';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  external?: boolean;
}

export default function Button({
  href,
  variant = 'primary',
  children,
  external = false,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium transition-all duration-200 border rounded';
  
  const variantClasses = {
    primary:
      'bg-primary text-white border-primary hover:bg-primary-dark hover:border-primary-dark',
    secondary:
      'bg-surface text-text border-border hover:border-primary hover:text-primary',
  };

  const className = `${baseClasses} ${variantClasses[variant]}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
