# Furniture Catalog Rescue

Replacement for the old web-development services page at
https://services.iliagoginashvili.com. Existing Next.js App Router stack retained.

## Work locally

```powershell
npm ci --no-audit --no-fund
npm run dev -- --hostname 127.0.0.1 --port 3093
npm run build
npm start -- --hostname 127.0.0.1 --port 3092
```

The build fetches Archivo through next/font and serves it locally to visitors.
Only the review tabs need a client component. Photography is compressed WebP;
the hero is prioritized, supporting images lazy-load with reserved dimensions.
No backend, customer uploads, tracking, payment integration or runtime API keys.

## Change the right source

- src/app/page.tsx: offer and four-section page.
- src/app/globals.css: responsive design tokens and layout.
- src/components/sample-review.tsx: accessible keyboard tabs and URL view state.
- src/data/sample.json: generated fictional review data used in the table.
- src/lib/offer.ts: public email address and prefilled sample request.
- public/sample: fictional input files and labeled actual engine reports.
- design/DESIGN.md and design/ASSETS.md: visual rationale and image prompts.

The public report copies link back to /#sample. Their noindex declaration and
robots exclusion keep sample artifacts out of normal discovery. They contain no
customer information and are not approved Shopify import files. Actual Shopify
round-trip verification remains pending. The page states that limitation.

## Verification and publishing

Run the production build and dependency audit. Inspect desktop plus 390/320px
mobile, the retained-variant tab, arrow-key focus, all FAQ disclosures, the email
checklist, both report pages and both downloadable input formats. Record actual
results in design/QA.md. Do not mistake automated scores for buyer acceptance.

Deploy through the existing repository and hosting project. Never link this repo
to a similarly named project in a different signed-in Vercel account. Check the
custom domain after deployment before claiming the replacement is live.
