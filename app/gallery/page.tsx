import type { Metadata } from 'next';
import GalleryClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Gallery | Inside MG Gold Mart - Coimbatore',
  description: 'Take a look inside MG Gold Mart. View our state-of-the-art valuation centers, XRF testing machines, and customer service experience.',
  keywords: ["mg gold mart gallery", "gold buyers office", "xrf testing machine", "gold testing coimbatore", "inside mg gold mart"],
  alternates: {
    canonical: 'https://mggoldmart.com/gallery/',
  },
  openGraph: {
    title: 'Gallery | Inside MG Gold Mart - Coimbatore',
    description: 'Take a look inside MG Gold Mart. View our state-of-the-art valuation centers, XRF testing machines, and customer service experience.',
    url: 'https://mggoldmart.com/gallery/',
    siteName: 'MG Gold Mart',
    images: [{ url: '/assets/images/home.jpg' }],
    type: 'website',
  },
};

export default function GalleryPage() {
  return <GalleryClientPage />;
}
