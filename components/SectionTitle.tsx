type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
};

export default function SectionTitle({ eyebrow, title, description, light = false, centered = false }: SectionTitleProps) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-[800px]`} data-reveal>
      <span className={`eyebrow tracking-widest ${light ? "!text-[#f4bf2f]" : ""}`}>{eyebrow}</span>
      <h2 className={`display-font mt-6 text-[clamp(2.5rem,4vw,3.8rem)] leading-[0.95] tracking-tight font-medium ${light ? "text-white" : "text-[#30000b]"}`}>{title}</h2>
      {description && <p className={`mt-6 text-[1.05rem] leading-relaxed ${centered ? "mx-auto" : ""} max-w-[600px] ${light ? "text-white/60" : "text-[#77776f]"}`}>{description}</p>}
    </div>
  );
}
