import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import PageMasthead from "@/components/PageMasthead";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Gallery", "A look inside MG Gold Mart and our gold buying services in Coimbatore.", "/gallery/", "/assets/images/gallery10.jpg");

const galleryImages = Array.from({ length: 11 }, (_, index) => ({
  src: `/assets/images/gallery${index + 1}.jpg`,
  alt: `MG Gold Mart gallery photograph ${index + 1}`,
}));

export default function GalleryPage() {
  return (
    <main>
      <PageMasthead
        eyebrow="Our world, in pictures"
        title="A closer look at MG."
        description="A glimpse at our store, our people and the service we are proud to offer."
        image="/assets/images/gallery10.jpg"
        imageAlt="MG Gold Mart gallery"
        index="GALLERY"
      />
      <section className="gallery-section section-pad">
        <div className="mx-auto max-w-[1220px]">
          <SectionTitle eyebrow="Inside MG Gold Mart" title="A little more of what makes us, us." description="Explore moments from our store and gold buying services." />
          <div data-stagger className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryImages.map((image, index) => (
              <figure key={image.src} data-stagger-item className={`gallery-card gallery-card-${index + 1} mb-4 break-inside-avoid overflow-hidden bg-[#e9e3d4]`}>
                <Image src={image.src} alt={image.alt} width={780} height={index % 3 === 0 ? 940 : 700} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="h-auto w-full object-cover" />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
