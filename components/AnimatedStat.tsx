"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type AnimatedStatProps = {
  value: number;
  suffix?: string;
};

export default function AnimatedStat({ value, suffix = "" }: AnimatedStatProps) {
  const valueRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const element = valueRef.current;
      if (!element) return;

      const format = (number: number) => `${new Intl.NumberFormat("en-IN").format(Math.round(number))}${suffix}`;
      const counter = { value: 0 };

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        element.textContent = format(value);
        return;
      }

      element.textContent = format(0);
      gsap.to(counter, {
        value,
        duration: 1.8,
        ease: "power2.out",
        snap: { value: 1 },
        onUpdate: () => {
          element.textContent = format(counter.value);
        },
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          once: true,
        },
      });
    },
    { scope: valueRef },
  );

  return <span ref={valueRef}>{new Intl.NumberFormat("en-IN").format(value)}{suffix}</span>;
}
