import type { Metadata } from 'next';
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: 'Instant Cash Against Gold | Immediate Gold Payout - MG Gold Mart',
  description: 'Need fast cash? Get instant cash against gold with immediate payout. Learn the gold selling process step by step with MG Gold Mart.',
  keywords: ["instant cash against gold", "immediate gold payout", "fast cash for gold jewelry", "gold selling process step by step", "spot cash for gold near me"],
  alternates: {
    canonical: 'https://mggoldmart.com/instant-cash/',
  },
  openGraph: {
    title: 'Instant Cash Against Gold | Immediate Gold Payout - MG Gold Mart',
    description: 'Need fast cash? Get instant cash against gold with immediate payout. Learn the gold selling process step by step with MG Gold Mart.',
    url: 'https://mggoldmart.com/instant-cash/',
    siteName: 'MG Gold Mart',
    images: [{ url: '/assets/images/instant-cash.jpg' }],
    type: 'website',
  },
};

export default function InstantCashPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to get instant cash against gold?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visit MG Gold Mart with your gold. We assess the purity and weight, offering an immediate gold payout based on the live market rate."
        }
      },
      {
        "@type": "Question",
        "name": "What is the gold selling process step by step?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1. Bring your gold. 2. We assess it in front of you. 3. You receive a clear offer. 4. Accept the offer for an immediate cash payout."
        }
      }
    ]
  };

  return (
    <>
      <ServicePage
        eyebrow="Instant cash"
        title="Instant Cash Against Gold."
        intro="When you need access to funds, the process should feel simple. At MG Gold Mart, our team guides you through a secure gold evaluation and explains your options clearly."
        image="/assets/images/instant-cash.jpg"
        imageAlt="Fast cash for gold jewelry payout process"
        points={[
          "Speak with our team and understand the process first.",
          "Your gold is assessed securely, in front of you.",
          "Receive a clear offer before making a decision.",
          "If you accept, payment is arranged promptly.",
        ]}
        processTitle="Fast, secure and hassle-free."
        processDescription="Visit our Gandhipuram store with the gold you want assessed. We will explain the valuation and payment options, with no obligation to proceed."
        pageIndex="02"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
