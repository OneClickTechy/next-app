"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const text = encodeURIComponent(`Hello MG Gold Mart,\n\nI have an enquiry:\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n\n*Message:*\n${message}`);
    const waNumber = site.phone.replace(/[^0-9]/g, "");

    setSubmitted(true);
    window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-xs font-semibold text-[#55564f]">Your name<input className="form-field mt-2" name="name" autoComplete="name" required maxLength={100} placeholder="Name" /></label>
        <label className="block text-xs font-semibold text-[#55564f]">Phone number<input className="form-field mt-2" name="phone" type="tel" autoComplete="tel" required maxLength={20} placeholder="+91" /></label>
      </div>
      <label className="block text-xs font-semibold text-[#55564f]">Email address<input className="form-field mt-2" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
      <label className="block text-xs font-semibold text-[#55564f]">How can we help?<textarea className="form-field mt-2 min-h-32 resize-y" name="message" required maxLength={2000} placeholder="Tell us a little about what you need..." /></label>
      <button type="submit" className="button-gold w-full sm:w-auto">Send via WhatsApp <ArrowUpRight size={16} /></button>
      {submitted && <p role="status" className="text-sm text-[#665326]">Opening WhatsApp to send your enquiry to our team...</p>}
      <p className="text-xs leading-5 text-[#88877f]">This website securely connects you to our WhatsApp to send the enquiry; it does not store form details online.</p>
    </form>
  );
}
