import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import AppCTA from "@/components/AppCTA";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import SmoothScrolling from "@/components/SmoothScrolling";
import ScrollAnimations from "@/components/ScrollAnimations";
import LocalBusinessJsonLd from "@/components/seo/JsonLd";


const siteUrl = "https://mggoldmart.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Best Old Gold Buyers in Coimbatore | MG Gold Mart",
    template: "%s | MG Gold Mart",
  },
  description: "Looking for the best gold buyer near me? MG Gold Mart in Coimbatore offers instant cash for gold, live market rates, and pledged gold release services.",
  keywords: ["best gold buyer near me", "cash for gold shop in Coimbatore", "highest price for second hand gold", "old gold buyers Coimbatore", "sell gold online", "release pledged gold"],
  applicationName: "MG Gold Mart",
  authors: [{ name: "MG Gold Mart" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Best Old Gold Buyers in Coimbatore | MG Gold Mart",
    description: "Looking for the best gold buyer near me? MG Gold Mart in Coimbatore offers instant cash for gold, live market rates, and pledged gold release services.",
    url: siteUrl,
    siteName: "MG Gold Mart",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/assets/images/mg-gold-mart.png", width: 1200, height: 630, alt: "MG Gold Mart in Coimbatore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Old Gold Buyers in Coimbatore | MG Gold Mart",
    description: "Get instant cash for gold at live market rates with MG Gold Mart in Coimbatore.",
    images: ["/assets/images/mg-gold-mart.png"],
  },
  appleWebApp: { title: "MG Gold Mart" },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessJsonLd />
        <SmoothScrolling />
        <ScrollAnimations>
          <Header />
          {children}
          <AppCTA />
          <Footer />
          <FloatingActionButtons />
        </ScrollAnimations>
      </body>
    </html>
  );
}
