import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'section-tint': 'var(--color-section-tint)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        primary: 'var(--color-primary)',
        'secondary-1': 'var(--color-secondary-1)',
        'secondary-2': 'var(--color-secondary-2)',
        'secondary-3': 'var(--color-secondary-3)',
        warm: 'var(--color-warm)',
      },
      fontFamily: {
        heading: ['var(--font-plus-jakarta)', 'sans-serif'],
        body: ['var(--font-plus-jakarta)', 'sans-serif'],
        mono: ['var(--font-inter)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
