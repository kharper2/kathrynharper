export default function AWSIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <div className={`${className} rounded bg-white border border-border flex items-center justify-center p-1.5`}>
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
        <rect width="200" height="200" fill="#232F3E" rx="4"/>
        {/* AWS Arrow Logo */}
        <path d="M60 100L100 60l40 40-40 40-40-40z" fill="#FF9900"/>
        <path d="M100 60v80M60 100h80" stroke="#FF9900" strokeWidth="6" strokeLinecap="round"/>
      </svg>
    </div>
  );
}
