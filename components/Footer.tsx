import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-sm text-muted mb-2">Kathryn Harper</p>
            <div className="flex gap-4 text-sm">
              <a
                href="mailto:kathryn@example.com"
                className="text-muted hover:text-text transition-colors"
              >
                Email
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-text transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-text transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Kathryn Harper
          </p>
        </div>
      </div>
    </footer>
  );
}
