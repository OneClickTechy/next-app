import { pageMetadata } from "@/lib/metadata";
import AboutClientPage from './ClientPage';

export const metadata = pageMetadata(
  "About MG Gold Mart",
  "Learn about MG Gold Mart's transparent gold valuation, secure evaluation process and customer-first service in Coimbatore.",
  "/about-us/",
  "/assets/images/about-us.jpg",
);

export default function AboutPage() {
  return <AboutClientPage />;
}
