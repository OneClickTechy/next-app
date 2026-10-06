import type { Metadata } from 'next';
import GoldCalculatorClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Live Gold Calculator | Check Gold Value - MG Gold Mart',
  description: 'Use our live gold calculator to estimate the value of your old gold jewelry based on today’s Coimbatore market rates.',
  keywords: ["gold calculator", "live gold rate calculator", "check gold value", "calculate gold price today", "estimate gold value"],
  alternates: {
    canonical: 'https://mggoldmart.com/gold-calculator/',
  },
  openGraph: {
    title: 'Live Gold Calculator | Check Gold Value - MG Gold Mart',
    description: 'Use our live gold calculator to estimate the value of your old gold jewelry based on today’s Coimbatore market rates.',
    url: 'https://mggoldmart.com/gold-calculator/',
    siteName: 'MG Gold Mart',
    images: [{ url: '/assets/images/about-us.jpg' }],
    type: 'website',
  },
};

export default function GoldCalculatorPage() {
  return <GoldCalculatorClientPage />;
}
