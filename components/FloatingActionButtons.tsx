import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href={`https://wa.me/${site.phone.replace("+", "")}`} target="_blank" rel="noreferrer" aria-label="Chat with MG Gold Mart on WhatsApp" className="float-action flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg"><MessageCircle size={22} /></a>
      <a href={`tel:${site.phone}`} aria-label="Call MG Gold Mart" className="float-action flex h-12 w-12 items-center justify-center rounded-full bg-[#f4bf2f] text-[#30000b] shadow-lg"><Phone size={20} /></a>
    </div>
  );
}
