import type { Metadata } from 'next';
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: 'Release Pledged Gold from Bank | Pay Off Gold Loan - MG Gold Mart',
  description: 'Release pledged gold from bank or NBFCs easily. We help you pay off gold loan debts and release mortgage gold in Coimbatore at best rates.',
  keywords: ["release pledged gold from bank", "pay off gold loan and buy back", "release mortgage gold Coimbatore", "best pawn ticket buyers", "NBFC pledged gold release"],
  alternates: {
    canonical: 'https://mggoldmart.com/relese-pledged-gold/',
  },
  openGraph: {
    title: 'Release Pledged Gold from Bank | Pay Off Gold Loan - MG Gold Mart',
    description: 'Release pledged gold from bank or NBFCs easily. We help you pay off gold loan debts and release mortgage gold in Coimbatore at best rates.',
    url: 'https://mggoldmart.com/relese-pledged-gold/',
    siteName: 'MG Gold Mart',
    images: [{ url: '/assets/images/pledged.jpg' }],
    type: 'website',
  },
};

export default function ReleasePledgedGoldPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to release pledged gold from a bank?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bring your pledge receipt to MG Gold Mart. We can help you pay off your gold loan and buy back your pledged gold transparently."
        }
      },
      {
        "@type": "Question",
        "name": "Do you help release mortgage gold in Coimbatore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we assist in releasing mortgage gold from banks and NBFCs. Our team evaluates your pledge receipt and explains the options without pressure."
        }
      }
    ]
  };

  return (
    <>
      <ServicePage
        eyebrow="Release pledged gold"
        title="Release Pledged Gold from Bank & NBFCs."
        intro="If your gold is pledged with a bank or pawnbroker, understanding the next step can be difficult. Talk to our team about your situation and the options available to you."
        image="/assets/images/pledged.jpg"
        imageAlt="Pledged gold jewelry and pawn tickets ready to be released"
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
