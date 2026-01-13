interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl md:text-3xl font-heading font-semibold text-text">
      {children}
    </h2>
  );
}
