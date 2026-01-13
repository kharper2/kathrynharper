# Kathryn Harper - Personal Website

A clean, minimal, and editorial personal website built with Next.js (App Router), TypeScript, Tailwind CSS, and MDX.

## Features

- **Clean, minimal design** inspired by editorial websites
- **MDX + frontmatter** for content management (no CMS, no database)
- **Dark mode** support with theme toggle
- **Responsive** design optimized for all devices
- **SEO optimized** with metadata per page
- **Type-safe** with TypeScript

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX with frontmatter
- **Fonts**: Fraunces (headings) + Inter (body)
- **Theme**: next-themes for dark mode

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd kathrynharper
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding and Editing Content

### Projects

Projects are stored in `content/projects/` as MDX files. Each file should have frontmatter with:

```yaml
---
title: Project Title
description: Short description
tags: [ML, Systems, Web]
date: 2024-01-15
problem: Description of the problem
approach: Description of the approach
results: Description of the results
techStack: [Python, Go, React]
links:
  - label: GitHub
    url: https://github.com/example
images:
  - https://example.com/image.jpg
---
```

The content below the frontmatter (in Markdown) will be rendered on the project detail page.

### Experience

Experience entries are in `content/experience/` as MDX files with frontmatter:

```yaml
---
title: Job Title
organization: Company Name
dates: 2020 - 2022
category: Industry  # or Research or Teaching
impact:
  - First impact bullet
  - Second impact bullet
tech: [Python, Go, Kubernetes]
---
```

### Community

Community entries are in `content/community/` as MDX files with frontmatter:

```yaml
---
title: Event/Initiative Name
description: Description
category: Hackathons & CS Education  # or Leadership / Organizing or Workshops / Talks
date: 2023-10-15
metrics:
  attendees: 250
  mentors: 30
  schools: 15
  countries: 8
links:
  - label: Event Page
    url: https://example.com
---
```

## Deployment to Vercel

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Step 3: Configure Domains in Vercel

1. Go to your project settings in Vercel
2. Navigate to **Settings → Domains**
3. Add the following domains:
   - `kathryn-harper.com`
   - `www.kathryn-harper.com`
   - `kathrynharper.dev`
   - `www.kathrynharper.dev`
4. Set `kathryn-harper.com` as the **Primary Domain**
5. For `kathrynharper.dev` and `www.kathrynharper.dev`, configure them to **301 redirect** to `kathryn-harper.com`

### Step 4: Configure Cloudflare DNS

For **EACH domain** (`kathryn-harper.com` and `kathrynharper.dev`), follow these steps:

#### For kathryn-harper.com:

1. Log in to Cloudflare and select the domain
2. Go to **DNS → Records**
3. **Delete any existing A, AAAA, or CNAME records** for `@` or `www`
4. Add the following records:
   - **Type**: A
     - **Name**: `@`
     - **IPv4 address**: `76.76.21.21`
     - **Proxy status**: DNS only (grey cloud)
   - **Type**: CNAME
     - **Name**: `www`
     - **Target**: `cname.vercel-dns.com`
     - **Proxy status**: DNS only (grey cloud)

#### For kathrynharper.dev:

1. Select the `kathrynharper.dev` domain in Cloudflare
2. Go to **DNS → Records**
3. **Delete any existing A, AAAA, or CNAME records** for `@` or `www`
4. Add the same records as above:
   - **Type**: A
     - **Name**: `@`
     - **IPv4 address**: `76.76.21.21`
     - **Proxy status**: DNS only (grey cloud)
   - **Type**: CNAME
     - **Name**: `www`
     - **Target**: `cname.vercel-dns.com`
     - **Proxy status**: DNS only (grey cloud)

### Step 5: Configure Cloudflare SSL/TLS

1. In Cloudflare, go to **SSL/TLS**
2. Set the encryption mode to **Full** (not Flexible)
3. This ensures end-to-end encryption between Cloudflare and Vercel

### Step 6: Verify Setup

1. Wait for DNS propagation (can take up to 24 hours, usually much faster)
2. Visit `https://kathryn-harper.com` - should show your site
3. Visit `https://kathrynharper.dev` - should redirect to `kathryn-harper.com`
4. Visit `https://www.kathryn-harper.com` - should show your site
5. Visit `https://www.kathrynharper.dev` - should redirect to `kathryn-harper.com`

## Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── community/         # Community page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects listing and detail pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── Prose.tsx
│   ├── SectionHeading.tsx
│   ├── Tag.tsx
│   └── ThemeProvider.tsx
├── content/               # MDX content files
│   ├── projects/         # Project MDX files
│   ├── experience/       # Experience MDX files
│   └── community/        # Community MDX files
├── lib/                  # Utility functions
│   ├── projects.ts      # Project data fetching
│   ├── experience.ts    # Experience data fetching
│   └── community.ts     # Community data fetching
└── public/              # Static assets
```

## Customization

### Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --color-background: #F6F7F4;
  --color-surface: #FFFFFF;
  --color-primary: #7A9B86;
  /* ... */
}
```

### Fonts

Fonts are configured in `app/layout.tsx`. To change fonts, update the imports and variables.

### Navigation

Edit the `navItems` array in `components/Navbar.tsx`.

## License

MIT
