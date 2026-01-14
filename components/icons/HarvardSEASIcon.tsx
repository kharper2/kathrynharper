export default function HarvardSEASIcon({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <div className={`${className} rounded bg-white border border-border flex items-center justify-center p-1.5`}>
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
        <rect width="200" height="200" fill="#A51C2B" rx="4"/>
        <text x="100" y="140" fontSize="120" fontWeight="bold" textAnchor="middle" fill="white" fontFamily="serif">H</text>
      </svg>
    </div>
  );
}
