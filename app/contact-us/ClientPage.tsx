"use client";

import { useRef } from "react";
import { Mail, MapPin, Phone, ArrowUpRight, Clock } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import { site } from "@/lib/site";

export default function ContactClientPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    const tl = gsap.timeline();
    tl.fromTo(".cu-hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" })
      .fromTo(".cu-hero-copy", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.8")
      .fromTo(".cu-contact-card", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" }, "-=0.6");

    // Fade up sections
    gsap.utils.toArray<HTMLElement>(".cu-fade-up").forEach((el) => {
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
    <main ref={container} className="bg-[#f0ede4] min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 md:pt-40 pb-12 md:pb-20 px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto text-center">
        <span className="inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#790019] uppercase mb-8">
          We are here to help
        </span>
        <h1 className="cu-hero-title display-font text-[#30000b] text-[clamp(4rem,8vw,8rem)] leading-[0.85] font-medium tracking-tight mb-8">
          Let&apos;s talk <em className="text-[#77776f]">gold.</em>
        </h1>
        <p className="cu-hero-copy text-[#77776f] text-[1.2rem] leading-relaxed max-w-2xl mx-auto mb-20">
          Have a question about today&apos;s rates, need an estimate, or want to plan a visit? Reach out to our Coimbatore team. We are happy to assist you before you arrive.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="cu-contact-card bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow text-left">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4bf2f]/10 text-[#790019] mb-6"><MapPin size={20} /></span>
            <h3 className="text-xl font-medium text-[#30000b] mb-2">Visit Us</h3>
            <p className="text-[#77776f] text-sm leading-relaxed mb-6 h-10">{site.address}</p>
            <a href="https://maps.google.com/?q=MG+Gold+Mart+Coimbatore" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[#30000b] hover:text-[#790019] transition-colors">
              Get Directions <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="cu-contact-card bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow text-left">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4bf2f]/10 text-[#790019] mb-6"><Phone size={20} /></span>
            <h3 className="text-xl font-medium text-[#30000b] mb-2">Call Us</h3>
            <div className="text-[#77776f] text-sm leading-relaxed mb-6 h-10 flex flex-col justify-center">
              {site.phones.map((phone) => (
                <a key={phone.href} href={phone.href} className="hover:text-[#790019] transition-colors block">{phone.label}</a>
              ))}
            </div>
            <a href={site.phones[0].href} className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[#30000b] hover:text-[#790019] transition-colors">
              Call Now <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="cu-contact-card bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow text-left">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4bf2f]/10 text-[#790019] mb-6"><Clock size={20} /></span>
            <h3 className="text-xl font-medium text-[#30000b] mb-2">Hours</h3>
            <p className="text-[#77776f] text-sm leading-relaxed mb-6 h-10">Mon - Sat: 9:30 AM - 7:30 PM<br/>Sunday: Closed</p>
            <span className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[#77776f]">
              Open Today
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area: Form & Map */}
      <section className="py-24 bg-white rounded-t-[3rem] lg:rounded-t-[5rem]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
            
            {/* Form */}
            <div className="cu-fade-up">
              <span className="inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#790019] uppercase mb-6">Send an enquiry</span>
              <h2 className="display-font text-[clamp(2.5rem,4vw,3.5rem)] leading-[0.9] text-[#30000b] mb-6">How can we help?</h2>
              <p className="text-[#77776f] text-lg leading-relaxed mb-10">
                Share a few details about what you're looking for, and our team will get back to you promptly.
              </p>
              <div className="bg-[#fbfaf6] p-8 sm:p-10 rounded-3xl border border-black/5">
                <ContactForm />
              </div>
            </div>

            {/* Immersive Map Area */}
            <div className="cu-fade-up relative h-[600px] lg:h-auto rounded-3xl overflow-hidden shadow-lg border border-black/5">
              <div className="absolute top-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-sm z-10 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-[#30000b]">MG Gold Mart</h3>
                  <p className="text-sm text-[#77776f]">Gandhipuram, Coimbatore</p>
                </div>
                <a href="https://maps.google.com/?q=MG+Gold+Mart+Coimbatore" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#790019] rounded-full flex items-center justify-center text-white hover:bg-[#30000b] transition-colors">
                  <ArrowUpRight size={20} />
                </a>
              </div>
              <iframe 
                title="Map to MG Gold Mart in Coimbatore" 
                src={site.mapEmbed} 
                className="absolute inset-0 w-full h-full grayscale-[0.5] hover:grayscale-0 transition-all duration-700" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                allowFullScreen 
              />
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <div className="bg-[#f0ede4] py-10">
        <FAQSection />
      </div>

    </main>
  );
}
