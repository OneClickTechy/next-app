import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Terms & Conditions - MG Gold Mart",
  description: "Read the terms and conditions for selling your gold to MG Gold Mart in Coimbatore. Transparent policies for our spot cash and pledging services.",
};

export default function TermsAndConditions() {
  return <ClientPage />;
}
