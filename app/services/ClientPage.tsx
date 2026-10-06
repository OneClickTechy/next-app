"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { serviceItems } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesClientPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    tl.fromTo(".srv-hero-kicker", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".srv-hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "expo.out" }, "-=0.4")
      .fromTo(".srv-hero-copy", { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5");

    gsap.utils.toArray<HTMLElement>(".srv-card").forEach((el, i) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 50 }, 
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
    <main ref={container} className="bg-white min-h-screen">
      <section className="pt-28 md:pt-40 pb-12 md:pb-20 px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto text-center border-b border-black/5">
        <div className="max-w-4xl mx-auto">
          <span className="srv-hero-kicker inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#790019] uppercase mb-8">
            Our Offerings
          </span>
          <h1 className="srv-hero-title display-font text-[#30000b] text-[clamp(3.5rem,7vw,7rem)] leading-[0.85] font-medium tracking-tight mb-8">
            Premium gold <br />
            <em className="text-[#77776f]">services.</em>
          </h1>
          <p className="srv-hero-copy text-[#77776f] text-[1.2rem] leading-relaxed max-w-2xl mx-auto mb-12">
            From spot cash to digital gold, experience a new standard of trust and transparency in Coimbatore.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {serviceItems.map((service) => (
            <Link key={service.href} href={service.href} className="srv-card group block relative rounded-[2rem] overflow-hidden bg-[#fbfaf6] border border-black/5 hover:border-[#f4bf2f]/50 transition-colors">
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-8 text-white">
                  <span className="text-[10px] font-bold tracking-widest uppercase opacity-80">{service.number}</span>
                  <h2 className="display-font text-3xl font-medium mt-1">{service.title}</h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[#77776f] text-lg leading-relaxed mb-6">{service.description}</p>
                <div className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[#790019]">
                  Explore service <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
