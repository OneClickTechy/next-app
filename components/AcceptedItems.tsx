import { Diamond, Coins, Link2, ShieldAlert } from "lucide-react";
import SectionTitle from "./SectionTitle";

const items = [
  {
    icon: Diamond,
    title: "Old Gold Jewellery",
    desc: "Chains, bangles, rings, necklaces, and ancestral temple jewellery in any condition."
  },
  {
    icon: Link2,
    title: "Broken Gold",
    desc: "Damaged ornaments, single earrings, tangled chains, or scrap gold."
  },
  {
    icon: Coins,
    title: "Gold Coins & Bullion",
    desc: "24K or 22K gold coins, bars, and bullion from any bank or jeweller."
  },
  {
    icon: ShieldAlert,
    title: "Pledged Gold",
    desc: "Gold pledged with banks, Muthoot, Manappuram, or local pawnbrokers."
  }
];

export default function AcceptedItems() {
  return (
    <section className="py-24 px-5 bg-white border-y border-black/5">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-16 lg:gap-24 items-center">
          <div data-reveal>
            <SectionTitle 
              eyebrow="What We Accept" 
              title="We buy all forms of gold." 
              description="Whether it is an inherited piece, a broken bangle, or an investment coin, we evaluate all types of gold instantly and offer the best market value."
            />
            <p className="mt-8 text-[0.95rem] leading-relaxed text-[#77776f] border-l border-[#f4bf2f] pl-5 max-w-md">
              Our advanced German XRF laser technology accurately tests your gold regardless of its age or condition, ensuring you get paid for every milligram of purity.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4" data-stagger>
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div data-stagger-item key={idx} className="group p-8 sm:p-10 rounded-sm bg-[#fbf8f2] border border-black/5 transition-colors hover:bg-[#30000b] hover:text-white">
                  <div className="w-14 h-14 rounded-sm bg-white flex items-center justify-center text-[#790019] mb-8 group-hover:bg-[#f4bf2f] group-hover:text-[#30000b] transition-colors shadow-sm">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-xl mb-3 group-hover:text-[#f4bf2f] transition-colors">{item.title}</h4>
                  <p className="text-[0.92rem] text-[#77776f] group-hover:text-white/70 transition-colors leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
