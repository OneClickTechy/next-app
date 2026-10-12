import { pageMetadata } from "@/lib/metadata";
import AboutClientPage from './ClientPage';

export const metadata = pageMetadata(
  "About MG Gold Mart | 20+ Years Experience in Gold Buying",
  "Backed by 20+ years of trusted experience in gold valuation and buying in Coimbatore. Discover MG Gold Mart's honest assessments, German XRF testing, and instant payments.",
  "/about-us/",
  "/assets/images/about-us.jpg",
);

export default function AboutPage() {
  return <AboutClientPage />;
}
