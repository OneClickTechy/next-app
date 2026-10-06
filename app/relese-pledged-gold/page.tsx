import type { Metadata } from 'next';
import ReleasePledgedGoldClientPage from './ClientPage';

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
  return <ReleasePledgedGoldClientPage />;
}
