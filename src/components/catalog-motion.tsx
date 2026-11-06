"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin);

export function CatalogMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const [manualReduced, setManualReduced] = useState<boolean | null>(null);
  const [systemReduced, setSystemReduced] = useState(false);
  const reduced = manualReduced ?? systemReduced;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setSystemReduced(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useGSAP(
    () => {
      if (!root.current) return;
      const media = gsap.matchMedia();
      const scope = root.current;
      const select = gsap.utils.selector(scope);

      media.add(
        {
          desktop: "(min-width: 1024px) and (pointer: fine)",
          mobile: "(max-width: 1023px), (pointer: coarse)",
          systemReduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const conditions = context.conditions as {
            desktop: boolean;
            mobile: boolean;
            systemReduced: boolean;
          };
          if (manualReduced ?? conditions.systemReduced) return;
          const desktop = conditions.desktop;
          const removers: (() => void)[] = [];
          const hero = scope.querySelector<HTMLElement>(".hero");
          const scene = scope.querySelector<HTMLElement>(".catalog-scene");
          const sheet = scope.querySelector<HTMLElement>(".supplier-sheet");
          const object = scope.querySelector<HTMLElement>(
            ".catalog-scene > .catalog-object",
          );
          const annotation =
            scope.querySelector<HTMLElement>(".price-annotation");

          // A single catalog composition assembles, like the captured WAKA WAKA
          // entrance. The page and its actions never wait behind a loader.
          if (
            hero &&
            window.scrollY < 80 &&
            (!location.hash || location.hash === "#main")
          ) {
            const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
            intro
              .addLabel("type", 0)
              .from(
                select(".hero .type-ink"),
                { yPercent: 108, rotation: 2, duration: 1.05, stagger: 0.11 },
                "type",
              )
              .from(
                select(".hero-intro"),
                { y: 22, opacity: 0, duration: 0.7 },
                "type+=0.18",
              );
            if (object)
              intro.from(
                object,
                {
                  y: desktop ? 85 : 35,
                  scale: 0.82,
                  rotation: 2,
                  duration: 1.2,
                  transformOrigin: "50% 72%",
                },
                "type+=0.18",
              );
            if (sheet)
              intro.from(
                sheet,
                {
                  y: 75,
                  x: desktop ? -25 : 0,
                  rotation: -15,
                  opacity: 0,
                  duration: 1.0,
                },
                "type+=0.35",
              );
            if (annotation)
              intro.from(
                annotation,
                { y: 18, opacity: 0, duration: 0.55 },
                "type+=0.65",
              );
            intro.from(
              select(".new-price path"),
              { drawSVG: 0, duration: 0.85, ease: "power1.inOut" },
              "type+=0.95",
            );
          }

          // Source, object and correction move on independent planes as the actual
          // document scrolls. Native scrolling is retained; no wheel interception.
          if (scene && hero) {
            const drift = gsap.timeline({
              scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom top",
                scrub: 0.65,
              },
              defaults: { ease: "none" },
            });
            drift
              .to(
                select(".catalog-scene > .catalog-object img"),
                { y: desktop ? -46 : -16, duration: 1 },
                0,
              )
              .to(
                select(".match-line"),
                { y: desktop ? -15 : 0, duration: 1 },
                0,
              );
          }

          // Real chapter transitions: masked type, ledger rows, then the open scope
          // sheet. Every hidden start state is installed by GSAP and reverted cleanly.
          for (const chapter of scope.querySelectorAll<HTMLElement>(
            ".chapter-heading, .contact-heading",
          )) {
            const ink = chapter.querySelectorAll(".type-ink");
            if (ink.length)
              gsap.from(ink, {
                yPercent: 105,
                rotation: 1.2,
                duration: 0.95,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: chapter,
                  start: "top 87%",
                  toggleActions: "play none none none",
                },
              });
          }
          const review = scope.querySelector<HTMLElement>(".review-spread");
          if (review) {
            const ledger = gsap.timeline({
              defaults: { ease: "power3.out" },
              scrollTrigger: {
                trigger: review,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            });
            ledger
              .from(
                select(".review-paper"),
                {
                  y: 45,
                  rotationX: 5,
                  transformPerspective: 1000,
                  transformOrigin: "center bottom",
                  duration: 0.95,
                },
                0,
              )
              .from(
                select(".review-paper tbody tr"),
                { x: 32, opacity: 0, duration: 0.6, stagger: 0.1 },
                0.18,
              )
              .from(
                select(".specimen .catalog-object"),
                { scale: 0.78, y: 28, duration: 1 },
                0.05,
              );
            if (desktop)
              ScrollTrigger.create({
                trigger: review,
                start: "top 18%",
                endTrigger: scope.querySelector(".review-bottom")!,
                end: "top 46%",
                pin: scope.querySelector(".specimen")!,
                pinSpacing: false,
                invalidateOnRefresh: true,
              });
          }
          const offer = scope.querySelector<HTMLElement>(".scope-sheet");
          if (offer) {
            gsap
              .timeline({
                defaults: { ease: "power3.out" },
                scrollTrigger: {
                  trigger: offer,
                  start: "top 86%",
                  toggleActions: "play none none none",
                },
              })
              .from(
                offer,
                {
                  y: 65,
                  rotationX: 8,
                  transformPerspective: 1200,
                  transformOrigin: "center bottom",
                  duration: 1.1,
                },
                0,
              )
              .from(
                select(".price-block .price"),
                { y: 45, scale: 0.94, opacity: 0, duration: 0.95 },
                0.1,
              )
              .from(
                select(".scope-content dl > div"),
                { y: 18, opacity: 0, duration: 0.6, stagger: 0.13 },
                0.25,
              );
          }
          for (const row of scope.querySelectorAll<HTMLElement>(
            ".process-list li",
          )) {
            gsap
              .timeline({
                defaults: { ease: "power3.out" },
                scrollTrigger: {
                  trigger: row,
                  start: "top 88%",
                  toggleActions: "play none none none",
                },
              })
              .from(
                row.querySelectorAll(".process-number, h3, p"),
                { y: 24, opacity: 0, duration: 0.65, stagger: 0.09 },
                0,
              )
              .fromTo(
                row,
                { "--rule-progress": 0 },
                { "--rule-progress": 1, duration: 0.95 },
                0.1,
              );
          }
          const contact = scope.querySelector<HTMLElement>(".contact-body");
          if (contact) {
            gsap
              .timeline({
                defaults: { ease: "power3.out" },
                scrollTrigger: {
                  trigger: contact,
                  start: "top 87%",
                  toggleActions: "play none none none",
                },
              })
              .from(
                select(".intake-note"),
                { y: 65, rotation: desktop ? 8 : 4, duration: 1.1 },
                0,
              )
              .from(
                select(".intake-note li"),
                { x: 15, opacity: 0, duration: 0.5, stagger: 0.09 },
                0.2,
              )
              .from(
                select(".contact-flourish path"),
                { drawSVG: 0, duration: 1.3, ease: "power1.inOut" },
                0,
              );
          }
          for (const row of scope.querySelectorAll<HTMLElement>(
            ".questions > div",
          )) {
            gsap.from(row.children, {
              y: 20,
              opacity: 0,
              stagger: 0.09,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 92%",
                toggleActions: "play none none none",
              },
            });
          }

          if (desktop && scene && sheet && object) {
            // quickTo reuses recorded tweens. No React updates or layout reads occur
            // on pointermove, and listeners leave with this matchMedia context.
            const tiltX = gsap.quickTo(object, "rotationX", {
              duration: 0.65,
              ease: "power3.out",
            });
            const tiltY = gsap.quickTo(object, "rotationY", {
              duration: 0.65,
              ease: "power3.out",
            });
            let bounds = scene.getBoundingClientRect();
            const enter = () => {
              bounds = scene.getBoundingClientRect();
            };
            const move = (event: PointerEvent) => {
              tiltY(((event.clientX - bounds.left) / bounds.width - 0.5) * 5);
              tiltX(((event.clientY - bounds.top) / bounds.height - 0.5) * -4);
            };
            const leave = () => {
              tiltX(0);
              tiltY(0);
            };
            scene.addEventListener("pointerenter", enter);
            scene.addEventListener("pointermove", move);
            scene.addEventListener("pointerleave", leave);
            removers.push(() => {
              scene.removeEventListener("pointerenter", enter);
              scene.removeEventListener("pointermove", move);
              scene.removeEventListener("pointerleave", leave);
            });
            const paperY = gsap.quickTo(sheet, "y", {
              duration: 0.5,
              ease: "power3.out",
            });
            const paperRotation = gsap.quickTo(sheet, "rotation", {
              duration: 0.6,
              ease: "power3.out",
            });
            const paperEnter = () => {
              paperY(-9);
              paperRotation(-1.5);
            };
            const paperLeave = () => {
              paperY(0);
              paperRotation(-5);
            };
            sheet.addEventListener("pointerenter", paperEnter);
            sheet.addEventListener("pointerleave", paperLeave);
            removers.push(() => {
              sheet.removeEventListener("pointerenter", paperEnter);
              sheet.removeEventListener("pointerleave", paperLeave);
            });
          }

          // Fonts affect trigger positions once. Resize and media changes are handled
          // by ScrollTrigger/matchMedia, never a custom scroll-state loop.
          let mounted = true;
          document.fonts.ready.then(() => {
            if (mounted) ScrollTrigger.refresh();
          });
          return () => {
            mounted = false;
            removers.forEach((remove) => remove());
          };
        },
        scope,
      );
      return () => media.revert();
    },
    { scope: root, dependencies: [manualReduced], revertOnUpdate: true },
  );

  return (
    <div
      ref={root}
      className="motion-page"
      data-motion={reduced ? "reduced" : "full"}
    >
      {children}
      <div className="motion-preference wrap">
        <button
          type="button"
          className="motion-toggle"
          aria-pressed={reduced}
          onClick={() => setManualReduced(!reduced)}
        >
          <span className="motion-toggle-icon" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          {reduced ? "Enable full motion" : "Reduce motion"}
        </button>
      </div>
    </div>
  );
}
