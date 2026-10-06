"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, CheckCircle2, Clock, Zap, Building } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import GoldCalculator from "@/components/GoldCalculator";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";

export default function InstantCashClientPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    const tl = gsap.timeline();
    tl.fromTo(".ic-hero-kicker", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".ic-hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "expo.out" }, "-=0.4")
      .fromTo(".ic-hero-img", { scale: 1.05, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }, "-=0.6")
      .fromTo(".ic-hero-copy", { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5");

    // Fade up sections
    gsap.utils.toArray<HTMLElement>(".ic-fade-up").forEach((el) => {
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

    // Stagger process cards
    gsap.fromTo(".ic-process-card", 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".ic-process-grid",
          start: "top 75%",
        }
      }
    );

  }, { scope: container });

  return (
    <main ref={container} className="bg-[#f0ede4] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 pb-12 md:pb-20 px-5 sm:px-10 lg:px-16 max-w-[1600px] mx-auto min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 order-2 lg:order-1">
            <span className="ic-hero-kicker inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#790019] uppercase mb-8">
              Immediate Liquidity
            </span>
            <h1 className="ic-hero-title display-font text-[#30000b] text-[clamp(4rem,8vw,8rem)] leading-[0.85] font-medium tracking-tight mb-8">
              Instant cash. <br />
              <em className="text-[#77776f]">Zero delay.</em>
            </h1>
            <p className="ic-hero-copy text-[#77776f] text-[1.2rem] leading-relaxed max-w-lg mb-10">
              Unlock the value of your gold immediately. Our transparent valuation process ensures you get the highest spot market price, paid out instantly in cash or bank transfer.
            </p>
            <div className="ic-hero-copy flex gap-6 items-center">
              <a href="#express-process" className="inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-white bg-[#790019] px-8 py-4 rounded-full hover:bg-[#30000b] transition-colors">
                See the process
              </a>
              <span className="text-[#30000b] font-medium text-sm flex items-center gap-2"><Clock size={16} /> ~15 Min Valuation</span>
            </div>
          </div>
          
          <div className="relative h-[50vh] lg:h-[80vh] w-full rounded-[2rem] overflow-hidden ic-hero-img order-1 lg:order-2 shadow-2xl">
            <Image 
              src="/assets/images/instant-cash.jpg" 
              alt="Fast cash for gold" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw" 
              className="object-cover object-center" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#30000b]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Express Process Section */}
      <section id="express-process" className="py-24 bg-white rounded-t-[3rem] lg:rounded-t-[5rem] -mt-10 relative z-20">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-20 ic-fade-up">
            <h2 className="display-font text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] text-[#30000b] mb-6">The Express Process</h2>
            <p className="text-[#77776f] text-lg">We&apos;ve streamlined gold selling to respect your time while maintaining 100% accuracy.</p>
          </div>

          <div className="ic-process-grid grid md:grid-cols-3 gap-8">
            <div className="ic-process-card bg-[#fbfaf6] p-10 rounded-3xl border border-black/5 hover:border-[#790019]/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-[#30000b] text-[#f4bf2f] flex items-center justify-center text-2xl font-serif mb-8">1</div>
              <h3 className="text-2xl font-medium text-[#30000b] mb-4">Visit Store</h3>
              <p className="text-[#77776f] leading-relaxed">Walk into our secure Gandhipuram branch with your gold and valid ID. No appointment strictly necessary.</p>
            </div>
            
            <div className="ic-process-card bg-[#fbfaf6] p-10 rounded-3xl border border-black/5 hover:border-[#790019]/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-[#30000b] text-[#f4bf2f] flex items-center justify-center text-2xl font-serif mb-8">2</div>
              <h3 className="text-2xl font-medium text-[#30000b] mb-4">Live Assessment</h3>
              <p className="text-[#77776f] leading-relaxed">Watch as we clean and test your gold using advanced, non-destructive XRF technology to determine exact purity.</p>
            </div>

            <div className="ic-process-card bg-[#fbfaf6] p-10 rounded-3xl border border-black/5 hover:border-[#790019]/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-[#790019] text-white flex items-center justify-center text-2xl font-serif mb-8">3</div>
              <h3 className="text-2xl font-medium text-[#30000b] mb-4">Instant Payout</h3>
              <p className="text-[#77776f] leading-relaxed">Accept the offer based on live market rates, and walk out with cash or an immediate bank transfer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-[#30000b] text-white">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="ic-fade-up">
              <span className="inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#f4bf2f] uppercase mb-6">Why MG Gold Mart?</span>
              <h2 className="display-font text-[clamp(2.5rem,4vw,4rem)] leading-[0.9] mb-8">Better than <br/><em>banks & pawnbrokers.</em></h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Traditional lending sources often involve lengthy paperwork, hidden fees, and low valuations. We offer the exact opposite: maximum value, instant payout, and zero hidden deductions.
              </p>
            </div>
            
            <div className="ic-fade-up space-y-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                <CheckCircle2 className="text-[#f4bf2f] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-medium mb-2">100% Live Market Rates</h4>
                  <p className="text-white/60">We don&apos;t set arbitrary prices. Your payout is directly tied to today&apos;s spot gold price.</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                <CheckCircle2 className="text-[#f4bf2f] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-medium mb-2">No Hidden Deductions</h4>
                  <p className="text-white/60">Unlike others who deduct 'melting charges' or 'handling fees', what we quote is what you get.</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                <CheckCircle2 className="text-[#f4bf2f] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-medium mb-2">Secure & Private</h4>
                  <p className="text-white/60">Your transaction is completely confidential and handled in our secure, air-conditioned premises.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration of existing Calculator */}
      <section className="py-32 bg-[#fbfaf6]">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-20 ic-fade-up">
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#790019] uppercase mb-6">Estimate Your Cash</span>
            <h2 className="display-font text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] text-[#30000b]">Check today&apos;s value.</h2>
          </div>
          <div className="ic-fade-up">
            <GoldCalculator />
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
