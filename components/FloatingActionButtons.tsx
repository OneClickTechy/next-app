"use client";

import { useState, FormEvent, useEffect } from "react";
import { MessageCircle, Phone, X, Send, ChevronRight } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingActionButtons() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const now = new Date();
    setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  }, [isChatOpen]);

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
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-4">
      {/* Chat Widget */}
      {isChatOpen && (
        <div className="w-[340px] overflow-hidden rounded-2xl border border-[#f4bf2f]/20 bg-[#110b0c] font-sans shadow-2xl origin-bottom-right animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#f4bf2f]/10 bg-[#1d1214] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25d366] text-white">
                <MessageCircle size={20} />
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
            onClick={() => setIsChatOpen(true)}
            aria-label="Open chat"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1e293b] text-[#25d366] shadow-xl border border-black/10 transition-transform hover:scale-105"
          >
            <MessageCircle size={28} />
            <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-[#1e293b] bg-[#25d366]"></span>
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
