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
    <main>
      <PageMasthead eyebrow={eyebrow} title={title} description={intro} image={image} imageAlt={imageAlt} index={pageIndex} />
      <section className="section-pad">
        <div className="mx-auto grid max-w-[1220px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div data-reveal className="service-feature-image relative min-h-[390px] overflow-hidden bg-[#e9e3d4] sm:min-h-[500px]">
            <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute bottom-5 left-5 right-5 bg-[#30000b]/90 p-5 text-white backdrop-blur-sm sm:bottom-8 sm:left-8 sm:right-8">
              <div className="flex items-start gap-3"><ShieldCheck className="mt-0.5 shrink-0 text-[#f4bf2f]" size={21} /><p className="text-sm leading-6 text-white/75">Your jewellery stays in view throughout the evaluation. No hidden steps, no pressure to sell.</p></div>
            </div>
          </div>
          <div data-reveal>
            <SectionTitle eyebrow="A better way to sell" title="Know what your gold is worth." description={intro} />
            <ul className="mt-8 space-y-4">
              {points.map((point) => <li key={point} className="flex items-start gap-3 text-sm leading-6 text-[#56574f]"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fff0bb] text-[#790019]"><Check size={13} /></span>{point}</li>)}
            </ul>
            <a href={`tel:${site.phone}`} className="button-gold mt-9">Call {site.displayPhone} <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>
      <section className="bg-[#f0ede4] section-pad">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div data-reveal>
            <span className="eyebrow">Your visit, made simple</span>
            <h2 className="display-font mt-5 text-4xl font-bold leading-tight">{processTitle}</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#77776f]">{processDescription}</p>
          </div>
          <div data-stagger className="grid gap-3 sm:grid-cols-3">
            {[
              ["01", "Visit our store", "Bring your gold and any relevant pledge details."],
              ["02", "See the valuation", "We explain the evaluation and offer before you decide."],
              ["03", "Choose what works", "If you accept, receive payment through an available method."],
            ].map(([number, heading, text]) => (
              <div key={number} data-stagger-item className="border border-black/5 bg-white p-5">
                <span className="text-xs font-bold tracking-widest text-[#790019]">{number}</span><h3 className="mt-7 text-base font-bold">{heading}</h3><p className="mt-2 text-sm leading-6 text-[#77776f]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
