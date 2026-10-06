import { pageMetadata } from "@/lib/metadata";
import ContactClientPage from './ClientPage';

export const metadata = pageMetadata(
  "Contact MG Gold Mart",
  "Get in touch with MG Gold Mart for gold valuation, instant cash and pledged gold assistance in Coimbatore.",
  "/contact-us/",
  "/assets/images/conatct-us.jpg",
);

export default function ContactPage() {
  return <ContactClientPage />;
}
