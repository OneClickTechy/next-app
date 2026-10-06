import { pageMetadata } from "@/lib/metadata";
import FAQClientPage from './ClientPage';

export const metadata = pageMetadata(
  "Frequently Asked Questions | MG Gold Mart",
  "Find answers to common questions about selling your gold, pledged gold release, and the secure evaluation process at MG Gold Mart, Coimbatore.",
  "/faq/",
  "/assets/images/about-us.jpg",
);

export default function FAQPage() {
  return <FAQClientPage />;
}
