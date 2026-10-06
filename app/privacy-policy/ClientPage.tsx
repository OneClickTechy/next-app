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
            Legal (சட்டப்பூர்வமானவை)
          </span>
          <h1 className="policy-hero-title display-font text-[#30000b] text-[clamp(3.5rem,7vw,7rem)] leading-[0.85] font-medium tracking-tight mb-8">
            Privacy <br />
            <em className="text-[#77776f]">Policy</em><br/>
            <span className="text-[clamp(1.5rem,2.5vw,2.5rem)] text-[#77776f] mt-4 block leading-tight">
              தனியுரிமைக் கொள்கை
            </span>
          </h1>
          <p className="policy-hero-copy text-[#77776f] text-[1.2rem] leading-relaxed max-w-2xl mx-auto mb-12">
            Your trust is our most valuable asset. We are committed to protecting your personal information and ensuring your transactions are strictly confidential.
            <br/><br/>உங்கள் நம்பிக்கை எங்கள் மிகவும் மதிப்புமிக்க சொத்து. உங்கள் தனிப்பட்ட தகவல்களைப் பாதுகாப்பதற்கும் உங்கள் பரிவர்த்தனைகள் கண்டிப்பாக ரகசியமாக இருப்பதை உறுதி செய்வதற்கும் நாங்கள் கடமைப்பட்டுள்ளோம்.
          </p>
        </div>
      </section>

      {/* Content Area */}
      <section className="policy-content px-5 sm:px-10 lg:px-16 max-w-[900px] mx-auto py-20">
        <div className="space-y-12 text-[#4a4a44] text-[1.05rem] leading-loose">
          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">1. Information We Collect (நாங்கள் சேகரிக்கும் தகவல்கள்)</h2>
            <p>
              When you visit MG Gold Mart or use our services, we may collect personal identification information such as your name, phone number, email address, and physical address. During a transaction, we are required by law to collect copies of your government-issued ID and photographs of the items being sold. We also collect non-identifiable data when you browse our website to improve user experience.
              <br/><br/>நீங்கள் MG கோல்ட் மார்ட்டைப் பார்வையிடும்போது அல்லது எங்கள் சேவைகளைப் பயன்படுத்தும்போது, ​​உங்கள் பெயர், தொலைபேசி எண், மின்னஞ்சல் முகவரி மற்றும் உடல் முகவரி போன்ற தனிப்பட்ட அடையாளத் தகவல்களை நாங்கள் சேகரிக்கலாம். ஒரு பரிவர்த்தனையின் போது, ​​அரசாங்கத்தால் வழங்கப்பட்ட உங்கள் ஐடியின் நகல்கள் மற்றும் விற்கப்படும் பொருட்களின் புகைப்படங்களைச் சேகரிக்க சட்டப்படி நாங்கள் கடமைப்பட்டுள்ளோம். பயனர் அனுபவத்தை மேம்படுத்த எங்கள் இணையதளத்தில் நீங்கள் உலாவும்போது அடையாளம் காண முடியாத தரவையும் நாங்கள் சேகரிக்கிறோம்.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">2. How We Use Your Information (உங்கள் தகவலை நாங்கள் எவ்வாறு பயன்படுத்துகிறோம்)</h2>
            <p>
              The primary use of your personal information is to facilitate transactions, comply with legal and regulatory obligations, and ensure the security of both parties. We may also use your contact details to communicate with you regarding your valuation requests, updates on our services, or customer support inquiries.
              <br/><br/>உங்கள் தனிப்பட்ட தகவலின் முதன்மைப் பயன்பாடானது பரிவர்த்தனைகளை எளிதாக்குவது, சட்ட மற்றும் ஒழுங்குமுறை கடமைகளுக்கு இணங்குவது மற்றும் இரு தரப்பினரின் பாதுகாப்பையும் உறுதி செய்வதாகும். உங்கள் மதிப்பீட்டு கோரிக்கைகள், எங்கள் சேவைகளின் புதுப்பிப்புகள் அல்லது வாடிக்கையாளர் ஆதரவு விசாரணைகள் தொடர்பாக உங்களுடன் தொடர்புகொள்ள உங்கள் தொடர்பு விவரங்களையும் நாங்கள் பயன்படுத்தலாம்.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">3. Data Protection & Confidentiality (தரவு பாதுகாப்பு மற்றும் ரகசியத்தன்மை)</h2>
            <p>
              We implement robust physical, electronic, and managerial procedures to safeguard and secure the information we collect. Your transaction details are kept strictly confidential and are only accessible to authorized personnel. We understand the sensitive nature of selling gold, and we guarantee utmost discretion throughout the process.
              <br/><br/>நாங்கள் சேகரிக்கும் தகவல்களைப் பாதுகாக்க வலுவான உடல், மின்னணு மற்றும் நிர்வாக நடைமுறைகளை செயல்படுத்துகிறோம். உங்கள் பரிவர்த்தனை விவரங்கள் கண்டிப்பாக ரகசியமாக வைக்கப்பட்டு, அங்கீகரிக்கப்பட்ட பணியாளர்கள் மட்டுமே அணுக முடியும். தங்கத்தை விற்பதன் முக்கிய தன்மையை நாங்கள் புரிந்துகொள்கிறோம், மேலும் செயல்முறை முழுவதும் அதிகபட்ச விருப்புரிமைக்கு நாங்கள் உத்தரவாதம் அளிக்கிறோம்.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">4. Sharing Your Information (உங்கள் தகவலைப் பகிர்தல்)</h2>
            <p>
              MG Gold Mart does not sell, trade, or rent your personal information to third parties. We may only disclose your information to law enforcement agencies or regulatory bodies if required by law, or to trusted service providers who assist us in operating our business (subject to strict confidentiality agreements).
              <br/><br/>MG கோல்ட் மார்ட் உங்கள் தனிப்பட்ட தகவல்களை மூன்றாம் தரப்பினருக்கு விற்கவோ, வர்த்தகம் செய்யவோ அல்லது வாடகைக்கு விடவோ இல்லை. சட்டத்தால் தேவைப்பட்டால் மட்டுமே உங்கள் தகவலை சட்ட அமலாக்க முகவர் அல்லது ஒழுங்குமுறை அமைப்புகளுக்கு நாங்கள் வெளியிடலாம் அல்லது எங்கள் வணிகத்தை இயக்குவதில் எங்களுக்கு உதவும் நம்பகமான சேவை வழங்குநர்களுக்கு (கடுமையான ரகசியத்தன்மை ஒப்பந்தங்களுக்கு உட்பட்டு) வெளியிடலாம்.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">5. Cookies and Tracking (குக்கீகள் மற்றும் கண்காணிப்பு)</h2>
            <p>
              Our website may use "cookies" to enhance user experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent. Please note that disabling cookies may affect the functionality of certain parts of our website.
              <br/><br/>பயனர் அனுபவத்தை மேம்படுத்த எங்கள் இணையதளம் "குக்கீகளை" பயன்படுத்தலாம். குக்கீகளை நிராகரிக்க அல்லது குக்கீகள் அனுப்பப்படும்போது உங்களை எச்சரிக்க உங்கள் வலை உலாவியை அமைக்க நீங்கள் தேர்வு செய்யலாம். குக்கீகளை முடக்குவது எங்கள் வலைத்தளத்தின் சில பகுதிகளின் செயல்பாட்டை பாதிக்கலாம் என்பதை நினைவில் கொள்ளவும்.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">6. Your Rights (உங்கள் உரிமைகள்)</h2>
            <p>
              You have the right to request access to the personal information we hold about you and to ask for corrections if the information is inaccurate. If you have any concerns regarding your privacy or data, you may contact our customer support team for assistance.
              <br/><br/>உங்களைப் பற்றி நாங்கள் வைத்திருக்கும் தனிப்பட்ட தகவல்களை அணுகக் கோருவதற்கும், தகவல் தவறானதாக இருந்தால் திருத்தங்களைக் கேட்பதற்கும் உங்களுக்கு உரிமை உண்டு. உங்கள் தனியுரிமை அல்லது தரவு குறித்து ஏதேனும் கவலைகள் இருந்தால், உதவிக்கு எங்கள் வாடிக்கையாளர் ஆதரவுக் குழுவை நீங்கள் தொடர்பு கொள்ளலாம்.
            </p>
          </div>

          <div>
            <h2 className="text-[#30000b] text-2xl font-medium mb-4">7. Changes to This Policy (இந்த கொள்கையில் மாற்றங்கள்)</h2>
            <p>
              We reserve the right to update this Privacy Policy at our discretion. We encourage users to frequently check this page for any changes. By using our services, you acknowledge and agree that it is your responsibility to review this privacy policy periodically.
              <br/><br/>எங்கள் விருப்புரிமையின்படி இந்த தனியுரிமைக் கொள்கையைப் புதுப்பிக்கும் உரிமை எங்களுக்கு உள்ளது. ஏதேனும் மாற்றங்கள் உள்ளதா என இந்தப் பக்கத்தை அடிக்கடி சரிபார்க்க பயனர்களை ஊக்குவிக்கிறோம். எங்கள் சேவைகளைப் பயன்படுத்துவதன் மூலம், இந்த தனியுரிமைக் கொள்கையை அவ்வப்போது மதிப்பாய்வு செய்வது உங்கள் பொறுப்பு என்பதை நீங்கள் ஒப்புக்கொள்கிறீர்கள்.
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
