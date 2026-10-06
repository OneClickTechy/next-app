"use client";

import { useState, FormEvent } from "react";
import { MessageCircle, Phone, X, Send, ChevronRight } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingActionButtons() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");

  const handleOpenChat = () => {
    const now = new Date();
    setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setIsChatOpen(true);
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    const currentPage = typeof window !== 'undefined' ? window.location.href : '';
    const formattedMessage = `*New Enquiry*\n\n*Message:* ${text}\n\n---\n*Source:* MG Gold Mart Website\n*Page:* ${currentPage}`;
    
    const url = `https://wa.me/${site.phone.replace("+", "")}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, "_blank");
    setMessage("");
    setIsChatOpen(false);
  };

  const quickMessages = [
    "I want to sell my gold",
    "What is today's gold rate?",
    "I need doorstep service",
    "Release my pledged gold",
  ];

  return (
    <div className="fixed bottom-[84px] md:bottom-8 right-5 md:right-8 z-50 flex flex-col items-end gap-3 md:gap-4">
      {/* Chat Widget */}
      {isChatOpen && (
        <div className="w-[340px] overflow-hidden rounded-2xl border border-[#f4bf2f]/20 bg-[#110b0c] font-sans shadow-2xl origin-bottom-right animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#f4bf2f]/10 bg-[#1d1214] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25d366] text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </div>
              <div>
                <h3 className="font-serif font-bold tracking-widest text-[#f8f6f0]">MG GOLD MART</h3>
                <p className="flex items-center gap-1.5 text-xs text-[#a3a3a3]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#25d366]"></span>
                  Typically replies instantly
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)} 
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#a3a3a3] hover:bg-white/10 hover:text-white transition-colors" 
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            {/* Chat bubble */}
            <div className="mb-5 rounded-2xl rounded-tl-sm bg-[#2a1b1d] p-4 text-sm leading-relaxed text-[#e5e5e5]">
              <p>Hi! 👋 Welcome to <strong className="text-white">MG Gold Mart</strong>.</p>
              <p className="mt-1">How can we help you today?</p>
              <p className="mt-2 text-right text-[10px] text-[#888]">{time}</p>
            </div>

            {/* Quick Messages */}
            <h4 className="mb-2 text-[11px] font-bold tracking-widest text-[#f4bf2f]">QUICK MESSAGES</h4>
            <div className="flex flex-col gap-2">
              {quickMessages.map((msg) => (
                <button
                  key={msg}
                  onClick={() => handleSend(msg)}
                  className="flex items-center justify-between rounded-xl border border-[#3a2529] bg-[#1d1214] px-4 py-3 text-left text-sm text-[#d4d4d4] transition-colors hover:border-[#f4bf2f]/50 hover:bg-[#2a1b1d]"
                >
                  {msg}
                  <ChevronRight size={16} className="text-[#666]" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input */}
          <div className="border-t border-[#f4bf2f]/10 bg-[#1d1214] p-3">
            <form
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                handleSend(message);
              }}
              className="flex items-center gap-2 rounded-full border border-[#f4bf2f]/40 bg-[#110b0c] px-2 py-1.5 focus-within:border-[#f4bf2f]"
            >
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent px-3 text-sm text-white placeholder-[#666] outline-none"
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#188c42] text-white disabled:opacity-50 transition-colors hover:bg-[#25d366]"
              >
                <Send size={15} className="ml-0.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Buttons */}
      <div className="flex flex-col items-end gap-3">
        {!isChatOpen && (
          <button
            onClick={handleOpenChat}
            aria-label="Open WhatsApp Chat"
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl border border-black/10 transition-transform hover:scale-105"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[30px] h-[30px]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex h-[10px] w-[10px] rounded-full bg-red-500 border border-white"></span>
            </span>
          </button>
        )}
        <a
          href={`tel:${site.phone}`}
          aria-label="Call MG Gold Mart"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4bf2f] text-[#30000b] shadow-lg transition-transform hover:scale-105 mr-1.5"
        >
          <Phone size={18} />
        </a>
      </div>
    </div>
  );
}
