import Image from "next/image";

export default function AppCTA() {
  return (
    <section className="app-cta-section relative overflow-hidden bg-[#240008] text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-12 px-5 py-16 md:py-20 lg:flex-row lg:gap-8 lg:px-8">
        
        {/* Left Image (Model) - hidden on mobile, visible on desktop/tablet */}
        <div data-reveal className="hidden w-full max-w-[300px] shrink-0 lg:block">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#f4bf2f]/20 shadow-[0_0_30px_rgba(244,191,47,0.1)]">
            <Image src="/assets/images/model.webp" alt="Model wearing gold" fill className="object-cover" sizes="300px" />
          </div>
        </div>

        {/* Center Content */}
        <div data-reveal className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left lg:pl-4">
          <span className="eyebrow text-[#f4bf2f] mb-4 text-xs font-bold tracking-[0.2em] uppercase">The MG Gold Mart App</span>
          <h2 className="display-font text-4xl font-bold md:text-5xl lg:text-[54px] lg:leading-[1.1]">DigiGold, in your pocket.</h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[#f8f6f0]/70">
            Download our official app to check live gold rates, manage your DigiGold investments, and connect with our experts instantly. Available for both Android and iOS.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a 
              href="https://play.google.com/store/apps/details?id=com.atts.mgGoldMart&pcampaignid=web_share" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[#f4bf2f]/30 bg-black/40 px-6 py-3.5 transition-all hover:border-[#f4bf2f] hover:bg-black/60 hover:-translate-y-1"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4bf2f]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-black"><path d="M3.737 20.803c-.274-.27-.426-.642-.426-1.121V4.318c0-.479.152-.85.426-1.12.274-.27.653-.357 1.137-.25l13.78 7.915c.66.38.991.758.991 1.137 0 .379-.33.757-.991 1.137l-13.78 7.916c-.484.106-.863.02-1.137-.25z"/></svg>
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-white/60">Get it on</div>
                <div className="text-[15px] font-bold leading-tight text-white">Google Play</div>
              </div>
            </a>
            
            <a 
              href="https://apps.apple.com/my/app/mg-gold-mart/id6756960715" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[#f4bf2f]/30 bg-black/40 px-6 py-3.5 transition-all hover:border-[#f4bf2f] hover:bg-black/60 hover:-translate-y-1"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-black"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.8 1.49.03 2.65.62 3.39 1.76-2.9 1.71-2.43 5.48.51 6.64-.67 1.83-1.63 3.6-2.48 4.57zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.36-2.04 4.34-3.74 4.25z"/></svg>
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-white/60">Download on the</div>
                <div className="text-[15px] font-bold leading-tight text-white">App Store</div>
              </div>
            </a>
          </div>
        </div>

        {/* Right Image (Mobile App) */}
        <div data-reveal className="w-full max-w-[340px] shrink-0 md:max-w-[420px] lg:max-w-[340px]">
          <div className="relative aspect-square w-full drop-shadow-2xl">
            <Image src="/assets/images/mobile.webp" alt="MG Gold Mart App" fill className="object-contain lg:object-right" sizes="(max-width: 768px) 340px, 420px" />
          </div>
        </div>
      </div>
    </section>
  );
}
