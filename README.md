# Shree Deve Finance Frontiers

Corporate financial-services website for **Shree Deve Finance Frontiers** — built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Technology stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide React
- Framer Motion
- React Hook Form + Zod

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
npm run lint
```

## Docker Compose

### Production

```bash
docker compose up --build
```

App available at [http://localhost:3000](http://localhost:3000).

### Development (hot reload)

```bash
docker compose --profile dev up web-dev
```

## Folder architecture

```
src/
  app/                 # Routes (App Router)
  components/
    layout/            # Header, Footer
    home/              # Homepage sections
    products/          # Product cards
    shared/            # Reusable section components
    forms/             # Contact & grievance forms
    ui/                # Design system primitives
  data/                # Typed content configuration
  lib/                 # Utils & SEO helpers
  types/               # Shared TypeScript models
public/
  images/              # Replace remote placeholders with local assets
  documents/           # Investor PDFs when available
```

## Content management

All business content lives in typed files under `src/data/`:

| File | Purpose |
|------|---------|
| `company.ts` | Central company configuration |
| `navigation.ts` | Header & footer links |
| `products.ts` | Product catalogue |
| `leadership.ts` | Leadership profiles |
| `statistics.ts` | Impact statistics |
| `testimonials.ts` | Customer stories |
| `careers.ts` | Job openings |
| `reports.ts` | Investor documents |
| `faqs.ts` | FAQs, impact areas, presence |

### Company configuration

Update `src/data/company.ts` with verified details (legal name, CIN, address, phone, email, social links, regulatory status). Empty strings render as placeholders across the site.

### Replacing images

Remote Unsplash placeholders are used for layout. Replace with approved assets in:

- `public/images/home/`
- `public/images/products/`
- `public/images/leadership/`
- `public/images/customers/`
- `public/images/impact/`

Then update image paths in the corresponding data files / components.

### Adding products

Add an entry to `src/data/products.ts`. Product detail pages are generated from the `slug` field at `/products/[slug]`.

### Adding leadership

Add members to `src/data/leadership.ts`. Mark unfinished entries with `isPlaceholder: true`.

### Adding jobs

Add openings to `src/data/careers.ts`. Mark demo roles with `isPlaceholder: true`.

### Adding investor documents

Add items to `src/data/reports.ts` with `category`, `file` path under `public/documents/`, and publication metadata.

## Deployment

1. Fill `company.ts` and replace placeholders.
2. Set production website URL in `company.website` (used for canonical, sitemap, robots).
3. Build: `npm run build` or `docker compose up --build`.
4. Serve the standalone Next.js output (Docker image uses `output: "standalone"`).

## Important notes

- Do not invent regulatory claims, interest rates, AUM, branch counts or officer contacts.
- Demo customer stories and leadership profiles are clearly marked for replacement.
- Forms use mock handlers — connect a secure backend before production.
