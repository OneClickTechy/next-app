"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollAnimations({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const select = gsap.utils.selector(root);
      const hero = select("[data-home-hero]")[0];

      if (hero) {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .fromTo(select("[data-hero-kicker]"), { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.7 })
          .fromTo(select("[data-hero-line]"), { yPercent: 110, rotate: 2 }, { yPercent: 0, rotate: 0, duration: 1, stagger: 0.12 }, "-=0.28")
          .fromTo(select("[data-hero-copy]"), { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.45")
          .fromTo(select("[data-hero-action]"), { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.1 }, "-=0.35")
          .fromTo(select("[data-hero-note]"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 }, "-=0.2");

        const heroImage = select("[data-hero-image]")[0];
        if (heroImage) {
          gsap.fromTo(
            heroImage,
            { scale: 1.12 },
            { scale: 1, duration: 1.8, ease: "power2.out" },
          );
        }
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal]", root).forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]", root).forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-stagger-item]");
        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            stagger: 0.14,
            ease: "power2.out",
            scrollTrigger: { trigger: group, start: "top 86%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]", root).forEach((image) => {
        gsap.fromTo(
          image,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: image.parentElement ?? image,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          },
        );
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    { scope },
  );

  return <div ref={scope} className="site-motion-root">{children}</div>;
}
