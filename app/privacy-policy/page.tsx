import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Privacy Policy - MG Gold Mart",
  description: "Learn how MG Gold Mart protects your data and privacy. We maintain strict confidentiality for all your transactions and valuations.",
};

export default function PrivacyPolicy() {
  return <ClientPage />;
}
