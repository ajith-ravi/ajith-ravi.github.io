# Ajith Ravi, Portfolio

Custom-designed personal site. Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion. Fully static output, no backend, no environment variables.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the build
```

## Edit content
All text lives in one file: `lib/content.ts`. Change it there, everything updates.

## Structure
```
app/            layout (SEO/OG), page, 404, favicon, robots, sitemap
components/     Nav, Hero (animated schematic), Metrics, Work, Approach,
                Experience, Skills, Writing, Contact, Footer, Reveal, Section
lib/content.ts  single source of truth for all content
```

See DEPLOYMENT.md for the full publish guide.
