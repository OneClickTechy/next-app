"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FAQSection from "@/components/FAQSection";

export default function FAQClientPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    const tl = gsap.timeline();
    tl.fromTo(".faq-hero-kicker", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".faq-hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "expo.out" }, "-=0.4")
      .fromTo(".faq-hero-copy", { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5")
      .fromTo(".faq-content-area", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }, "-=0.8");

  }, { scope: container });

  return (
    <main ref={container} className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="pt-28 md:pt-40 pb-8 md:pb-10 px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto text-center border-b border-black/5">
        <div className="max-w-4xl mx-auto">
          <span className="faq-hero-kicker inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#790019] uppercase mb-8">
            Knowledge Base
          </span>
          <h1 className="faq-hero-title display-font text-[#30000b] text-[clamp(4rem,8vw,8rem)] leading-[0.85] font-medium tracking-tight mb-8">
            Answers. <br />
            <em className="text-[#77776f]">Clear & Simple.</em>
          </h1>
          <p className="faq-hero-copy text-[#77776f] text-[1.2rem] leading-relaxed max-w-2xl mx-auto mb-12">
            Everything you need to know about our valuation process, instant payments, and 0% melting deduction policy in Coimbatore.
          </p>
        </div>
      </section>

      {/* FAQ Content Area */}
      <section className="faq-content-area pb-24 pt-10">
        <FAQSection />
      </section>
    </main>
  );
}
