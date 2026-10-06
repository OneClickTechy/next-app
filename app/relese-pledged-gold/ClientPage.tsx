"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, Banknote, ShieldAlert, ArrowRightLeft, TrendingDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";

export default function ReleasePledgedGoldClientPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    const tl = gsap.timeline();
    tl.fromTo(".rpg-hero-kicker", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".rpg-hero-title", { opacity: 0, clipPath: "inset(100% 0 0 0)" }, { opacity: 1, clipPath: "inset(0% 0 0 0)", duration: 1.2, ease: "power4.out" }, "-=0.6")
      .fromTo(".rpg-hero-img", { scale: 1.1, filter: "blur(10px)" }, { scale: 1, filter: "blur(0px)", duration: 1.5, ease: "power2.out" }, "-=1")
      .fromTo(".rpg-hero-copy", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.8");

    // Fade up sections
    gsap.utils.toArray<HTMLElement>(".rpg-fade-up").forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 40 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          }
        }
      );
    });

    // Diagram animation
    gsap.fromTo(".rpg-diagram-line", 
      { width: 0 }, 
      { 
        width: "100%", 
        duration: 1.5, 
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".rpg-diagram-container",
          start: "top 70%",
        }
      }
    );

    gsap.fromTo(".rpg-diagram-node", 
      { scale: 0, opacity: 0 }, 
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.4,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".rpg-diagram-container",
          start: "top 70%",
        }
      }
    );

  }, { scope: container });

  return (
    <main ref={container} className="bg-[#fcfcfc] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-28 md:pt-32 pb-12 md:pb-20 px-5 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="/assets/images/pledged.jpg" 
            alt="Release Pledged Gold Background" 
            fill 
            className="object-cover object-center rpg-hero-img" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-2xl">
          <span className="rpg-hero-kicker inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#790019] uppercase mb-8">
            Gold Loan Rescue
          </span>
          <h1 className="rpg-hero-title display-font text-[#30000b] text-[clamp(3.5rem,7vw,7rem)] leading-[0.9] font-medium mb-8">
            Stop paying <br/><em>high interest.</em>
          </h1>
          <p className="rpg-hero-copy text-[#77776f] text-[1.2rem] leading-relaxed mb-10">
            Are mounting interest rates on your gold loan becoming a burden? Don't let banks or NBFCs auction your precious jewellery. We help you release your pledged gold and pay you the remaining value in cash.
          </p>
          <div className="rpg-hero-copy">
            <a href="#how-it-helps" className="inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-white bg-[#30000b] px-8 py-4 rounded-full hover:bg-[#790019] transition-colors">
              Understand how it works
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="how-it-helps" className="py-24 bg-[#30000b] text-white">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="rpg-fade-up">
              <h2 className="display-font text-[clamp(2.5rem,4vw,4rem)] leading-[0.9] mb-8">The hidden cost of <br/><em className="text-[#f4bf2f]">gold loans.</em></h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Most people pledge their gold expecting to release it in a few months. But as compounding interest piles up, the loan amount eventually exceeds the value of the gold itself, leading to auction and total loss of your asset.
              </p>
              <div className="flex items-center gap-4 text-[#f4bf2f] mb-4">
                <TrendingDown size={24} />
                <span className="font-medium text-xl">We stop the interest clock instantly.</span>
              </div>
            </div>

            <div className="rpg-fade-up bg-white/5 rounded-3xl p-8 lg:p-12 border border-white/10">
              <h3 className="text-2xl font-medium mb-6">Why act now?</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <ShieldAlert className="text-[#f4bf2f] shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-lg">Avoid Auction Notices</h4>
                    <p className="text-white/60 text-sm mt-1">Banks will auction your gold if interest remains unpaid, often severely undervaluing your jewellery.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <ShieldAlert className="text-[#f4bf2f] shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-lg">Stop Compounding Interest</h4>
                    <p className="text-white/60 text-sm mt-1">High NBFC interest rates multiply your debt. Paying off the loan immediately stops the bleeding.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <ShieldAlert className="text-[#f4bf2f] shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-lg">Reclaim Residual Value</h4>
                    <p className="text-white/60 text-sm mt-1">If the market price of gold has gone up, your gold is worth more than the loan. We pay you that difference.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Flowchart / Diagram */}
      <section className="py-32 bg-[#f0ede4]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-10 lg:px-16 text-center">
          <span className="inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#790019] uppercase mb-6 rpg-fade-up">The Rescue Process</span>
          <h2 className="display-font text-[#30000b] text-[clamp(2.5rem,4vw,4rem)] leading-[0.9] mb-20 rpg-fade-up">We pay the bank. <br/><em>You get the balance.</em></h2>

          {/* Animated Diagram */}
          <div className="rpg-diagram-container relative max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
            {/* Desktop Line */}
            <div className="hidden md:block absolute top-1/2 left-0 h-[2px] bg-[#30000b]/20 -translate-y-1/2 z-0 w-full">
              <div className="rpg-diagram-line h-full bg-[#790019]" />
            </div>

            <div className="rpg-diagram-node relative z-10 w-full md:w-auto bg-white rounded-2xl p-8 shadow-xl border border-black/5 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#fbfaf6] flex items-center justify-center mb-4">
                <Banknote size={28} className="text-[#790019]" />
              </div>
              <h4 className="font-medium text-lg text-[#30000b]">1. Bring Receipt</h4>
              <p className="text-sm text-[#77776f] mt-2 max-w-[200px]">Bring your pawn ticket or bank pledge receipt to our store.</p>
            </div>

            <div className="rpg-diagram-node relative z-10 w-full md:w-auto bg-white rounded-2xl p-8 shadow-xl border border-black/5 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#30000b] flex items-center justify-center mb-4">
                <ArrowRightLeft size={28} className="text-[#f4bf2f]" />
              </div>
              <h4 className="font-medium text-lg text-[#30000b]">2. We Pay Bank</h4>
              <p className="text-sm text-[#77776f] mt-2 max-w-[200px]">We accompany you, clear the loan amount, and release the gold.</p>
            </div>

            <div className="rpg-diagram-node relative z-10 w-full md:w-auto bg-white rounded-2xl p-8 shadow-xl border border-[#790019]/20 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#790019] flex items-center justify-center mb-4">
                <Banknote size={28} className="text-white" />
              </div>
              <h4 className="font-medium text-lg text-[#30000b]">3. You Get Cash</h4>
              <p className="text-sm text-[#77776f] mt-2 max-w-[200px]">We evaluate the gold at live market rates and pay you the remaining balance.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <div className="bg-white pb-20">
        <FAQSection />
      </div>
    </main>
  );
}
