import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import AppCTA from "@/components/AppCTA";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import SmoothScrolling from "@/components/SmoothScrolling";
import ScrollAnimations from "@/components/ScrollAnimations";
import { site } from "@/lib/site";

const siteUrl = "https://mggoldmart.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Old Gold Buyers in Coimbatore | MG Gold Mart",
    template: "%s | MG Gold Mart",
  },
  description: site.description,
  applicationName: "MG Gold Mart",
  authors: [{ name: "MG Gold Mart" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Old Gold Buyers in Coimbatore | MG Gold Mart",
    description: site.description,
    url: siteUrl,
    siteName: "MG Gold Mart",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/assets/images/about-us.jpg", width: 1200, height: 630, alt: "MG Gold Mart in Coimbatore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Old Gold Buyers in Coimbatore | MG Gold Mart",
    description: site.description,
    images: ["/assets/images/about-us.jpg"],
  },
  icons: { icon: "/assets/images/favicon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
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
