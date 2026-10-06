"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function PrivacyClientPage() {
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
            Privacy <br />
            <em className="text-[#77776f]">Policy</em>
          </h1>
          <p className="policy-hero-copy text-[#77776f] text-[1.2rem] leading-relaxed max-w-2xl mx-auto mb-12">
            Your trust is our most valuable asset. We are committed to protecting your personal information and ensuring your transactions are strictly confidential.
          </p>
        </div>
      </section>

      {/* Content Area */}
      <section className="policy-content px-5 sm:px-10 lg:px-16 max-w-[900px] mx-auto py-20">
        <div className="space-y-12 text-[#4a4a44] text-[1.05rem] leading-loose">
          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">1. Information We Collect</h2>
            <p>
              When you visit MG Gold Mart or use our services, we may collect personal identification information such as your name, phone number, email address, and physical address. During a transaction, we are required by law to collect copies of your government-issued ID and photographs of the items being sold. We also collect non-identifiable data when you browse our website to improve user experience.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">2. How We Use Your Information</h2>
            <p>
              The primary use of your personal information is to facilitate transactions, comply with legal and regulatory obligations, and ensure the security of both parties. We may also use your contact details to communicate with you regarding your valuation requests, updates on our services, or customer support inquiries.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">3. Data Protection & Confidentiality</h2>
            <p>
              We implement robust physical, electronic, and managerial procedures to safeguard and secure the information we collect. Your transaction details are kept strictly confidential and are only accessible to authorized personnel. We understand the sensitive nature of selling gold, and we guarantee utmost discretion throughout the process.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">4. Sharing Your Information</h2>
            <p>
              MG Gold Mart does not sell, trade, or rent your personal information to third parties. We may only disclose your information to law enforcement agencies or regulatory bodies if required by law, or to trusted service providers who assist us in operating our business (subject to strict confidentiality agreements).
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">5. Cookies and Tracking</h2>
            <p>
              Our website may use "cookies" to enhance user experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent. Please note that disabling cookies may affect the functionality of certain parts of our website.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">6. Your Rights</h2>
            <p>
              You have the right to request access to the personal information we hold about you and to ask for corrections if the information is inaccurate. If you have any concerns regarding your privacy or data, you may contact our customer support team for assistance.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">7. Changes to This Policy</h2>
            <p>
              We reserve the right to update this Privacy Policy at our discretion. We encourage users to frequently check this page for any changes. By using our services, you acknowledge and agree that it is your responsibility to review this privacy policy periodically.
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
