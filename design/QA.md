# Verification

2026-11-06, Asia/Tbilisi. Replacement of the web-development offer explicitly
authorized by the user. No customer data or new paid services are included.

- Production build: Next.js 15.5.29 compiled, type checking and all seven static
  pages passed. Homepage 6.75 kB route JS, 110 kB first load including framework.
- Dependency audit: zero reported vulnerabilities after compatible fixes and an
  explicit PostCSS 8.5.32 override. Removed unused motion/icon dependencies and
  obsolete web-development components. No framework major upgrade.
- Desktop 1280px and mobile 390/320px reviewed in the in-app browser. Fixed hero
  art overflow and the 320px CTA wrap. Headline remains two lines at 320px.
- Review tabs switch real fictional rows. ArrowLeft moved selected tab and focus
  together. URL view updates. SKUs retain their leading zeros. Retained prices
  are $310.00 and $350.00; proposed prices $315.00 and $378.00.
- All three native FAQ disclosures expanded with their full answers.
- Email request targets the user's authorized existing public address and includes
  row count, format, currency, match key, price meaning and redaction checklist.
  No email was sent by testing the CTA.
- Homepage, review, exceptions, XLSX, both CSV inputs, icon, robots and sitemap
  returned HTTP 200 with appropriate content types from the production preview.
- Sample reports return to /#sample. Public reports are explicitly fictional and
  noindex; no approved machine import file is distributed on the page.
- Hero asset 66 kB, joinery 170 kB, detail 71 kB before Next image optimization.
  All three loaded in browser. Hero priority; supporting images lazy-load.
- Reduced-motion rules reviewed: entrance and smooth scrolling disabled; no
  perpetual motion. Explicit image dimensions/aspect ratios reserve layout space.

Lighthouse 13.6.0 mobile audit of the local production build returned 100 in
performance, accessibility, best practices, SEO and agentic browsing, no runtime
error or run warning. This is a local lab result, not a live field-performance
guarantee or complete accessibility certification. Framework JS still has some
unused/polyfill bytes. Raw report retained privately under work/design.

Research/review references: [Vercel interface guidelines](https://github.com/vercel-labs/web-interface-guidelines),
[Lighthouse documentation](https://developer.chrome.com/docs/lighthouse/overview),
[Next.js advisory and patched 15.x line](https://github.com/advisories/GHSA-26hh-7cqf-hhc6).
Visual plan and prompts are in DESIGN.md and ASSETS.md. Actual Shopify platform
verification, buyer acceptance and payment remain separate and unperformed.

Publishing uses the existing GitHub integration for Vercel's
ilia-projects/services-site project. Verify the custom domain after each deployment;
the deployment-specific receipt is maintained separately in project state. The
unrelated current Vercel CLI workspace is not used.
