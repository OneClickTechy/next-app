import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Banknote, Gem, Phone, ShieldCheck, Sparkles, Smartphone } from "lucide-react";
import AnimatedStat from "@/components/AnimatedStat";
import IntroCarousel from "@/components/IntroCarousel";
import GoldCalculator from "@/components/GoldCalculator";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import AcceptedItems from "@/components/AcceptedItems";
import type { Metadata } from 'next';
import { serviceItems, site } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Best Old Gold Buyers in Coimbatore | Cash for Gold - MG Gold Mart',
  description: 'Looking for the best gold buyer near me? MG Gold Mart in Coimbatore offers instant cash for gold, live market rates, and pledged gold release services.',
  keywords: ["best gold buyer near me", "cash for gold shop in Coimbatore", "highest price for second hand gold", "old gold buyers Coimbatore", "sell gold online"],
  alternates: {
    canonical: 'https://mggoldmart.com/',
  },
  openGraph: {
    title: 'Best Old Gold Buyers in Coimbatore | MG Gold Mart',
    description: 'Looking for the best gold buyer near me? MG Gold Mart in Coimbatore offers instant cash for gold, live market rates, and pledged gold release services.',
    url: 'https://mggoldmart.com/',
    siteName: 'MG Gold Mart',
    images: [{ url: '/assets/images/about-us.jpg' }],
    type: 'website',
  },
};

const benefits = [
  { icon: ShieldCheck, title: "Every step in view (ஒவ்வொரு படியும் உங்கள் கண்முன்)", text: "We explain the assessment as it happens. Your gold stays with you and in sight. (மதிப்பீட்டை நாங்கள் தெளிவாக விளக்குகிறோம். உங்கள் தங்கம் உங்கள் முன்னிலையிலேயே பரிசோதிக்கப்படும்.)" },
  { icon: Gem, title: "A value you understand (தெளிவான மதிப்பீடு)", text: "Know how weight, purity and the day’s market shape your offer. (எடை, தரம் மற்றும் இன்றைய சந்தை விலை உங்கள் தங்கத்தை எவ்வாறு மதிப்பிடுகிறது என்பதை அறிந்து கொள்ளுங்கள்.)" },
  { icon: Banknote, title: "Your decision, always (உங்கள் முடிவே இறுதியானது)", text: "Take your time. There is no pressure to accept an offer. (நிதானமாக முடிவெடுங்கள். எங்கள் சலுகையை ஏற்க எந்த கட்டாயமும் இல்லை.)" },
];

const process = [
  ["01", "Come as you are (நேரடியாக வாருங்கள்)", "Bring your jewellery to our Gandhipuram store. No appointment needed. (உங்கள் நகைகளை எங்கள் காந்திபுரம் கிளைக்கு கொண்டு வாருங்கள். முன் அனுமதி தேவையில்லை.)"],
  ["02", "See it clearly (தெளிவாக பாருங்கள்)", "We assess your gold in front of you and talk through the details. (உங்கள் கண் முன்னே தங்கத்தை மதிப்பிட்டு, விவரங்களை தெளிவாக விளக்குகிறோம்.)"],
  ["03", "Choose your next step (அடுத்த கட்டத்தை முடிவு செய்யுங்கள்)", "Accept the offer and arrange payment, or leave with no obligation. (மதிப்பீட்டை ஏற்று பணத்தைப் பெறுங்கள், அல்லது எந்த கட்டாயமும் இன்றி நகைகளை திரும்பப் பெற்றுச் செல்லுங்கள்.)"],
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I find the best gold buyer near me in Coimbatore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MG Gold Mart is located in Gandhipuram, Coimbatore. We are trusted old gold buyers offering instant cash for gold at the highest price for second hand gold."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer the highest price for second hand gold?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we evaluate your gold transparently based on live market rates to ensure you get the highest price for your second-hand gold jewelry."
        }
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section data-home-hero className="hero-home">
        {/* ambient background */}
        <div className="hero-home-bg" aria-hidden="true">
          <span className="hero-orb hero-orb-a" />
          <span className="hero-orb hero-orb-b" />
          <span className="hero-grid" />
        </div>

        <div className="hero-home-inner">
          <div className="hero-copy">
            <p data-hero-kicker className="hero-kicker">
              <span aria-hidden="true" /> Trusted gold buyers · Coimbatore
            </p>

            <h1 className="hero-title display-font">
              <span className="hero-title-line">
                <span data-hero-line>Gold,</span>
              </span>
              <span className="hero-title-line">
                <span data-hero-line className="hero-title-italic">with a new purpose.</span>
              </span>
            </h1>

            <p data-hero-copy className="hero-description text-lg">
              On-the-spot cash for old gold, with an honest valuation you can see. 
              
              <br/><br/>
              Need to release pledged gold? Let&apos;s talk.
              
            </p>

            <div className="hero-actions">
              <a data-hero-action href={`tel:${site.phone}`} className="button-gold">
                <Phone size={16} aria-hidden="true" /> Call {site.displayPhone}
              </a>
              <Link data-hero-action href="/sell-used-gold/" className="hero-text-link">
                Explore gold services <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            {/* orbit ring */}
            <svg className="hero-ring" viewBox="0 0 200 200" aria-hidden="true">
              <circle cx="100" cy="100" r="98" />
              <circle className="hero-ring-dot" cx="100" cy="2" r="3" />
            </svg>

            {/* offset outline */}
            <svg className="hero-gem-outline" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="22,0 78,0 100,32 50,100 0,32" pathLength={1} />
            </svg>

            <div className="hero-gem">
              <div data-hero-image className="hero-home-image">
                <Image
                  src="/assets/images/main-slider/image-1.jpg"
                  alt="A hand offering gold jewellery for a clear valuation"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="hero-home-shade" aria-hidden="true" />

              {/* facets */}
              <svg className="hero-facets" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="22,0 50,0 35,32" />
                <polygon points="50,0 78,0 65,32" />
                <polygon points="35,32 65,32 50,100" />
                <polygon points="0,32 35,32 50,100" />
                <polygon points="65,32 100,32 50,100" />
                <path d="M0 32 H100 M22 0 L35 32 M78 0 L65 32 M50 0 L35 32 M50 0 L65 32 M35 32 L50 100 M65 32 L50 100 M50 32 V100" />
              </svg>
            </div>
          </div>

          <a data-hero-note href="#our-services" className="hero-scroll-note">
            <span>Scroll to discover</span>
            <ArrowDown size={15} aria-hidden="true" />
          </a>

          {/* <span className="hero-index" aria-hidden="true">
            11°00&apos;59.4&quot;N&nbsp; 76°58&apos;18.5&quot;E
          </span> */}
        </div>
      </section>

      <div className="ticker" aria-label="Gold buying in Coimbatore">
        <div className="ticker-track">
          {[...Array(4)].map((_, copy) => (
            <span key={copy} aria-hidden={copy !== 0}>
              OLD GOLD, NEW POSSIBILITIES (பழைய தங்கம், புதிய வாய்ப்புகள்) <i>✳</i> HONEST VALUATION (நேர்மையான மதிப்பீடு) <i>✳</i> INSTANT CASH (உடனடி பணம்) <i>✳</i> COIMBATORE, TAMIL NADU <i>✳</i>
            </span>
          ))}
        </div>
      </div>

      <IntroCarousel />

      <section id="our-services" className="services-editorial">
        <div className="services-heading">
          <div data-reveal>
            <span className="eyebrow">What brings you in?</span>
            <h2 className="display-font">A good next step<br /><em>starts right here.</em></h2>
          </div>
          <p data-reveal>
            Four core services. One thing they share: a clear process, and space for you to decide.
            <br/><span className="text-[#a09e90]">நான்கு முக்கிய சேவைகள். அவை அனைத்திலும் உள்ளது: தெளிவான செயல்முறை மற்றும் நீங்கள் முடிவெடுக்கத் தேவையான நேரம்.</span>
          </p>
        </div>
        <div data-stagger className="service-editorial-grid">
          {serviceItems.map((item, index) => {
            const Icon = index === 0 ? Sparkles : index === 1 ? Banknote : index === 2 ? ShieldCheck : Smartphone;
            return (
              <a data-stagger-item key={item.href} href={item.href} className={`editorial-service editorial-service-${index + 1}`}>
                <div className="editorial-service-image">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
                  <span className="editorial-service-index">0{index + 1}</span>
                  <span className="editorial-service-arrow"><ArrowUpRight size={19} /></span>
                </div>
                <div className="editorial-service-meta">
                  <span className="editorial-service-icon"><Icon size={16} /></span>
                  <span className="editorial-service-label">{item.title}</span>
                </div>
                <p>{item.description}</p>
              </a>
            );
          })}
        </div>
      </section>

      <AcceptedItems />

      <section className="trust-editorial">
        <div className="trust-image-wrap" data-reveal>
          <Image src="/assets/images/about-us2.jpg" alt="Gold being carefully examined at MG Gold Mart" fill sizes="(max-width: 900px) 100vw, 48vw" className="object-cover" data-parallax />
          <span className="trust-image-caption"><span>IN GOOD HANDS</span><span>EST. COIMBATORE</span></span>
        </div>
        <div className="trust-content">
          <span data-reveal className="eyebrow eyebrow-light">A promise you can see</span>
          <h2 data-reveal className="display-font">No mystery.<br /><em>No pressure.<br />Just honest gold.</em></h2>
          <p data-reveal className="trust-lede">Selling something precious should feel personal — not like a transaction you need to rush through.</p>
          <div data-stagger className="trust-list">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <div data-stagger-item className="trust-item" key={title}>
                <span className="trust-item-no">0{index + 1}</span>
                <Icon size={18} strokeWidth={1.5} className="trust-item-icon" />
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
          <a data-reveal href="/about-us/" className="trust-link">Get to know us <ArrowRight size={16} /></a>
        </div>
      </section>

      <GoldCalculator />

      <section className="process-editorial">
        <div className="process-header">
          <div data-reveal><span className="eyebrow">Nothing complicated</span><h2 className="display-font">Three steps.<br /><em>That&apos;s the whole story.</em></h2></div>
          <p data-reveal>We&apos;ll talk you through the process before we begin. You&apos;re in control from the first hello.</p>
        </div>
        <div data-stagger className="process-list">
          {process.map(([number, title, text]) => (
            <article data-stagger-item className="process-step" key={number}>
              <span className="process-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowUpRight className="process-arrow" size={19} />
            </article>
          ))}
        </div>
      </section>

      <Testimonials />

      <section className="numbers-editorial">
        <div data-reveal className="numbers-heading">
          <span className="eyebrow eyebrow-light">Rooted in Coimbatore</span>
          <h2 className="display-font">Built on good<br /><em>relationships.</em></h2>
          <p>Our favourite measure of success is a customer who leaves feeling confident in their decision.</p>
        </div>
        <div data-stagger className="numbers-grid">
          {([[11, "", "Branches (கிளைகள்)"], [10500, "+", "Happy customers (மகிழ்ச்சியான வாடிக்கையாளர்கள்)"], [6, "+", "Years in Coimbatore (கோயம்புத்தூரில் ஆண்டுகள்)"]] as const).map(([value, suffix, label], index) => (
            <div data-stagger-item className="number-item" key={label}>
              <span className="number-index">0{index + 1}</span>
              <p className="number-value display-font"><AnimatedStat value={value} suffix={suffix} /></p>
              <p className="number-label">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection />

      <section className="home-cta-wrap">
        <div className="home-cta">
          <div className="home-cta-visual home-cta-gold">
            <Image src="/assets/images/cta-gold.webp" alt="Hand holding gold jewellery" fill sizes="(max-width: 900px) 50vw, 20vw" className="object-contain" />
          </div>
          <div className="home-cta-copy" data-reveal>
            <span className="eyebrow eyebrow-light">A conversation costs nothing</span>
            <h2 className="display-font">Good things begin with <em>a clear conversation.</em></h2>
            <p>Thinking of selling old gold or releasing a pledge? Our team is here to help you understand your options, with no pressure to decide.</p>
            <div className="home-cta-actions">
              <a href={`tel:${site.phone}`} className="button-gold"><Phone size={16} /> Call {site.displayPhone}</a>
              <a href="/contact-us/" className="hero-text-link">Get in touch <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="home-cta-visual home-cta-cash">
            <Image src="/assets/images/cta-cash.webp" alt="Hand holding Indian currency notes" fill sizes="(max-width: 900px) 50vw, 20vw" className="object-contain" />
          </div>
          <span className="home-cta-signoff">YOUR GOLD. YOUR CHOICE. OUR PROMISE.</span>
        </div>
      </section>
    </main>
  );
}
