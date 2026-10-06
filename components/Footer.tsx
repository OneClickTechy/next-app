/* eslint-disable @next/next/no-html-link-for-pages -- Static export navigation must work without an RSC server. */

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about-us/" },
  { title: "Instant Cash", href: "/instant-cash/" },
  { title: "Release Pledged Gold", href: "/relese-pledged-gold/" },
  { title: "Spot Cash", href: "/sell-used-gold/" },
  { title: "Gallery", href: "/gallery/" },
  { title: "Contact", href: "/contact-us/" },
];

const legalLinks = [
  { title: "Terms & Conditions", href: "/terms-and-conditions/" },
  { title: "Privacy Policy", href: "/privacy-policy/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#30000b] text-white">
      <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8 lg:py-20">
        <div data-reveal className="footer-reachout">
          <div>
            <span className="eyebrow !text-[#f4bf2f]">Whenever you&apos;re ready</span>
            <p className="display-font">A better next step<br /><em>starts with hello.</em></p>
          </div>
          <a href={`tel:${site.phone}`} className="footer-reachout-link">
            <span>Talk to MG Gold Mart</span><ArrowUpRight size={18} />
          </a>
        </div>
        <div className="mb-14 grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.1fr_0.8fr_1.3fr]">
          <div data-reveal>
            <a href="/" className="display-font text-2xl font-extrabold tracking-tight">MG<span className="text-[#f4bf2f]">.</span> GOLD MART</a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">A more considered way to sell gold. Honest valuation, clear choices and personal service in the heart of Coimbatore.</p>
            <a href={`tel:${site.phone}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#f4bf2f] hover:text-white">Speak with our team <ArrowUpRight size={15} /></a>
          </div>
          <div data-reveal>
            <h2 className="eyebrow !text-[#f4bf2f]">Explore</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {quickLinks.map((link) => <li key={link.href}><a href={link.href} className="text-sm text-white/60 transition-colors hover:text-[#ffda67]">{link.title}</a></li>)}
            </ul>
          </div>
          <div data-reveal>
            <h2 className="eyebrow !text-[#f4bf2f]">Visit us</h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-white/60">
              <div className="flex gap-3">
                <MapPin size={17} className="mt-1 shrink-0 text-[#f4bf2f]" />
                <div className="space-y-4">
                  {site.branches.map((branch) => (
                    <div key={branch.name}>
                      <span className="font-semibold text-white/80">{branch.name}</span>
                      <p className="mt-1 text-white/50">{branch.address}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="flex gap-3"><Phone size={16} className="mt-1 shrink-0 text-[#f4bf2f]" /><span className="flex flex-wrap gap-x-2">{site.phones.map((phone, index) => <span key={phone.href}><a className="hover:text-white" href={phone.href}>{phone.label}</a>{index < site.phones.length - 1 ? "," : ""}</span>)}</span></p>
              <p className="flex gap-3"><Mail size={16} className="mt-1 shrink-0 text-[#f4bf2f]" /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></p>
            </div>
          </div>
        </div>
        
        <div className="grid gap-8 border-b border-white/10 pb-14 mb-14 lg:grid-cols-2">
          <div data-reveal>
            <h2 className="eyebrow !text-[#f4bf2f]">Legal</h2>
            <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              {legalLinks.map((link) => <li key={link.href}><a href={link.href} className="text-sm text-white/60 transition-colors hover:text-[#ffda67]">{link.title}</a></li>)}
            </ul>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal className="flex flex-col justify-between">
            <div><p className="eyebrow !text-[#f4bf2f]">Find our stores</p><p className="mt-4 text-sm leading-6 text-white/55">Come by for a clear, no-pressure evaluation at our Gandhipuram or Saibaba Colony stores.</p></div>
            <div className="mt-8 text-xs text-white/40 space-y-2">
              <p>© {new Date().getFullYear()} MG Gold Mart. All rights reserved.</p>
              <p>Design & Develop <a href="https://bindzo8.com/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#f4bf2f] transition-colors">https://bindzo8.com/</a></p>
            </div>
          </div>
          <div data-reveal className="grid sm:grid-cols-2 gap-4 h-[400px] sm:h-60 lg:h-52">
            {site.branches.map((branch) => (
              <div key={branch.name} className="h-full overflow-hidden border border-white/10 bg-white/5">
                <iframe title={branch.name} src={branch.mapEmbed} className="h-full w-full grayscale transition-[filter] duration-500 hover:grayscale-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
