"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, Info, TrendingUp, RefreshCw, Calculator } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import GoldCalculator from "@/components/GoldCalculator";
import FAQSection from "@/components/FAQSection";

export default function GoldCalculatorClientPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    const tl = gsap.timeline();
    tl.fromTo(".gc-hero-kicker", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".gc-hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "expo.out" }, "-=0.4")
      .fromTo(".gc-hero-copy", { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5")
      .fromTo(".gc-calc-container", { opacity: 0, y: 40, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out" }, "-=0.8");

    // Fade up sections
    gsap.utils.toArray<HTMLElement>(".gc-fade-up").forEach((el) => {
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
    <main ref={container} className="bg-[#1a1a1a] text-white overflow-hidden min-h-screen">
      {/* Dark Premium Hero */}
      <section className="relative pt-28 md:pt-40 pb-12 md:pb-20 px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto text-center">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#30000b,transparent_70%)]" />
        </div>
        
        <div className="relative z-10">
          <span className="gc-hero-kicker inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#f4bf2f] uppercase mb-8">
            Live Market Tool (நேரடி சந்தை கருவி)
          </span>
          <h1 className="gc-hero-title display-font text-white text-[clamp(4rem,8vw,8rem)] leading-[0.85] font-medium tracking-tight mb-8">
            Valuation. <br />
            <em className="text-white/50">Demystified.</em><br/>
            <span className="text-[clamp(1.5rem,2.5vw,2.5rem)] text-[#f4bf2f]/70 mt-4 block leading-tight">
              மதிப்பீடு. எளிமையாக்கப்பட்டது.
            </span>
          </h1>
          <p className="gc-hero-copy text-white/70 text-[1.2rem] leading-relaxed max-w-2xl mx-auto mb-20">
            Use our interactive calculator to estimate the spot value of your gold based on live market rates in Coimbatore. No hidden math, just transparent numbers.
            <br/><br/>கோயம்புத்தூரில் உள்ள நேரடி சந்தை விலைகளின் அடிப்படையில் உங்கள் தங்கத்தின் மதிப்பை மதிப்பிட எங்கள் கால்குலேட்டரைப் பயன்படுத்தவும். மறைக்கப்பட்ட கணக்கீடுகள் இல்லை, வெளிப்படையான எண்கள் மட்டுமே.
          </p>
        </div>

        {/* Calculator Wrapped in Premium Container */}
        <div className="gc-calc-container relative z-20 max-w-5xl mx-auto">
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-[#f4bf2f]/30" />
          <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-[#f4bf2f]/30" />
          <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-[#f4bf2f]/30" />
          <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-[#f4bf2f]/30" />

          {/* Actual Calculator */}
          <div className="bg-[#fbfaf6] rounded-3xl overflow-hidden shadow-2xl text-black">
            <GoldCalculator />
          </div>
        </div>
      </section>

      {/* How it works grid */}
      <section className="py-24 bg-white text-[#30000b] rounded-t-[3rem] lg:rounded-t-[5rem] relative z-30 mt-20">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-20 gc-fade-up">
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#790019] uppercase mb-6">The Formula (சூத்திரம்)</span>
            <h2 className="display-font text-[clamp(2.5rem,4vw,3.5rem)] leading-[0.9] mb-6">How we calculate<br/><span className="text-[clamp(1.5rem,2.5vw,2.5rem)] text-[#77776f] mt-4 block leading-tight">நாங்கள் எவ்வாறு கணக்கிடுகிறோம்</span></h2>
            <p className="text-[#77776f] text-lg leading-relaxed">
              Our valuation is strictly data-driven. We multiply the verified weight of your gold by its purity percentage, and apply the exact live market rate.
              <br/><br/>எங்கள் மதிப்பீடு தரவுகளை மட்டுமே அடிப்படையாகக் கொண்டது. உங்கள் தங்கத்தின் எடையை அதன் தூய்மை சதவீதத்தால் பெருக்கி, சரியான நேரடி சந்தை விலையைப் பயன்படுத்துகிறோம்.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 gc-fade-up">
            <div className="bg-[#f0ede4] p-10 rounded-3xl">
              <Calculator size={32} strokeWidth={1.5} className="text-[#790019] mb-6" />
              <h3 className="text-xl font-medium mb-3">1. Purity (Karat)<br/><span className="text-base text-[#77776f] block mt-1">(தூய்மை)</span></h3>
              <p className="text-[#77776f] leading-relaxed">We determine the exact karat (e.g., 22K = 91.6% pure gold) using non-destructive XRF laser testing in our store.<br/><br/>எங்கள் கடையில் சேதமற்ற XRF லேசர் சோதனையைப் பயன்படுத்தி சரியான காரட் (எ.கா. 22K = 91.6% தூய தங்கம்) ஐ நாங்கள் தீர்மானிக்கிறோம்.</p>
            </div>
            
            <div className="bg-[#f0ede4] p-10 rounded-3xl">
              <TrendingUp size={32} strokeWidth={1.5} className="text-[#790019] mb-6" />
              <h3 className="text-xl font-medium mb-3">2. Live Spot Rate<br/><span className="text-base text-[#77776f] block mt-1">(நேரடி சந்தை விலை)</span></h3>
              <p className="text-[#77776f] leading-relaxed">We sync directly with global and local spot markets. The price you see is the actual price of gold right now.<br/><br/>நாங்கள் நேரடியாக உலகளாவிய மற்றும் உள்ளூர் சந்தைகளுடன் ஒத்திசைக்கிறோம். நீங்கள் பார்க்கும் விலை தான் தற்போதைய உண்மையான தங்கத்தின் விலை.</p>
            </div>

            <div className="bg-[#f0ede4] p-10 rounded-3xl">
              <Info size={32} strokeWidth={1.5} className="text-[#790019] mb-6" />
              <h3 className="text-xl font-medium mb-3">3. Final Valuation<br/><span className="text-base text-[#77776f] block mt-1">(இறுதி மதிப்பீடு)</span></h3>
              <p className="text-[#77776f] leading-relaxed">Weight × Purity × Rate. No melting charges, no hidden fees. The final offer is exactly what the math says.<br/><br/>எடை × தூய்மை × விலை. உருக்கும் கட்டணம் இல்லை, மறைக்கப்பட்ட கட்டணங்கள் இல்லை. இறுதி சலுகை கணக்கு என்ன சொல்கிறதோ அதுவே.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <div className="bg-[#fbfaf6] text-[#30000b] py-10">
        <FAQSection />
      </div>

    </main>
  );
}
