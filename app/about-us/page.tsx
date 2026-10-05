import Image from "next/image";
import { ArrowRight, Camera, Check, Eye, Scale, ShieldCheck } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import PageMasthead from "@/components/PageMasthead";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About MG Gold Mart",
  "Learn about MG Gold Mart's transparent gold valuation, secure evaluation process and customer-first service in Coimbatore.",
  "/about-us/",
  "/assets/images/about-us.jpg",
);

export default function AboutPage() {
  return (
    <main>
      <PageMasthead
        eyebrow="A promise you can see"
        title="Trust is built in the details."
        description="Honest conversations, transparent evaluation and thoughtful service for every customer."
        image="/assets/images/sell-gold-for-cash.webp"
        imageAlt="MG Gold Mart, Coimbatore"
        index="ABOUT"
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-[1220px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div data-reveal className="relative min-h-[440px] overflow-hidden bg-[#e9e3d4]">
            <Image src="/assets/images/about-us2.jpg" alt="Gold assessment at MG Gold Mart" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute left-5 top-5 bg-[#fbfaf6]/90 px-4 py-3 text-xs font-bold text-[#790019] backdrop-blur">COIMBATORE • CUSTOMER FIRST</div>
          </div>
          <div data-reveal>
            <SectionTitle eyebrow="Who we are" title="A clear, considered way to sell your gold." description="At MG Gold Mart, we believe a good valuation begins with respect. We listen to what you need, take care with your jewellery and explain the process so you can make an informed choice." />
            <p className="mt-5 text-sm leading-7 text-[#77776f]">Our team serves customers who want to sell old or broken jewellery, need instant cash, or are exploring help with pledged gold. We aim to make every visit safe, calm and straightforward.</p>
            <a href="/contact-us/" className="button-gold mt-8">Visit or get in touch <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="about-values bg-[#f0ede4] section-pad">
        <div className="mx-auto max-w-[1220px]">
          <SectionTitle centered eyebrow="How we earn your trust" title="See every step. Ask every question." description="No hidden process. Our team explains what we are checking and what the result means." />
          <div data-stagger className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { icon: Eye, title: "In plain sight", text: "Evaluation takes place in a secure cabin, with your jewellery kept in view and cameras providing added visibility." },
              { icon: Scale, title: "Careful assessment", text: "Our team uses testing plates and nitric acid as part of its assessment, in front of you, and talks through the result." },
              { icon: ShieldCheck, title: "Your decision", text: "We present the offer clearly. You are free to ask questions and decide whether to accept, without pressure." },
            ].map(({ icon: Icon, title, text }) => (
              <article data-stagger-item key={title} className="border border-black/5 bg-white p-7 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0bb] text-[#790019]"><Icon size={21} /></span>
                <h3 className="mt-6 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#77776f]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div data-reveal>
            <span className="eyebrow">Our commitment</span>
            <h2 className="display-font mt-5 text-4xl font-bold leading-tight">Market-aware rates, explained with honesty.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#77776f]">Gold prices move with the market, and the final value depends on your item&apos;s weight and purity. We walk through the assessment and offer so you know how we arrived at it.</p>
            <ul className="mt-7 space-y-3 text-sm text-[#55564f]">
              {["Respectful service, whatever you decide", "Secure cabins and a visible assessment", "Clear explanation before any transaction"].map((text) => <li className="flex items-center gap-2" key={text}><Check size={16} className="text-[#790019]" />{text}</li>)}
            </ul>
          </div>
          <div data-reveal className="relative min-h-[340px] overflow-hidden bg-[#30000b]">
            <Image src="/assets/images/cash-for-gold-1.jpg" alt="Gold jewellery being assessed" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#30000b]/90 to-transparent p-7 pt-16"><p className="flex items-center gap-2 text-sm font-semibold text-white"><Camera size={17} className="text-[#ffda67]" /> Transparency you can see</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}
