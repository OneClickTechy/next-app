import type { Metadata } from 'next';
import SellUsedGoldClientPage from './ClientPage';

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
  return <SellUsedGoldClientPage />;
}
