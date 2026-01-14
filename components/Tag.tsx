interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary';
}

export default function Tag({ children, variant = 'default' }: TagProps) {
  const baseClasses = 'inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg';
  
  const variantClasses = {
    default: 'bg-section-tint text-text border border-border',
    primary: 'bg-section-tint text-text border border-border',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}
