"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function TermsClientPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    tl.fromTo(".policy-hero-kicker", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".policy-hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "expo.out" }, "-=0.4")
      .fromTo(".policy-hero-copy", { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5")
      .fromTo(".policy-content", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }, "-=0.8");

  }, { scope: container });

  return (
    <main ref={container} className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="pt-28 md:pt-40 pb-8 md:pb-10 px-5 sm:px-10 lg:px-16 max-w-[1400px] mx-auto text-center border-b border-black/5">
        <div className="max-w-4xl mx-auto">
          <span className="policy-hero-kicker inline-block text-[0.75rem] font-bold tracking-[0.2em] text-[#790019] uppercase mb-8">
            Legal
          </span>
          <h1 className="policy-hero-title display-font text-[#30000b] text-[clamp(3.5rem,7vw,7rem)] leading-[0.85] font-medium tracking-tight mb-8">
            Terms & <br />
            <em className="text-[#77776f]">Conditions</em>
          </h1>
          <p className="policy-hero-copy text-[#77776f] text-[1.2rem] leading-relaxed max-w-2xl mx-auto mb-12">
            Please read these terms carefully before engaging with our services. We believe in complete transparency and clarity.
          </p>
        </div>
      </section>

      {/* Content Area */}
      <section className="policy-content px-5 sm:px-10 lg:px-16 max-w-[900px] mx-auto py-20">
        <div className="space-y-12 text-[#4a4a44] text-[1.05rem] leading-loose">
          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">1. Introduction</h2>
            <p>
              Welcome to MG Gold Mart. By accessing our website, visiting our store in Coimbatore, or utilizing our gold valuation and purchasing services, you agree to be bound by the following Terms and Conditions. These terms ensure a secure, transparent, and legally compliant transaction for both parties.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">2. Eligibility</h2>
            <p>
              You must be at least 18 years of age to sell gold or other precious metals to MG Gold Mart. By initiating a transaction, you represent and warrant that you are the lawful owner of the items being sold, or have the legal authorization to sell them. We strictly prohibit the sale of stolen or illegally acquired goods.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">3. Valuation and Pricing</h2>
            <p>
              Our valuation process is based on live market rates for gold, coupled with advanced and certified testing methods (such as XRF spectroscopy) to determine the exact purity and weight of your items. The initial quote provided online or over the phone is an estimate. The final price is determined only after a physical evaluation at our premises. We maintain a 0% melting deduction policy, meaning you are paid for the pure gold content exactly as tested.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">4. Verification & Documentation</h2>
            <p>
              To comply with government regulations and prevent fraudulent activities, all sellers must provide valid government-issued photo identification (such as Aadhaar, PAN card, or Driving License) along with proof of address. We may also request the original purchase invoice of the jewellery, if available. We reserve the right to photograph the items and the seller, and to record the transaction details.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">5. Payment Terms</h2>
            <p>
              Payments for accepted transactions are made instantly. We offer immediate cash payments (subject to legal limits) or direct bank transfers (IMPS/NEFT/RTGS). Once a transaction is completed and payment is disbursed, the sale is considered final, and the items cannot be returned or reclaimed.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">6. Right to Refuse Service</h2>
            <p>
              MG Gold Mart reserves the right to refuse service to anyone, at our sole discretion, without providing a reason. This includes situations where we suspect the items may be stolen, the ownership is disputed, or the identification provided is unsatisfactory.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">7. Amendments</h2>
            <p>
              We reserve the right to update or modify these Terms and Conditions at any time without prior notice. The updated terms will be posted on this website and will be effective immediately. Your continued use of our services constitutes your acceptance of any such changes.
            </p>
          </div>
          
          <div className="pt-10 border-t border-black/5">
            <p className="text-sm text-[#77776f]">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
