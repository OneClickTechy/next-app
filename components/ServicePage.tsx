import Image from "next/image";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import PageMasthead from "@/components/PageMasthead";
import { site } from "@/lib/site";

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  points: string[];
  processTitle: string;
  processDescription: string;
  pageIndex: string;
};

export default function ServicePage({ eyebrow, title, intro, image, imageAlt, points, processTitle, processDescription, pageIndex }: ServicePageProps) {
  return (
    <>
      <PageMasthead eyebrow={eyebrow} title={title} description={intro} image={image} imageAlt={imageAlt} index={pageIndex} />
      <section className="editorial-intro">
        <div className="editorial-intro-inner items-center">
          <div data-reveal className="service-feature-image relative min-h-[390px] overflow-hidden bg-[#e9e3d4] sm:min-h-[600px] w-full">
            <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover grayscale hover:grayscale-0 transition-all duration-[1.2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:scale-105" />
            <div className="absolute bottom-5 left-5 right-5 bg-[#30000b]/90 p-6 text-white backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 lg:max-w-md">
              <div className="flex items-start gap-4"><ShieldCheck className="mt-0.5 shrink-0 text-[#f4bf2f]" size={24} /><p className="text-sm leading-relaxed text-white/80">Your jewellery stays in view throughout the evaluation. No hidden steps, no pressure to sell.</p></div>
            </div>
          </div>
          <div data-reveal className="intro-copy py-10 lg:py-0">
            <span className="eyebrow">A better way to sell</span>
            <h2 className="display-font mt-6 text-[clamp(2.8rem,5vw,5rem)] leading-[0.9] font-medium tracking-tight text-[#30000b] mb-8">
              {title.split(' ').slice(0, -1).join(' ')} <br/><em>{title.split(' ').slice(-1)}</em>
            </h2>
            <p className="text-[#77776f] text-[1.05rem] leading-relaxed max-w-md mb-10">{intro}</p>
            <ul className="space-y-5" data-stagger>
              {points.map((point) => (
                <li key={point} data-stagger-item className="flex items-start gap-4 text-[0.92rem] leading-relaxed text-[#56574f] border-b border-black/5 pb-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f4bf2f]/20 text-[#790019]"><Check size={14} /></span>
                  {point}
                </li>
              ))}
            </ul>
            <a href={`tel:${site.phone}`} className="button-gold mt-12 inline-flex">Call {site.displayPhone} <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="process-editorial section-pad">
        <div className="process-header" data-reveal>
          <div>
            <span className="eyebrow">Your visit, made simple</span>
            <h2 className="display-font text-[#30000b]">{processTitle.split(' ').slice(0, -2).join(' ')} <em>{processTitle.split(' ').slice(-2).join(' ')}</em></h2>
          </div>
          <p>{processDescription}</p>
        </div>
        <div className="process-list" data-stagger>
          {[
            ["01", "Visit our store", "Bring your gold and any relevant pledge details."],
            ["02", "See the valuation", "We explain the evaluation and offer before you decide."],
            ["03", "Choose what works", "If you accept, receive payment through an available method."],
          ].map(([number, heading, text]) => (
            <div key={number} data-stagger-item className="process-step group">
              <span className="process-number">{number}</span>
              <h3 className="text-[#30000b] group-hover:text-[#790019] transition-colors">{heading}</h3>
              <p>{text}</p>
              <div className="justify-self-end process-arrow group-hover:translate-x-2 transition-transform duration-300"><ArrowRight size={20} /></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
