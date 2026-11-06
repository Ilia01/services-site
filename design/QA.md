# Editorial redesign verification

2026-11-06, Asia/Tbilisi. This replaces the rejected forest/pear v1. The user's
selected direction is editorial catalog, paper, oversized type and blue correction
marks. The user explicitly prohibited generated design-reference images. The real
source captures, clips and extraction are documented in REFERENCES.md.

## Current motion build

- Next.js 15.5.29 production build, type checking and all eight static pages pass.
  Homepage is 55 kB route JS / 158 kB first load including framework. GSAP adds
  about 48 kB over the pre-motion editorial build; this is an intentional tradeoff
  for the user's explicit animation request. GSAP 3.15.1 and @gsap/react 2.1.2 are
  locked. npm audit --omit=dev --audit-level=low reports zero vulnerabilities.
- Actual desktop page inspected at 1280px and the normal wide browser viewport.
  Mobile layouts inspected at 390/320px, plus narrower effective widths. At actual
  320px client width the document scroll width is also 320px, with no pin spacer.
  Hero remains two lines. Review tables have their own horizontal overflow region.
- Wide-screen inspection caught a hero size rule applying to the small specimen.
  Scoped all responsive hero sizes to the catalog scene. Earlier mobile fixes also
  removed artwork overflow and contact-heading crowding.
- Actual entrance capture: 36 frames / 7.577s; scroll capture: 44 frames / 7.486s.
  Traces show heading transforms settling and the price circle dash progressing
  from zero to its full path. These are measured low-frame-rate browser captures,
  not a claim of measured 60fps. See private qa/motion-intro.gif and motion-scroll.gif.
- Repeated full/reduced switches at page bottom succeed on desktop and mobile.
  Reduced mode removes the desktop pin spacer and restores all eight heading ink
  transforms to none. Full desktop mode restores one spacer; mobile retains zero.
  Fixed an initialization race by retaining completed reveal triggers until context
  cleanup instead of self-removing with once:true during refresh. No vendor patch.
- OS reduced-motion handling is implemented through GSAP matchMedia and CSS. The
  manual preference path was exercised; the OS setting itself was not changed.
- Price/retained tabs work with pointer and ArrowLeft, preserving selection, focus
  and URL state. Production retained panel shows $310.00 and $350.00 unchanged.
- Questions and intake details remain visible editorial rows. The mailto recipient
  and currency/price-meaning/match/redaction checklist remain intact. Testing did
  not send email. Both reports and downloadable files preserve fictional fixtures.
- Final local production HTTP checks returned 200 for the homepage, both reports,
  supplier XLSX, baseline CSV, Open Graph image, robots and sitemap.
- Existing owned desk photo uses a native CSS silhouette. No new generated mockup
  or third-party reference image/video/font is embedded. Fonts are served locally
  through next/font. Page content is server-rendered; there is no CSS loading gate.
- Production Lighthouse 13.6.0 mobile audit with motion: performance 98,
  accessibility 100, best practices 100, SEO 100, agentic browsing 100. FCP 0.8s,
  LCP 2.5s, TBT 50ms, CLS 0, speed index 1.3s. No runtime error, run warning or failed
  binary audit. Raw report: private qa/lighthouse-motion.json. A subsequent CSS-only
  selector correction fixes wide-screen specimen sizing; it does not alter motion.
  These lab observations do not establish conversion, field metrics or visual approval.

The prior static editorial audit (99/100/100/100) is superseded by this motion audit.

## Preserved boundaries

The $149 scope, free ten-row representative sample, approval gate and pending
controlled Shopify test remain explicit. No customer data, checkout, upload backend,
tracking, live-store write, buyer result or testimonial has been introduced.

Publishing uses the existing GitHub/Vercel integration for
ilia-projects/services-site. The production receipt and actual live screenshots are
maintained in the parent project state. User acceptance of the finished visual
result is separate from these technical checks.
