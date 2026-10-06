"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionTitle from "./SectionTitle";

const faqs = [
  {
    question: "How do you evaluate the purity of my gold? (என் தங்கத்தின் தூய்மையை எப்படி மதிப்பிடுவீர்கள்?)",
    answer: "We use state-of-the-art German XRF laser spectrometers. This process is 100% non-destructive and highly accurate, allowing us to determine the exact purity of your gold right in front of you.\n\nநாங்கள் அதிநவீன ஜெர்மன் XRF லேசர் ஸ்பெக்ட்ரோமீட்டர்களைப் பயன்படுத்துகிறோம். இந்த செயல்முறை 100% சேதமற்றது மற்றும் மிகவும் துல்லியமானது, உங்கள் தங்கத்தின் சரியான தூய்மையை உங்கள் கண்முன்னே தீர்மானிக்க அனுமதிக்கிறது."
  },
  {
    question: "Do you deduct any melting charges? (உருக்கும் கட்டணங்கள் ஏதேனும் கழிக்கப்படுமா?)",
    answer: "No, we have a strict 0.0% melting deduction policy. You get paid for the exact weight and purity of your gold based on the live market rates in Coimbatore.\n\nஇல்லை, எங்களிடம் கடுமையான 0.0% உருக்கும் கழித்தல் கொள்கை உள்ளது. கோயம்புத்தூரில் உள்ள நேரடி சந்தை விலையின் அடிப்படையில் உங்கள் தங்கத்தின் சரியான எடை மற்றும் தூய்மைக்கு நீங்கள் பணம் பெறுவீர்கள்."
  },
  {
    question: "What documents are required to sell gold? (தங்கத்தை விற்க என்ன ஆவணங்கள் தேவை?)",
    answer: "To comply with legal regulations, please bring a valid government-issued photo ID (such as Aadhaar, PAN Card, Voter ID, or Passport). An original purchase invoice is helpful but not strictly required.\n\nசட்ட விதிமுறைகளுக்கு இணங்க, தயவுசெய்து செல்லுபடியாகும் அரசாங்கத்தால் வழங்கப்பட்ட புகைப்பட ஐடியை (ஆதார், பான் கார்டு, வாக்காளர் அடையாள அட்டை அல்லது பாஸ்போர்ட்) கொண்டு வாருங்கள். அசல் கொள்முதல் விலைப்பட்டியல் பயனுள்ளதாக இருக்கும் ஆனால் கண்டிப்பாக தேவையில்லை."
  },
  {
    question: "How quickly will I receive my payment? (எனது பணம் எவ்வளவு விரைவில் கிடைக்கும்?)",
    answer: "Instantly. Once the evaluation is complete and you accept our offer, we process the payment within 15 minutes. You can choose to receive it via instant bank transfer (IMPS/RTGS/NEFT) or cash (within statutory limits).\n\nஉடனடியாக. மதிப்பீடு முடிந்து எங்கள் சலுகையை நீங்கள் ஏற்றவுடன், 15 நிமிடங்களுக்குள் நாங்கள் கட்டணத்தை செயல்படுத்துகிறோம். உடனடி வங்கி பரிமாற்றம் (IMPS/RTGS/NEFT) அல்லது பணம் (சட்டப்பூர்வ வரம்புகளுக்குள்) மூலம் நீங்கள் அதைப் பெற தேர்வு செய்யலாம்."
  },
  {
    question: "Can you help me release pledged gold from banks? (வங்கிகளிலிருந்து அடகு வைக்கப்பட்ட தங்கத்தை மீட்க உதவ முடியுமா?)",
    answer: "Yes, we specialize in releasing pledged gold. Our team will accompany you to your bank or pawnbroker, clear your loan principal and interest, evaluate the released gold, and pay you the remaining market value.\n\nஆம், அடகு வைக்கப்பட்ட தங்கத்தை மீட்பதில் நாங்கள் நிபுணத்துவம் பெற்றுள்ளோம். எங்கள் குழு உங்கள் வங்கி அல்லது அடகு கடைக்கு உங்களுடன் வந்து, உங்கள் கடன் அசல் மற்றும் வட்டித் தொகையை செலுத்தி, மீட்கப்பட்ட தங்கத்தை மதிப்பீடு செய்து, மீதமுள்ள சந்தை மதிப்பை உங்களுக்கு வழங்கும்."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-[0.8fr_1fr] gap-16 lg:gap-24">
        <div data-reveal>
          <span className="eyebrow">Common Questions (பொதுவான கேள்விகள்)</span>
          <h2 className="display-font mt-6 text-[clamp(2.8rem,5vw,4.5rem)] leading-[0.9] font-medium tracking-tight text-[#30000b] mb-8">
            Clarity before <br/><em>you sell.</em><br/>
            <span className="text-[clamp(1.5rem,2.5vw,2.5rem)] text-[#77776f] mt-4 block leading-tight">
              நீங்கள் விற்பதற்கு முன் தெளிவு.
            </span>
          </h2>
          <p className="text-[#77776f] text-base leading-relaxed max-w-sm">We believe in complete transparency. If you have any other questions, our team is always ready to talk.<br/><br/>நாங்கள் முழு வெளிப்படைத்தன்மையை நம்புகிறோம். உங்களுக்கு வேறு ஏதேனும் கேள்விகள் இருந்தால், எங்கள் குழு எப்போதும் பேசத் தயாராக உள்ளது.</p>
          <div className="mt-12 p-8 sm:p-10 bg-[#fbf8f2] border border-[#30000b]/5 shadow-sm">
            <h4 className="font-bold text-xl text-[#30000b] mb-3">Still unsure? (இன்னும் உறுதியாக தெரியவில்லையா?)</h4>
            <p className="text-[0.92rem] text-[#77776f] mb-8 leading-relaxed">Drop by our Gandhipuram lounge or call us for a free consultation.<br/><br/>எங்கள் காந்திபுரம் ஓய்வறைக்கு வாருங்கள் அல்லது இலவச ஆலோசனைக்கு எங்களை அழைக்கவும்.</p>
            <a href="tel:+919514415588" className="button-gold inline-flex">Call (அழைக்க) +91 95144 15588</a>
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
                <p className="text-[#77776f] leading-relaxed pb-4 pr-10 whitespace-pre-wrap">
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
