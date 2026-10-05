"use client";

/* eslint-disable @next/next/no-html-link-for-pages -- Static export navigation must work without an RSC server. */

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { navigation, site } from "@/lib/site";
import LiveGoldRate from "./LiveGoldRate";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-black/5 bg-[#fbfaf6]/95 backdrop-blur-xl">
      <div className="header-note hidden h-[27px] items-center justify-between bg-[#30000b] px-5 text-[9px] uppercase tracking-[0.15em] text-white/60 lg:flex lg:px-8">
        <LiveGoldRate />
        <span>Monday – Saturday <span className="px-2 text-[#f4bf2f]">·</span> 9:00 am – 7:00 pm</span>
      </div>
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 lg:px-8">
        <a href="/" aria-label="MG Gold Mart home" className="relative flex h-14 w-[162px] items-center">
          <Image src="/assets/images/logo.png" alt="MG Gold Mart" fill sizes="162px" className="object-contain object-left" priority />
        </a>

        <nav aria-label="Main navigation" className="site-navigation hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || Boolean(item.children?.some((child) => pathname === child.href));
            return item.children ? (
              <div className="group relative py-7" key={item.label}>
                <a href={item.href} className={`flex items-center gap-1 text-[13px] font-semibold transition-colors hover:text-[#790019] ${active ? "text-[#790019]" : "text-[#35352f]"}`}>
                  {item.label}<ChevronDown size={14} />
                </a>
                <div className="invisible absolute left-0 top-[68px] w-56 translate-y-2 border border-black/5 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => <a key={child.href} href={child.href} className="block px-3 py-2.5 text-sm text-[#42423a] transition-colors hover:bg-[#fff5d9] hover:text-[#790019]">{child.label}</a>)}
                </div>
              </div>
            ) : (
              <a key={item.href} href={item.href} className={`text-[13px] font-semibold transition-colors hover:text-[#790019] ${active ? "text-[#790019]" : "text-[#35352f]"}`}>{item.label}</a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 lg:gap-5">
          <div className="group relative hidden py-7 lg:block">
            <button className="flex h-10 items-center gap-1 bg-[#1a1a1a] px-4 text-[11px] font-bold text-white transition-colors hover:bg-black">
              GET APP <ChevronDown size={14} />
            </button>
            <div className="invisible absolute right-0 top-[68px] w-48 translate-y-2 border border-black/5 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <a href="https://play.google.com/store/apps/details?id=com.atts.mgGoldMart&pcampaignid=web_share" target="_blank" rel="noreferrer" className="block px-3 py-2.5 text-sm text-[#42423a] hover:bg-[#fff5d9] hover:text-[#790019]">Android (Play Store)</a>
              <a href="https://apps.apple.com/my/app/mg-gold-mart/id6756960715" target="_blank" rel="noreferrer" className="block px-3 py-2.5 text-sm text-[#42423a] hover:bg-[#fff5d9] hover:text-[#790019]">iOS (App Store)</a>
            </div>
          </div>

          <a href={`tel:${site.phone}`} className="header-call hidden h-10 items-center gap-2 bg-[#f4bf2f] px-4 text-[11px] font-bold transition-colors hover:bg-[#ffda67] lg:flex">
            <Phone size={14} /><span>Call {site.displayPhone}</span><ArrowUpRight size={14} />
          </a>

          <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="flex h-11 w-11 items-center justify-center border border-black/10 text-[#30000b] lg:hidden">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-black/5 bg-[#fbfaf6] px-5 pb-6 pt-3 lg:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto flex max-w-[1320px] flex-col">
            {navigation.map((item) => item.children ? (
              <div key={item.label} className="border-b border-black/5">
                <button type="button" className="flex w-full items-center justify-between py-3.5 text-left text-sm font-semibold" aria-expanded={servicesOpen} onClick={() => setServicesOpen((open) => !open)}>
                  {item.label}<ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && item.children.map((child) => <a key={child.href} href={child.href} onClick={() => setMenuOpen(false)} className="block py-2 pl-4 text-sm text-[#66665f]">{child.label}</a>)}
              </div>
            ) : (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="border-b border-black/5 py-3.5 text-sm font-semibold">{item.label}</a>
            ))}
            
            <div className="mt-6 flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#77776f]">Download App</span>
              <div className="flex gap-2">
                <a href="https://play.google.com/store/apps/details?id=com.atts.mgGoldMart&pcampaignid=web_share" target="_blank" rel="noreferrer" className="flex-1 rounded border border-black/10 bg-white py-2 text-center text-xs font-semibold hover:bg-gray-50">Play Store</a>
                <a href="https://apps.apple.com/my/app/mg-gold-mart/id6756960715" target="_blank" rel="noreferrer" className="flex-1 rounded border border-black/10 bg-white py-2 text-center text-xs font-semibold hover:bg-gray-50">App Store</a>
              </div>
            </div>

            <a href={`tel:${site.phone}`} className="button-gold mt-6 w-full"><Phone size={16} /> Call Now: {site.displayPhone}</a>
          </nav>
        </div>
      )}
    </header>
  );
}
