import Link from 'next/link';
import EmailIcon from '@/components/icons/EmailIcon';
import GitHubIcon from '@/components/icons/GitHubIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-sm text-muted mb-3">Kathryn Harper</p>
            <div className="flex gap-5">
              <a
                href="mailto:kathryn@example.com"
                className="text-muted hover:text-text transition-colors"
                aria-label="Email"
              >
                <EmailIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-text transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-text transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
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
