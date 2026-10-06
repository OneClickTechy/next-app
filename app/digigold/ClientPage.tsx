"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Smartphone, TrendingUp, Wallet } from "lucide-react";

export default function DigiGoldClientPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    tl.fromTo(".dg-hero-kicker", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".dg-hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "expo.out" }, "-=0.4")
      .fromTo(".dg-hero-copy", { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5")
      .fromTo(".dg-hero-app", { opacity: 0, y: 40, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out" }, "-=0.8");

    gsap.utils.toArray<HTMLElement>(".dg-fade-up").forEach((el) => {
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
  }, { scope: container });

  return (
    <main ref={container} className="bg-[#fcfcfc] overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 md:pt-40 pb-12 md:pb-20 px-5 sm:px-10 lg:px-16 max-w-[1600px] mx-auto text-center">
        <span className="dg-hero-kicker inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#790019] uppercase mb-8">
          The future of gold
        </span>
        <h1 className="dg-hero-title display-font text-[#30000b] text-[clamp(3.5rem,7vw,7rem)] leading-[0.9] font-medium tracking-tight mb-8 max-w-4xl">
          Gold investment, <br />
          <em className="text-[#77776f]">simplified.</em>
        </h1>
        <p className="dg-hero-copy text-[#77776f] text-[1.2rem] leading-relaxed max-w-2xl mb-12">
          Buy, sell, and manage 24K pure digital gold securely from your mobile phone. Start investing with as little as ₹100.
        </p>

        <div className="dg-hero-copy flex flex-wrap justify-center gap-4 mb-20">
          <a href="https://play.google.com/store/apps/details?id=com.atts.mgGoldMart&pcampaignid=web_share" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-xl hover:bg-black/80 transition-colors">
            <svg viewBox="0 0 512 512" className="w-8 h-8"><path fill="#00f076" d="M32.8 28.5L257.6 256 32.8 483.5c-4.4-4.2-6.8-10.4-6.8-17.5V46c0-7.1 2.4-13.3 6.8-17.5z"/><path fill="#ffeb3b" d="M331.6 330l-74-74 74-74 81 46.8c11.6 6.7 19.3 18.2 19.3 30.2s-7.7 23.5-19.3 30.2l-81 46.8z"/><path fill="#ff334b" d="M32.8 483.5l224.8-227.5 74 74-186.2 107.5c-15.6 9-33.8 2-41-6.1l-71.6-71.9z"/><path fill="#00d3ff" d="M32.8 28.5L104.4 100l186.2 107.5 74-74-219-126.5c-16-9.2-34.7-2.3-41.9 5.8l-70.9 71.7z"/></svg>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-wider opacity-80 leading-tight">Get it on</div>
              <div className="font-bold text-lg leading-tight">Google Play</div>
            </div>
          </a>
          <a href="https://apps.apple.com/my/app/mg-gold-mart/id6756960715" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-xl hover:bg-black/80 transition-colors">
            <svg viewBox="0 0 384 512" className="w-8 h-8 fill-white"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-wider opacity-80 leading-tight">Download on the</div>
              <div className="font-bold text-lg leading-tight">App Store</div>
            </div>
          </a>
        </div>

        <div className="dg-hero-app relative w-full max-w-[800px] aspect-[16/9] mx-auto mt-8 lg:mt-16 rounded-3xl overflow-hidden shadow-2xl border border-black/5 bg-[#fbfaf6]">
          <Image src="/assets/images/mobile.webp" alt="MG DigiGold App" fill className="object-cover object-top" priority />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white rounded-t-[3rem] lg:rounded-t-[5rem] px-5 sm:px-10 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="dg-fade-up text-center mb-16">
            <h2 className="display-font text-[clamp(2.5rem,4vw,3.5rem)] leading-[0.9] text-[#30000b] mb-6">Why MG DigiGold?</h2>
            <p className="text-[#77776f] text-lg max-w-2xl mx-auto">Modern wealth management meets traditional trust. Your gold is stored in secure, insured vaults.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="dg-fade-up bg-[#fbfaf6] p-8 rounded-3xl border border-black/5 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f4bf2f]/10 text-[#790019] mx-auto mb-6"><ShieldCheck size={32} /></span>
              <h3 className="text-xl font-medium text-[#30000b] mb-4">100% Secure</h3>
              <p className="text-[#77776f] text-sm leading-relaxed">Every gram of digital gold is backed by 24K physical gold stored in highly secure, fully insured vaults.</p>
            </div>
            <div className="dg-fade-up bg-[#fbfaf6] p-8 rounded-3xl border border-black/5 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f4bf2f]/10 text-[#790019] mx-auto mb-6"><TrendingUp size={32} /></span>
              <h3 className="text-xl font-medium text-[#30000b] mb-4">Live Pricing</h3>
              <p className="text-[#77776f] text-sm leading-relaxed">Buy and sell at highly competitive, real-time market rates directly from your smartphone.</p>
            </div>
            <div className="dg-fade-up bg-[#fbfaf6] p-8 rounded-3xl border border-black/5 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f4bf2f]/10 text-[#790019] mx-auto mb-6"><Wallet size={32} /></span>
              <h3 className="text-xl font-medium text-[#30000b] mb-4">Start Small</h3>
              <p className="text-[#77776f] text-sm leading-relaxed">No minimum lock-in. Start accumulating 24K gold with as little as ₹100 whenever you want.</p>
            </div>
            <div className="dg-fade-up bg-[#fbfaf6] p-8 rounded-3xl border border-black/5 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f4bf2f]/10 text-[#790019] mx-auto mb-6"><Smartphone size={32} /></span>
              <h3 className="text-xl font-medium text-[#30000b] mb-4">Instant Access</h3>
              <p className="text-[#77776f] text-sm leading-relaxed">Track your portfolio, buy more, or liquidate your gold to cash 24/7 with zero hassle.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
