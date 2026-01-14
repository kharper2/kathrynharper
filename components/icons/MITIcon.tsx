export default function MITIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <div className={`${className} rounded bg-white border border-border flex items-center justify-center p-1.5`}>
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
        <rect width="200" height="200" fill="#A31F34" rx="4"/>
        <text x="100" y="130" fontSize="90" fontWeight="bold" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif">MIT</text>
      </svg>
    </div>
  );
}
