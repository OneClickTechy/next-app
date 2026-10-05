import ServicePage from "@/components/ServicePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Sell Old Gold in Coimbatore",
  "Get a clear, market-aware valuation for old, broken or unwanted gold jewellery at MG Gold Mart in Coimbatore.",
  "/sell-used-gold/",
  "/assets/images/buy-gold.jpg",
);

export default function SellUsedGoldPage() {
  return (
    <ServicePage
      eyebrow="Spot cash for gold"
      title="Make something valuable of old gold."
      intro="Old, broken, mismatched or simply no longer your style — your gold still has value. Bring it in for a clear assessment and an offer you can consider on the spot."
      image="/assets/images/gold-price-fall.avif"
      imageAlt="Gold jewellery ready for evaluation"
      points={[
        "We consider old and broken gold jewellery.",
        "The assessment is explained while you watch.",
        "Know the offer before you decide to sell.",
        "If you choose to proceed, payment is arranged promptly.",
      ]}
      processTitle="An honest offer, without the hard sell."
      processDescription="Gold value depends on current market rates, the item's weight and purity. Our team takes time to explain the assessment so you can make the right choice for you."
      pageIndex="01"
    />
  );
}
