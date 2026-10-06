"use client";

import { useRef } from "react";
import Image from "next/image";
import { Eye, Scale, ShieldCheck, Check, Camera } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";

export default function AboutClientPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    const tl = gsap.timeline();
    tl.fromTo(".au-hero-kicker", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".au-hero-title span", { yPercent: 140 }, { yPercent: 0, duration: 1.2, ease: "expo.out", stagger: 0.1 }, "-=0.6")
      .fromTo(".au-hero-img", { scale: 1.1, opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }, { scale: 1, opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1.6, ease: "expo.out" }, "<0.2")
      .fromTo(".au-hero-copy", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.8");

    // Fade up sections
    gsap.utils.toArray<HTMLElement>(".au-fade-up").forEach((el) => {
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

    // Manifesto Scroll
    const manifestoLines = gsap.utils.toArray<HTMLElement>(".au-manifesto-line");
    manifestoLines.forEach((line) => {
      gsap.fromTo(line,
        { opacity: 0.2, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          }
        }
      );
    });

    // Stagger values
    gsap.fromTo(".au-value-card", 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".au-values-grid",
          start: "top 75%",
        }
      }
    );

  }, { scope: container });

  return (
    <main ref={container} className="bg-[#fbfaf6] overflow-hidden">
      {/* Editorial Hero */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 md:pt-32 pb-12 md:pb-20 px-5 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center z-10">
          <div>
            <span className="au-hero-kicker inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#790019] uppercase mb-8">
              A promise you can see
            </span>
            <h1 className="au-hero-title display-font text-[#30000b] text-[clamp(3.5rem,7vw,8rem)] leading-[0.85] font-medium tracking-tight mb-8">
              <div className="overflow-hidden py-4 -my-4"><span className="inline-block">Trust is</span></div>
              <div className="overflow-hidden py-4 -my-4"><span className="inline-block">built in the</span></div>
              <div className="overflow-hidden py-4 -my-4"><span className="inline-block"><em>details.</em></span></div>
            </h1>
            <p className="au-hero-copy text-[#77776f] text-[1.2rem] leading-relaxed max-w-md">
              Honest conversations, transparent evaluation, and thoughtful service for every customer in Coimbatore. We redefine what it means to sell your gold.
            </p>
          </div>
          <div className="relative h-[60vh] lg:h-[85vh] w-full bg-[#30000b] au-hero-img">
            <Image 
              src="/assets/images/sell-gold-for-cash.webp" 
              alt="MG Gold Mart, Coimbatore" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw" 
              className="object-cover object-center opacity-90" 
              priority
            />
            <div className="absolute left-0 bottom-10 bg-white px-8 py-6 max-w-xs shadow-2xl">
              <p className="font-serif text-[#30000b] text-xl leading-snug">"We aim to make every visit safe, calm and straightforward."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-32 bg-[#30000b] text-white">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-10 text-center lg:text-left">
          <h2 className="display-font text-[clamp(2rem,4vw,4rem)] leading-[1.2] font-medium">
            <div className="au-manifesto-line">At MG Gold Mart,</div>
            <div className="au-manifesto-line">we believe a good valuation</div>
            <div className="au-manifesto-line"><em className="text-[#f4bf2f]">begins with respect.</em></div>
            <div className="au-manifesto-line">We listen to what you need,</div>
            <div className="au-manifesto-line">take care with your jewellery,</div>
            <div className="au-manifesto-line">and explain the process</div>
            <div className="au-manifesto-line">so you can make an</div>
            <div className="au-manifesto-line"><em className="text-[#f4bf2f]">informed choice.</em></div>
          </h2>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-[#f0ede4]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-24 au-fade-up">
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#790019] uppercase mb-6">How we earn your trust</span>
            <h2 className="display-font text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] text-[#30000b]">See every step. <br/><em>Ask every question.</em></h2>
            <p className="mt-6 text-[#77776f] text-lg">No hidden process. Our team explains what we are checking and what the result means.</p>
          </div>

          <div className="au-values-grid grid md:grid-cols-3 gap-8">
            <div className="au-value-card bg-white p-12 rounded-t-full border border-black/5 flex flex-col items-center text-center shadow-lg">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#fbfaf6] text-[#790019] mb-8 shadow-inner"><Eye size={32} strokeWidth={1.5} /></span>
              <h3 className="text-2xl font-medium text-[#30000b] mb-4">In plain sight</h3>
              <p className="text-[#77776f] leading-relaxed">Evaluation takes place in a secure cabin, with your jewellery kept in view and cameras providing added visibility.</p>
            </div>
            <div className="au-value-card bg-[#30000b] text-white p-12 rounded-t-full flex flex-col items-center text-center shadow-lg mt-0 md:mt-12">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-[#f4bf2f] mb-8 shadow-inner"><Scale size={32} strokeWidth={1.5} /></span>
              <h3 className="text-2xl font-medium mb-4">Precision assessment</h3>
              <p className="text-white/70 leading-relaxed">Our team uses advanced German XRF laser technology to test your gold with zero damage, right in front of you.</p>
            </div>
            <div className="au-value-card bg-white p-12 rounded-t-full border border-black/5 flex flex-col items-center text-center shadow-lg mt-0 md:mt-24">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#fbfaf6] text-[#790019] mb-8 shadow-inner"><ShieldCheck size={32} strokeWidth={1.5} /></span>
              <h3 className="text-2xl font-medium text-[#30000b] mb-4">Your decision</h3>
              <p className="text-[#77776f] leading-relaxed">We present the offer clearly. You are free to ask questions and decide whether to accept, without pressure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process / Transparency */}
      <section className="py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 items-center">
            <div className="au-fade-up order-2 lg:order-1">
              <span className="inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#790019] uppercase mb-6">Our commitment</span>
              <h2 className="display-font text-[clamp(2.5rem,4vw,4rem)] leading-[0.9] text-[#30000b] mb-8">
                Market-aware rates, <br/><em>explained with honesty.</em>
              </h2>
              <p className="text-[#77776f] text-lg leading-relaxed mb-10">
                Gold prices move with the market, and the final value depends on your item's weight and purity. We walk through the assessment and offer so you know how we arrived at it.
              </p>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-lg text-[#30000b] border-b border-black/5 pb-4">
                  <Check size={20} className="text-[#790019]" /> Respectful service, whatever you decide
                </li>
                <li className="flex items-center gap-4 text-lg text-[#30000b] border-b border-black/5 pb-4">
                  <Check size={20} className="text-[#790019]" /> Secure cabins and a visible assessment
                </li>
                <li className="flex items-center gap-4 text-lg text-[#30000b] border-b border-black/5 pb-4">
                  <Check size={20} className="text-[#790019]" /> Clear explanation before any transaction
                </li>
              </ul>
            </div>
            
            <div className="au-fade-up relative min-h-[500px] w-full bg-[#1a1a1a] rounded-3xl overflow-hidden order-1 lg:order-2">
              <Image 
                src="/assets/images/cash-for-gold-1.jpg" 
                alt="Gold jewellery being assessed" 
                fill 
                sizes="(max-width: 1024px) 100vw, 40vw" 
                className="object-cover opacity-80" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="flex items-center gap-3 font-medium tracking-wide text-white"><Camera size={20} className="text-[#f4bf2f]" /> Transparency you can see</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <div className="bg-[#f0ede4] pb-20">
        <FAQSection />
      </div>

    </main>
  );
}
