"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FAQSection from "@/components/FAQSection";

const galleryImages = [
  { src: "/assets/images/home.jpg", alt: "MG Gold Mart Branch Exterior", width: 600, height: 800 },
  { src: "/assets/images/home-1.jpg", alt: "Customer Service Counter", width: 800, height: 600 },
  { src: "/assets/images/about-us.jpg", alt: "Gold Testing Machine", width: 600, height: 800 },
  { src: "/assets/images/silver-coins.jpg", alt: "Silver Valuation", width: 800, height: 600 },
  { src: "/assets/images/release-pledged-gold.jpg", alt: "Pledged Gold Release", width: 800, height: 800 },
  { src: "/assets/images/instant-cash.jpg", alt: "Instant Cash Payment", width: 600, height: 600 },
  { src: "/assets/images/contact-us.jpg", alt: "Store Interior", width: 800, height: 1000 },
];

export default function GalleryClientPage() {
  const container = useRef<HTMLDivElement>(null);
  const masonryContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animation
    const tl = gsap.timeline();
    tl.fromTo(".gallery-kicker", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".gallery-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "expo.out" }, "-=0.4")
      .fromTo(".gallery-desc", { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5");

    // Masonry Items Parallax & Fade
    const items = gsap.utils.toArray<HTMLElement>(".masonry-item");
    
    items.forEach((item, i) => {
      const speed = item.dataset.speed || 1;
      
      // Entrance fade
      gsap.fromTo(item, 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          }
        }
      );

      // Subtle parallax effect on images within items
      const img = item.querySelector("img");
      if (img) {
        gsap.to(img, {
          yPercent: 15 * Number(speed),
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      }
    });

  }, { scope: container });

  return (
    <main ref={container} className="bg-[#fbfaf6] text-[#30000b] min-h-screen pt-28 md:pt-40 pb-12 md:pb-20 overflow-hidden">
      
      {/* Editorial Header */}
      <section className="px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto text-center mb-24 relative">
        <span className="gallery-kicker inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#790019] uppercase mb-8">
          The Workspace
        </span>
        <h1 className="gallery-title display-font text-[clamp(3.5rem,7vw,7rem)] leading-[0.85] mb-8">
          Inside <br /> <span className="italic text-[#77776f]">MG Gold Mart</span>
        </h1>
        <p className="gallery-desc text-[#77776f] text-[1.1rem] md:text-[1.3rem] max-w-2xl mx-auto leading-relaxed">
          Take a look at our secure, transparent, and state-of-the-art valuation centers in Coimbatore. Where technology meets trust.
        </p>
      </section>

      {/* Custom Masonry Layout */}
      <section className="px-5 sm:px-10 lg:px-16 max-w-[1600px] mx-auto mb-32">
        <div 
          ref={masonryContainer}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {galleryImages.map((img, i) => (
            <div 
              key={i} 
              className="masonry-item break-inside-avoid relative overflow-hidden rounded-2xl group cursor-pointer"
              data-speed={i % 2 === 0 ? 0.8 : 1.2}
            >
              {/* Image Container with scale effect */}
              <div className="relative w-full overflow-hidden bg-[#e8e5dc]" style={{ aspectRatio: img.width / img.height }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#30000b]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-white font-medium tracking-wide">
                    {img.alt}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto mb-20">
        <div className="bg-[#30000b] text-white rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          {/* Subtle noise/texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
          
          <h2 className="display-font text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] mb-8 relative z-10">
            Experience it <br/> <em className="text-[#f4bf2f]">in person.</em>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg relative z-10">
            Visit our branch in Coimbatore for a free, transparent valuation of your gold jewelry using our advanced XRF technology.
          </p>
          <a 
            href="/contact-us" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#f4bf2f] text-[#30000b] font-medium rounded-full hover:bg-white transition-colors duration-300 relative z-10"
          >
            Find Our Store
          </a>
        </div>
      </section>

      <FAQSection />

    </main>
  );
}
