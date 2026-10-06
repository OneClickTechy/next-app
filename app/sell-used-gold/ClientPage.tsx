"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowDown, ShieldCheck, Scale, Award, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import GoldCalculator from "@/components/GoldCalculator";
import FAQSection from "@/components/FAQSection";

export default function SellUsedGoldClientPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    const tl = gsap.timeline();
    tl.fromTo(".sug-hero-kicker", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".sug-hero-title", { yPercent: 140 }, { yPercent: 0, duration: 1.2, ease: "expo.out", stagger: 0.1 }, "-=0.6")
      .fromTo(".sug-hero-img", { scale: 1.1, opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }, { scale: 1, opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1.6, ease: "expo.out" }, "<0.2")
      .fromTo(".sug-hero-copy", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.8");

    // Sticky Scroll Section
    ScrollTrigger.create({
      trigger: ".sug-sticky-wrap",
      start: "top top",
      end: "bottom bottom",
      pin: ".sug-sticky-image",
      pinSpacing: false,
    });

    // Fade up sections
    gsap.utils.toArray<HTMLElement>(".sug-fade-up").forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 40 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });

    // Horizontal Scroll Panel
    const horizontalSections = gsap.utils.toArray<HTMLElement>(".sug-hz-panel");
    if (horizontalSections.length > 0) {
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".sug-hz-container",
          pin: true,
          scrub: 1,
          end: () => "+=" + (document.querySelector(".sug-hz-container") as HTMLElement).offsetWidth * 2
        }
      });
    }

  }, { scope: container });

  return (
    <main ref={container} className="bg-[#fbfaf6] overflow-hidden">
      {/* Editorial Hero */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-12 md:pb-20 pt-28 md:pt-32 px-5 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-end z-10">
          <div className="pb-10">
            <span className="sug-hero-kicker inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#790019] uppercase mb-8">
              Spot cash for gold
            </span>
            <h1 className="display-font text-[#30000b] text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.85] font-medium tracking-tight mb-8">
              <div className="overflow-hidden py-4 -my-4"><span className="inline-block sug-hero-title">Your gold,</span></div>
              <div className="overflow-hidden py-4 -my-4"><span className="inline-block sug-hero-title">valued</span></div>
              <div className="overflow-hidden py-4 -my-4"><span className="inline-block sug-hero-title"><em>with respect.</em></span></div>
            </h1>
            <p className="sug-hero-copy text-[#77776f] text-[1.1rem] leading-relaxed max-w-md">
              Whether it’s old, broken, mismatched, or simply no longer your style — your gold still holds intrinsic value. We offer a transparent assessment you can watch from start to finish.
            </p>
            <div className="sug-hero-copy mt-10">
              <a href="#how-it-works" className="inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-[#30000b] hover:text-[#790019] transition-colors">
                Discover the process <ArrowDown size={16} />
              </a>
            </div>
          </div>
          <div className="relative h-[60vh] lg:h-[75vh] w-full bg-[#e9e3d4] overflow-hidden sug-hero-img">
            <Image 
              src="/assets/images/buy-gold.jpg" 
              alt="Careful assessment of gold jewellery" 
              fill 
              sizes="(max-width: 1024px) 100vw, 60vw" 
              className="object-cover object-center scale-105" 
            />
          </div>
        </div>
      </section>

      {/* Sticky Storytelling Section */}
      <section id="how-it-works" className="sug-sticky-wrap relative w-full border-t border-black/10">
        <div className="grid lg:grid-cols-2">
          {/* Left: Sticky Visual */}
          <div className="hidden lg:block sug-sticky-image h-screen relative bg-[#30000b] overflow-hidden">
            <Image 
              src="/assets/images/cash-for-gold-1.jpg" 
              alt="Precision testing of gold" 
              fill 
              className="object-cover opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#30000b] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-12 left-12 max-w-sm">
              <h3 className="display-font text-white text-[2.5rem] leading-[0.9]">Transparency <br/><em>in plain sight.</em></h3>
              <p className="mt-4 text-white/70">We believe you have the right to see exactly how your gold is tested.</p>
            </div>
          </div>
          
          {/* Right: Scrolling Content */}
          <div className="py-20 lg:py-32 px-5 sm:px-10 lg:px-20 bg-[#fbfaf6]">
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#790019] uppercase mb-16 sug-fade-up">
              How evaluation works
            </span>

            <div className="space-y-24">
              <div className="sug-fade-up">
                <span className="text-[#e9e3d4] text-[4rem] font-serif leading-none block mb-4">01</span>
                <h3 className="text-[2rem] text-[#30000b] font-medium mb-4">German XRF Laser Testing</h3>
                <p className="text-[#77776f] text-lg leading-relaxed">
                  We use advanced X-Ray Fluorescence (XRF) technology. It scans your gold to determine the exact karats (18K, 22K, 24K) and composition without causing any scratches, chemical damage, or melting.
                </p>
                <div className="mt-8 flex gap-4 text-sm font-medium text-[#30000b]">
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#f4bf2f]/10 rounded-full"><ShieldCheck size={16} className="text-[#790019]"/> 100% Non-destructive</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#f4bf2f]/10 rounded-full"><Award size={16} className="text-[#790019]"/> Certified Accuracy</span>
                </div>
              </div>

              <div className="sug-fade-up">
                <span className="text-[#e9e3d4] text-[4rem] font-serif leading-none block mb-4">02</span>
                <h3 className="text-[2rem] text-[#30000b] font-medium mb-4">Precision Weighing</h3>
                <p className="text-[#77776f] text-lg leading-relaxed">
                  Your gold is weighed on high-precision electronic scales. The scales are placed clearly in your line of sight so you can verify the exact weight yourself.
                </p>
                <div className="mt-8 flex gap-4 text-sm font-medium text-[#30000b]">
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#f4bf2f]/10 rounded-full"><Scale size={16} className="text-[#790019]"/> Transparent View</span>
                </div>
              </div>

              <div className="sug-fade-up">
                <span className="text-[#e9e3d4] text-[4rem] font-serif leading-none block mb-4">03</span>
                <h3 className="text-[2rem] text-[#30000b] font-medium mb-4">Live Market Valuation</h3>
                <p className="text-[#77776f] text-lg leading-relaxed">
                  We don&apos;t use arbitrary pricing. We multiply your gold&apos;s verified purity and weight by the exact live market rate of the moment. No hidden deductions, no arbitrary "melting charges."
                </p>
              </div>

              <div className="sug-fade-up pt-10 border-t border-black/10">
                <h4 className="text-[1.5rem] text-[#30000b] mb-4">What we accept</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#77776f]">
                  <li className="flex items-center gap-3"><ArrowRight size={14} className="text-[#790019]" /> Broken Jewellery</li>
                  <li className="flex items-center gap-3"><ArrowRight size={14} className="text-[#790019]" /> Tangled Chains</li>
                  <li className="flex items-center gap-3"><ArrowRight size={14} className="text-[#790019]" /> Outdated Designs</li>
                  <li className="flex items-center gap-3"><ArrowRight size={14} className="text-[#790019]" /> Gold Coins</li>
                  <li className="flex items-center gap-3"><ArrowRight size={14} className="text-[#790019]" /> Scrap Gold</li>
                  <li className="flex items-center gap-3"><ArrowRight size={14} className="text-[#790019]" /> Estate Jewellery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Visualization for Gold Purity */}
      <section className="sug-hz-container bg-[#1a1a1a] h-screen overflow-hidden flex items-center relative">
        <div className="absolute top-10 left-10 lg:top-16 lg:left-16 z-10">
          <span className="text-white/50 text-[0.75rem] font-bold tracking-[0.2em] uppercase">Understanding Purity</span>
        </div>
        <div className="flex w-[300vw] lg:w-[200vw] h-full">
          {/* Panel 1 */}
          <div className="sug-hz-panel w-screen h-full flex flex-col justify-center px-10 lg:px-32 relative">
            <h2 className="display-font text-white text-[clamp(4rem,10vw,12rem)] leading-none opacity-10 absolute right-10 bottom-10">24K</h2>
            <div className="max-w-2xl relative z-10">
              <h3 className="text-white text-[3rem] lg:text-[4rem] font-medium mb-6">24 Karat <br/><em>The Purest Form.</em></h3>
              <p className="text-white/70 text-lg lg:text-xl leading-relaxed">
                24K gold is 99.9% pure. Because it is highly malleable and soft, it is rarely used in everyday jewellery, but commonly found in gold coins and bars. It yields the highest cash value per gram.
              </p>
            </div>
          </div>
          {/* Panel 2 */}
          <div className="sug-hz-panel w-screen h-full flex flex-col justify-center px-10 lg:px-32 relative">
            <h2 className="display-font text-white text-[clamp(4rem,10vw,12rem)] leading-none opacity-10 absolute right-10 bottom-10">22K</h2>
            <div className="max-w-2xl relative z-10">
              <h3 className="text-[#f4bf2f] text-[3rem] lg:text-[4rem] font-medium mb-6">22 Karat <br/><em className="text-white">The Jewellery Standard.</em></h3>
              <p className="text-white/70 text-lg lg:text-xl leading-relaxed">
                22K gold is 91.6% pure gold, mixed with 8.4% other alloys like copper or zinc for strength. The vast majority of traditional Indian jewellery is crafted in 22K (916 hallmark).
              </p>
            </div>
          </div>
          {/* Panel 3 */}
          <div className="sug-hz-panel w-screen h-full flex flex-col justify-center px-10 lg:px-32 relative">
            <h2 className="display-font text-white text-[clamp(4rem,10vw,12rem)] leading-none opacity-10 absolute right-10 bottom-10">18K</h2>
            <div className="max-w-2xl relative z-10">
              <h3 className="text-white text-[3rem] lg:text-[4rem] font-medium mb-6">18 Karat <br/><em>The Diamond Setting.</em></h3>
              <p className="text-white/70 text-lg lg:text-xl leading-relaxed">
                18K gold is 75% pure gold. The higher percentage of alloys makes it extremely durable, which is why it is the global standard for setting diamonds and precious stones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration of existing Calculator but styled within narrative */}
      <section className="py-32 bg-[#f0ede4]">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-20 sug-fade-up">
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#790019] uppercase mb-6">Live Assessment</span>
            <h2 className="display-font text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] text-[#30000b]">Calculate your <br/><em>estimated return.</em></h2>
            <p className="mt-6 text-[#77776f] text-lg">Use our live-market calculator to get an idea of what your gold might be worth today. Final value is determined after our in-store XRF assessment.</p>
          </div>
          <div className="sug-fade-up">
            <GoldCalculator />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <div className="bg-white">
        <FAQSection />
      </div>

    </main>
  );
}
