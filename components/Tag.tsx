interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary';
}

export default function Tag({ children, variant = 'default' }: TagProps) {
  const baseClasses = 'inline-flex items-center px-2.5 py-1 text-xs font-medium rounded border';
  
  const variantClasses = {
    default: 'bg-surface border-border text-muted',
    primary: 'bg-accent-light border-primary text-primary',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}
