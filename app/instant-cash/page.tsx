import type { Metadata } from 'next';
import InstantCashClientPage from './ClientPage';

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
  return <InstantCashClientPage />;
}
