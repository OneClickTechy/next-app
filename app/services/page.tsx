import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Services | MG Gold Mart Coimbatore",
  description: "Explore MG Gold Mart's premium services: Spot Cash for Gold, Instant Cash, Release Pledged Gold, and MG DigiGold.",
};

export default function ServicesPage() {
  return <ClientPage />;
}
