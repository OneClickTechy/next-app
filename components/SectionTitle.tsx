type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
};

export default function SectionTitle({ eyebrow, title, description, light = false, centered = false }: SectionTitleProps) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-[680px]`} data-reveal>
      <span className={`eyebrow ${light ? "!text-[#f4bf2f]" : ""}`}>{eyebrow}</span>
      <h2 className={`display-font mt-5 text-4xl font-bold leading-[1.08] sm:text-5xl ${light ? "text-white" : "text-[#30000b]"}`}>{title}</h2>
      {description && <p className={`mt-5 text-base leading-7 ${light ? "text-white/60" : "text-[#77776f]"}`}>{description}</p>}
    </div>
  );
}
