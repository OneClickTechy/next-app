import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageMasthead from "@/components/PageMasthead";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata(
  "Contact MG Gold Mart",
  "Get in touch with MG Gold Mart for gold valuation, instant cash and pledged gold assistance in Coimbatore.",
  "/contact-us/",
  "/assets/images/conatct-us.jpg",
);

export default function ContactPage() {
  return (
    <main>
      <PageMasthead
        eyebrow="We are here to help"
        title="Let’s talk gold."
        description="Have a question or want to plan a visit? Reach out to our Coimbatore team."
        image="/assets/images/conatct-us.jpg"
        imageAlt="Contact MG Gold Mart in Coimbatore"
        index="CONTACT"
      />

      <section className="contact-details-section section-pad">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-reveal>
            <span className="eyebrow">Contact details</span>
            <h2 className="display-font mt-5 text-4xl font-bold">Visit our Gandhipuram store.</h2>
            <p className="mt-4 text-sm leading-7 text-[#77776f]">Stop by during business hours or give us a call. We are happy to answer questions before your visit.</p>
            <div className="mt-8 space-y-5">
              <div className="flex gap-4 border-t border-black/10 pt-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff0bb] text-[#790019]"><MapPin size={19} /></span>
                <div><h3 className="text-sm font-bold">Our address</h3><p className="mt-1 text-sm leading-6 text-[#77776f]">{site.address}</p></div>
              </div>
              <div className="flex gap-4 border-t border-black/10 pt-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff0bb] text-[#790019]"><Phone size={18} /></span>
                <div><h3 className="text-sm font-bold">Call our team</h3><div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm text-[#77776f]">{site.phones.map((phone) => <a key={phone.href} href={phone.href} className="hover:text-[#790019]">{phone.label}</a>)}</div></div>
              </div>
              <div className="flex gap-4 border-t border-black/10 pt-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff0bb] text-[#790019]"><Mail size={18} /></span>
                <div><h3 className="text-sm font-bold">Email</h3><a href={`mailto:${site.email}`} className="mt-1 inline-block text-sm text-[#77776f] hover:text-[#790019]">{site.email}</a></div>
              </div>
            </div>
          </div>
          <div data-reveal className="contact-form-panel border border-black/5 bg-white p-6 sm:p-9">
            <span className="eyebrow">Send an enquiry</span>
            <h2 className="display-font mt-4 text-3xl font-bold">How can we help?</h2>
            <p className="mb-7 mt-2 text-sm leading-6 text-[#77776f]">Share a few details and your email app will prepare a message to our team.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="contact-map-section px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div><span className="eyebrow">Find us</span><h2 className="display-font mt-3 text-3xl font-bold">Coimbatore, Gandhipuram</h2></div>
            <a href="https://maps.google.com/?q=MG+Gold+Mart+Coimbatore" target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#790019]">Open in Google Maps ↗</a>
          </div>
          <div className="h-[360px] overflow-hidden border border-black/10 bg-white">
            <iframe title="Map to MG Gold Mart in Coimbatore" src={site.mapEmbed} className="h-full w-full grayscale hover:grayscale-0 transition-all duration-500" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </section>
    </main>
  );
}
