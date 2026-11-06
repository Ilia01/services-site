# Catalog motion

The user expressly requested animation informed by the captured reference sites.
No generated design reference is used. Private source clips and actual implementation
captures live at workspace work/design/references-v2, outside this public repository.

## Choreography

| Reference principle | Original implementation | Timing |
| --- | --- | --- |
| WAKA WAKA assembles a complete editorial composition | Masked headline rises; desk scales into place; supplier paper lands; exact price correction draws | 1.8s total, overlapping labeled timeline; headline 1.05s, object 1.2s, ink 0.85s |
| Olive mounts objects and annotations on paper | Desk and dotted match line drift on independent planes; fine-pointer tilt and paper lift | Native-scroll scrub 0.65s; quickTo 0.5–0.65s; modest rotation |
| Order gives specimens and metadata room | Masked chapter reveals, staged ledger rows and desktop specimen pin | Heading 0.95s; row stagger 0.1s; pin only at >=1024px with fine pointer |
| Pedestal makes the selected state legible | Shared blue tab marker moves with actual review state, panels enter horizontally | Marker 500ms, panel 420ms; keyboard/URL state preserved |
| Catalog proof becomes the handoff | Scope sheet tilts into place, price and inclusions follow; process rules draw; intake note lands | Sheet/note 1.1s; process 0.95s; drawn flourish 1.3s |

This translates observed pacing and spatial behavior into original catalog components.
It does not copy source code, logos, imagery or claim pixel-identical replication.
There is no loader, wheel interception, autoplay film or perpetual ambient loop.

## Implementation contract

- GSAP 3.15.1, @gsap/react 2.1.2; ScrollTrigger and DrawSVGPlugin. Lockfile committed.
- useGSAP scopes selectors to one root, with revertOnUpdate. matchMedia owns desktop,
  coarse/mobile and OS reduced-motion variants. Revert removes inline animation
  states, pin wrappers and native pointer listeners on preference/media changes.
- Text and actions are normal server-rendered markup. Animated start states are
  installed by GSAP; no CSS gate hides the page pending JavaScript.
- Pointer tweens are created once in the scoped context using quickTo. Pointermove
  does not update React state or read layout; bounds update on pointerenter.
- Animate transforms/opacity and two small SVG strokes. Font readiness refreshes
  trigger positions once with a mounted guard. Native ScrollTrigger handles resize.
- Completed reveal triggers remain until context cleanup: toggleActions is
  "play none none none". Avoid once:true here: self-removal during initialization
  at an already-scrolled position caused a refresh race on preference re-enable.
- Reduced motion skips GSAP, removes pinning and disables CSS transitions/smooth
  scroll. The footer control can switch modes in this session. No cookie/storage.
- Heading spans are decorative to accessibility; complete headings retain their
  accessible names. Data tabs use existing keyboard/focus semantics.

## Official guidance used

Installed official [GSAP skills](https://github.com/greensock/gsap-skills): gsap-core,
gsap-timeline, gsap-scrolltrigger, gsap-react and gsap-performance. Read the relevant
installed SKILL.md when changing animation behavior; do not reload the whole set
for unrelated copy edits.

- [React lifecycle and cleanup](https://gsap.com/resources/React/)
- [Responsive and reduced-motion contexts](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/)
- [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [DrawSVGPlugin](https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/)

## Evidence

Private qa/motion-intro and qa/motion-scroll contain actual browser PNG sequences,
timestamps and encoded GIFs. Intro trace records heading/sheet transforms and SVG
dash progress, confirming the sequence actually ran. These low-frame-rate captures
show choreography; they do not establish a measured 60fps frame rate. Production
build, responsive, preference, keyboard and audit results belong in QA.md.
