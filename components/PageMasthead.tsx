import Image from "next/image";
import { ArrowDown } from "lucide-react";

type PageMastheadProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  index: string;
};

export default function PageMasthead({ eyebrow, title, description, image, imageAlt, index }: PageMastheadProps) {
  return (
    <section className="page-masthead">
      <div className="page-masthead-inner">
        <div className="page-masthead-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="display-font">{title}</h1>
          <p>{description}</p>
          <div className="page-masthead-bottom">
            <span>{index} / MG GOLD MART</span>
            <ArrowDown size={16} />
          </div>
        </div>
        <div className="page-masthead-image" data-reveal>
          <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 800px) 100vw, 45vw" className="object-cover" data-parallax />
          <span className="page-masthead-image-caption">GANDHIPURAM · COIMBATORE</span>
        </div>
      </div>
    </section>
  );
}
