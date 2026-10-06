"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionTitle from "./SectionTitle";

const faqs = [
  {
    question: "How do you evaluate the purity of my gold?",
    answer: "We use state-of-the-art German XRF laser spectrometers. This process is 100% non-destructive and highly accurate, allowing us to determine the exact purity of your gold right in front of you."
  },
  {
    question: "Do you deduct any melting charges?",
    answer: "No, we have a strict 0.0% melting deduction policy. You get paid for the exact weight and purity of your gold based on the live market rates in Coimbatore."
  },
  {
    question: "What documents are required to sell gold?",
    answer: "To comply with legal regulations, please bring a valid government-issued photo ID (such as Aadhaar, PAN Card, Voter ID, or Passport). An original purchase invoice is helpful but not strictly required."
  },
  {
    question: "How quickly will I receive my payment?",
    answer: "Instantly. Once the evaluation is complete and you accept our offer, we process the payment within 15 minutes. You can choose to receive it via instant bank transfer (IMPS/RTGS/NEFT) or cash (within statutory limits)."
  },
  {
    question: "Can you help me release pledged gold from banks?",
    answer: "Yes, we specialize in releasing pledged gold. Our team will accompany you to your bank or pawnbroker, clear your loan principal and interest, evaluate the released gold, and pay you the remaining market value."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-[0.8fr_1fr] gap-16 lg:gap-24">
        <div data-reveal>
          <span className="eyebrow">Common Questions</span>
          <h2 className="display-font mt-6 text-[clamp(2.8rem,5vw,4.5rem)] leading-[0.9] font-medium tracking-tight text-[#30000b] mb-8">
            Clarity before <br/><em>you sell.</em>
          </h2>
          <p className="text-[#77776f] text-base leading-relaxed max-w-sm">We believe in complete transparency. If you have any other questions, our team is always ready to talk.</p>
          <div className="mt-12 p-8 sm:p-10 bg-[#fbf8f2] border border-[#30000b]/5 shadow-sm">
            <h4 className="font-bold text-xl text-[#30000b] mb-3">Still unsure?</h4>
            <p className="text-[0.92rem] text-[#77776f] mb-8 leading-relaxed">Drop by our Gandhipuram lounge or call us for a free consultation.</p>
            <a href="tel:+919514415588" className="button-gold inline-flex">Call +91 95144 15588</a>
          </div>
        </div>

        <div className="space-y-4" data-stagger>
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              data-stagger-item
              className={`border-b border-black/10 pb-4 transition-all ${openIndex === idx ? "pt-4" : "pt-4"}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex items-center justify-between text-left group"
              >
                <h3 className={`font-bold text-lg transition-colors pr-6 ${openIndex === idx ? "text-[#790019]" : "text-[#30000b] group-hover:text-[#790019]"}`}>
                  {faq.question}
                </h3>
                <span className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${openIndex === idx ? "bg-[#790019] text-white border-[#790019]" : "bg-transparent text-[#30000b] border-black/20"}`}>
                  {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="text-[#77776f] leading-relaxed pb-4 pr-10">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
