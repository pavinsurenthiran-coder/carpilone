# Carpilone — Staffing Agency Website

A pixel-close recreation of the Carpilone staffing-agency landing page, built with Next.js 14 (App Router), React, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Structure

- `app/layout.tsx` — root layout, fonts (Playfair Display + Inter), global metadata
- `app/page.tsx` — assembles all page sections
- `app/globals.css` — Tailwind base + small global resets
- `components/` — one component per page section:
  - `Navbar.tsx` — sticky nav, reused (transparent variant) in the hero
  - `Hero.tsx` — headline, CTAs, stats bar
  - `Services.tsx` — "What We Do" 2x2 service grid
  - `Industries.tsx` — "Industries We Serve" cards
  - `Jobs.tsx` — filterable featured job listings (client component)
  - `WhyUs.tsx` — "The Apex Difference" numbered list on navy background
  - `Testimonials.tsx` — rotating client quote carousel (client component)
  - `About.tsx` — company story + credentials
  - `Contact.tsx` — contact form with Employer/Job Seeker toggle
  - `Footer.tsx` — sitemap footer

## Notes

- Color tokens (navy, gold) and font families are defined in `tailwind.config.ts`.
- Photography uses royalty-free Unsplash images as stand-ins for the original site's photos.
- The job filter buttons and testimonial carousel are interactive (client components); everything else is a server component for fast initial load.
