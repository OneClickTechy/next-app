import ServicePage from "@/components/ServicePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Release Pledged Gold in Coimbatore",
  "Talk to MG Gold Mart for guidance on releasing gold pledged with banks and pawnbrokers in Coimbatore.",
  "/relese-pledged-gold/",
  "/assets/images/pledged.jpg",
);

export default function ReleasePledgedGoldPage() {
  return (
    <ServicePage
      eyebrow="Release pledged gold"
      title="A helping hand with pledged gold."
      intro="If your gold is pledged with a bank or pawnbroker, understanding the next step can be difficult. Talk to our team about your situation and the options available to you."
      image="/assets/images/pledged.jpg"
      imageAlt="Pledged gold jewellery"
      points={[
        "Get a personal conversation about your pledged gold.",
        "Bring your pledge receipt and related documents when you visit.",
        "We explain any available options and associated terms clearly.",
        "You decide what works best for you, with no pressure.",
      ]}
      processTitle="Start with a conversation."
      processDescription="Bring your pledge details to our store so our team can understand your circumstances. Any release arrangement depends on the lender's terms and the details of your pledge."
      pageIndex="03"
    />
  );
}
