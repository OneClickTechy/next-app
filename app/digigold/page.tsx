import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "MG DigiGold | Buy & Sell 24K Digital Gold in Coimbatore",
  description: "Invest in 24K pure digital gold with MG Gold Mart. Buy, sell, and manage your gold securely from your mobile phone with real-time market rates.",
};

export default function DigiGoldPage() {
  return <ClientPage />;
}
