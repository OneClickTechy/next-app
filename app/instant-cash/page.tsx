import ServicePage from "@/components/ServicePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Instant Cash for Gold in Coimbatore",
  "Convert your gold into cash with a fast, secure and transparent in-store process at MG Gold Mart, Coimbatore.",
  "/instant-cash/",
  "/assets/images/instant-cash.jpg",
);

export default function InstantCashPage() {
  return (
    <ServicePage
      eyebrow="Instant cash"
      title="A quick answer when time matters."
      intro="When you need access to funds, the process should feel simple. At MG Gold Mart, our team guides you through a secure gold evaluation and explains your options clearly."
      image="/assets/images/instant-cash.jpg"
      imageAlt="Gold and cash at MG Gold Mart"
      points={[
        "Speak with our team and understand the process first.",
        "Your gold is assessed securely, in front of you.",
        "Receive a clear offer before making a decision.",
        "If you accept, payment is arranged promptly.",
      ]}
      processTitle="Fast, secure and hassle-free."
      processDescription="Visit our Gandhipuram store with the gold you want assessed. We will explain the valuation and payment options, with no obligation to proceed."
      pageIndex="02"
    />
  );
}
