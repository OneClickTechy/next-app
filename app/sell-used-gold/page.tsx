import type { Metadata } from 'next';
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: 'Sell Old Gold Jewelry for Cash | Best Used Gold Buyer - MG Gold Mart',
  description: 'Looking for a used gold buyer online or offline? Sell old gold jewelry or coins for cash at MG Gold Mart. Live gold rates and transparent assessment.',
  keywords: ["sell old gold jewelry", "used gold buyer online", "sell gold coins for cash", "scrap gold buyers", "live gold rate cash"],
  alternates: {
    canonical: 'https://mggoldmart.com/sell-used-gold/',
  },
  openGraph: {
    title: 'Sell Old Gold Jewelry for Cash | MG Gold Mart',
    description: 'Looking for a used gold buyer online or offline? Sell old gold jewelry or coins for cash at MG Gold Mart. Live gold rates and transparent assessment.',
    url: 'https://mggoldmart.com/sell-used-gold/',
    siteName: 'MG Gold Mart',
    images: [{ url: '/assets/images/buy-gold.jpg' }],
    type: 'website',
  },
};

export default function SellUsedGoldPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I sell my old gold jewelry for cash?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bring your old gold jewelry to MG Gold Mart. We assess it transparently in front of you and offer instant cash based on live market rates."
        }
      },
      {
        "@type": "Question",
        "name": "Do you buy gold coins for cash?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are a trusted used gold buyer and we buy gold coins, scrap gold, and broken jewelry for cash."
        }
      }
    ]
  };

  return (
    <>
      <ServicePage
        eyebrow="Spot cash for gold"
        title="Sell Old Gold Jewelry for Cash."
        intro="Old, broken, mismatched or simply no longer your style — your gold still has value. Bring it in for a clear assessment and an offer you can consider on the spot."
        image="/assets/images/gold-price-fall.avif"
        imageAlt="Sell gold coins for cash and old gold jewelry ready for evaluation"
        points={[
          "We consider old and broken gold jewelry.",
          "The assessment is explained while you watch.",
          "Know the offer before you decide to sell.",
          "If you choose to proceed, payment is arranged promptly.",
        ]}
        processTitle="An honest offer, without the hard sell."
        processDescription="Gold value depends on current market rates, the item's weight and purity. Our team takes time to explain the assessment so you can make the right choice for you."
        pageIndex="01"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
