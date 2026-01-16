import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Kathryn Harper',
    template: '%s | Kathryn Harper',
  },
  description: 'Kathryn Harper — CS at Harvard. ML/AI, systems, and decision-making.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kathryn-harper.com',
    siteName: 'Kathryn Harper',
    title: 'Kathryn Harper',
    description: 'CS at Harvard. ML/AI, systems, and decision-making.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kathryn Harper',
    description: 'CS at Harvard. ML/AI, systems, and decision-making.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${inter.variable}`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
