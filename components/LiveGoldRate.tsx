"use client";

import { useState, useEffect } from "react";

interface GoldRates {
  "24k": number;
  "22k": number;
  "18k": number;
}

interface GoldRateResponse {
  success: boolean;
  status: string;
  isRealLiveFetch: boolean;
  market: string;
  formattedDate: string;
  rates: GoldRates;
  source: string;
}

export default function LiveGoldRate() {
  const [rates, setRates] = useState<GoldRates | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRates() {
      try {
        // Try to use env variable, fallback to the deployed production URL
        const workerUrl = process.env.NEXT_PUBLIC_GOLD_RATE_API || "https://mggoldmart-gold-rate.olivegoldsnj.workers.dev/";
        
        if (!workerUrl) {
          // If no URL is provided, display safe baseline rates
          setRates({
            "24k": 7400,
            "22k": 6780,
            "18k": 5550,
          });
          setLoading(false);
          return;
        }

        const res = await fetch(workerUrl, { cache: "no-store" });
        if (res.ok) {
          const data = (await res.json()) as GoldRateResponse;
          if (data.success && data.rates) {
            setRates(data.rates);
          }
        }
      } catch (err) {
        console.error("Failed to fetch gold rates:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchRates();
  }, []);

  if (loading || !rates) {
    return null;
  }

  return (
    <>
      {/* Desktop / Tablet Card */}
      <div className="hidden md:flex fixed bottom-8 left-8 z-50 flex-col gap-1 rounded-2xl border border-white/20 bg-white/80 p-4 shadow-xl backdrop-blur-xl w-[240px]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#790019]">Live Gold Rate</span>
          <div className="relative flex items-center justify-center">
            <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative h-2 w-2 rounded-full bg-green-500"></span>
          </div>
        </div>
        <div className="flex justify-between items-end border-b border-black/5 pb-2">
          <span className="text-xs font-semibold text-[#77776f]">22K (916)</span>
          <span className="text-lg font-bold text-[#30000b]">₹{rates["22k"].toLocaleString('en-IN')} <span className="text-[10px] font-normal text-[#77776f]">/g</span></span>
        </div>
        <div className="flex justify-between items-end pt-1">
          <span className="text-xs font-semibold text-[#77776f]">24K (999)</span>
          <span className="text-lg font-bold text-[#30000b]">₹{rates["24k"].toLocaleString('en-IN')} <span className="text-[10px] font-normal text-[#77776f]">/g</span></span>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t border-black/5 bg-[#fbfaf6]/95 px-5 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#790019]">Live Rate</span>
          <div className="relative flex items-center justify-center">
            <span className="absolute h-2 w-2 animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative h-1.5 w-1.5 rounded-full bg-green-500"></span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-end">
            <span className="text-[9px] font-bold text-[#77776f]">22K (916)</span>
            <span className="text-sm font-bold text-[#30000b]">₹{rates["22k"].toLocaleString('en-IN')}</span>
          </div>
          <div className="h-6 w-px bg-black/10"></div>
          <div className="flex flex-col items-end">
            <span className="text-[9px] font-bold text-[#77776f]">24K (999)</span>
            <span className="text-sm font-bold text-[#30000b]">₹{rates["24k"].toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
    </>
  );
}
