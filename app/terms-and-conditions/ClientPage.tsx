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
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">1. Introduction (அறிமுகம்)</h2>
            <p>
              Welcome to MG Gold Mart. By accessing our website, visiting our store in Coimbatore, or utilizing our gold valuation and purchasing services, you agree to be bound by the following Terms and Conditions. These terms ensure a secure, transparent, and legally compliant transaction for both parties.
              <br/><br/>MG கோல்ட் மார்ட்டுக்கு வரவேற்கிறோம். எங்கள் வலைத்தளத்தை அணுகுவதன் மூலமாகவோ, கோயம்புத்தூரில் உள்ள எங்கள் கடைக்கு வருகை தருவதன் மூலமாகவோ அல்லது எங்கள் தங்க மதிப்பீடு மற்றும் வாங்குதல் சேவைகளைப் பயன்படுத்துவதன் மூலமாகவோ, பின்வரும் விதிமுறைகள் மற்றும் நிபந்தனைகளுக்கு கட்டுப்பட நீங்கள் ஒப்புக்கொள்கிறீர்கள். இந்த விதிமுறைகள் இரு தரப்பினருக்கும் பாதுகாப்பான, வெளிப்படையான மற்றும் சட்டபூர்வமாக இணக்கமான பரிவர்த்தனையை உறுதி செய்கின்றன.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">2. Eligibility (தகுதி)</h2>
            <p>
              You must be at least 18 years of age to sell gold or other precious metals to MG Gold Mart. By initiating a transaction, you represent and warrant that you are the lawful owner of the items being sold, or have the legal authorization to sell them. We strictly prohibit the sale of stolen or illegally acquired goods.
              <br/><br/>MG கோல்ட் மார்ட்டில் தங்கம் அல்லது பிற விலைமதிப்பற்ற உலோகங்களை விற்க உங்களுக்கு குறைந்தது 18 வயது இருக்க வேண்டும். ஒரு பரிவர்த்தனையைத் தொடங்குவதன் மூலம், விற்கப்படும் பொருட்களின் சட்டபூர்வமான உரிமையாளர் நீங்கள் என்பதை உறுதிப்படுத்துகிறீர்கள் அல்லது அவற்றை விற்க சட்டபூர்வமான அங்கீகாரம் உள்ளது. திருடப்பட்ட அல்லது சட்டவிரோதமாகப் பெறப்பட்ட பொருட்களை விற்பதை நாங்கள் கண்டிப்பாகத் தடை செய்கிறோம்.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">3. Valuation and Pricing (மதிப்பீடு மற்றும் விலை நிர்ணயம்)</h2>
            <p>
              Our valuation process is based on live market rates for gold, coupled with advanced and certified testing methods (such as XRF spectroscopy) to determine the exact purity and weight of your items. The initial quote provided online or over the phone is an estimate. The final price is determined only after a physical evaluation at our premises. We maintain a 0% melting deduction policy, meaning you are paid for the pure gold content exactly as tested.
              <br/><br/>எங்கள் மதிப்பீட்டு செயல்முறையானது தங்கத்திற்கான நேரடி சந்தை விலைகளை அடிப்படையாகக் கொண்டது, அத்துடன் உங்கள் பொருட்களின் சரியான தூய்மை மற்றும் எடையை தீர்மானிக்க மேம்பட்ட மற்றும் சான்றளிக்கப்பட்ட சோதனை முறைகளுடன் (XRF ஸ்பெக்ட்ரோஸ்கோபி போன்றவை) இணைக்கப்பட்டுள்ளது. ஆன்லைனில் அல்லது தொலைபேசியில் வழங்கப்படும் ஆரம்ப மேற்கோள் ஒரு மதிப்பீடாகும். எங்கள் வளாகத்தில் உடல் மதிப்பீட்டிற்குப் பிறகுதான் இறுதி விலை தீர்மானிக்கப்படுகிறது. நாங்கள் 0% உருக்கும் கழித்தல் கொள்கையை பராமரிக்கிறோம், அதாவது சோதிக்கப்பட்டபடியே தூய தங்க உள்ளடக்கத்திற்கு உங்களுக்கு பணம் செலுத்தப்படுகிறது.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">4. Verification & Documentation (சரிபார்ப்பு மற்றும் ஆவணங்கள்)</h2>
            <p>
              To comply with government regulations and prevent fraudulent activities, all sellers must provide valid government-issued photo identification (such as Aadhaar, PAN card, or Driving License) along with proof of address. We may also request the original purchase invoice of the jewellery, if available. We reserve the right to photograph the items and the seller, and to record the transaction details.
              <br/><br/>அரசாங்க விதிமுறைகளுக்கு இணங்கவும், மோசடி நடவடிக்கைகளைத் தடுக்கவும், அனைத்து விற்பனையாளர்களும் செல்லுபடியாகும் அரசாங்கத்தால் வழங்கப்பட்ட புகைப்பட அடையாளம் (ஆதார், பான் கார்டு அல்லது ஓட்டுநர் உரிமம் போன்றவை) மற்றும் முகவரிச் சான்றை வழங்க வேண்டும். நகைகளின் அசல் கொள்முதல் விலைப்பட்டியல் கிடைத்தால் அதையும் நாங்கள் கோரலாம். பொருட்கள் மற்றும் விற்பனையாளரைப் புகைப்படம் எடுக்கவும், பரிவர்த்தனை விவரங்களைப் பதிவு செய்யவும் எங்களுக்கு உரிமை உள்ளது.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">5. Payment Terms (கட்டண விதிமுறைகள்)</h2>
            <p>
              Payments for accepted transactions are made instantly. We offer immediate cash payments (subject to legal limits) or direct bank transfers (IMPS/NEFT/RTGS). Once a transaction is completed and payment is disbursed, the sale is considered final, and the items cannot be returned or reclaimed.
              <br/><br/>ஏற்றுக்கொள்ளப்பட்ட பரிவர்த்தனைகளுக்கான பணம் உடனடியாக செலுத்தப்படுகிறது. நாங்கள் உடனடி ரொக்கப் பணம் (சட்ட வரம்புகளுக்கு உட்பட்டது) அல்லது நேரடி வங்கிப் பரிமாற்றங்களை (IMPS/NEFT/RTGS) வழங்குகிறோம். ஒரு பரிவர்த்தனை முடிந்து பணம் வழங்கப்பட்டவுடன், விற்பனை இறுதியானதாகக் கருதப்படுகிறது, மேலும் பொருட்களைத் திருப்பித் தரவோ அல்லது திரும்பப் பெறவோ முடியாது.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">6. Right to Refuse Service (சேவையை மறுப்பதற்கான உரிமை)</h2>
            <p>
              MG Gold Mart reserves the right to refuse service to anyone, at our sole discretion, without providing a reason. This includes situations where we suspect the items may be stolen, the ownership is disputed, or the identification provided is unsatisfactory.
              <br/><br/>காரணம் கூறாமல், எங்கள் சொந்த விருப்புரிமையின்படி, யாருக்கும் சேவையை மறுக்கும் உரிமையை MG கோல்ட் மார்ட் கொண்டுள்ளது. பொருட்கள் திருடப்பட்டிருக்கலாம் என நாங்கள் சந்தேகிக்கும் சூழ்நிலைகள், உரிமை சர்ச்சைக்குரியது அல்லது வழங்கப்பட்ட அடையாளம் திருப்திகரமாக இல்லை ஆகியவை இதில் அடங்கும்.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">7. Amendments (திருத்தங்கள்)</h2>
            <p>
              We reserve the right to update or modify these Terms and Conditions at any time without prior notice. The updated terms will be posted on this website and will be effective immediately. Your continued use of our services constitutes your acceptance of any such changes.
              <br/><br/>முன்னறிவிப்பின்றி எந்த நேரத்திலும் இந்த விதிமுறைகள் மற்றும் நிபந்தனைகளைப் புதுப்பிக்கவோ அல்லது மாற்றவோ எங்களுக்கு உரிமை உள்ளது. புதுப்பிக்கப்பட்ட விதிமுறைகள் இந்த வலைத்தளத்தில் வெளியிடப்படும் மற்றும் உடனடியாக நடைமுறைக்கு வரும். எங்கள் சேவைகளை நீங்கள் தொடர்ந்து பயன்படுத்துவது அத்தகைய எந்தவொரு மாற்றங்களையும் நீங்கள் ஏற்றுக்கொள்வதைக் குறிக்கிறது.
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
