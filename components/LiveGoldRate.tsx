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

        const res = await fetch(workerUrl);
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
    return <div className="flex items-center gap-2 opacity-50"><span className="h-1.5 w-1.5 rounded-full bg-white/30" /><span>Loading live rates...</span></div>;
  }

  return (
    <div className="flex items-center gap-3 font-semibold text-[#f8f6f0]">
      <div className="relative flex items-center justify-center">
        <span className="absolute h-2 w-2 animate-ping rounded-full bg-[#f4bf2f] opacity-75"></span>
        <span className="relative h-1.5 w-1.5 rounded-full bg-[#f4bf2f]"></span>
      </div>
      <span className="text-white/60 font-medium">Live Coimbatore Rate:</span>
      <span className="flex items-center gap-2">
        <span>22K: <strong className="text-[#f4bf2f]">₹{rates["22k"].toLocaleString('en-IN')}/g</strong></span>
        <span className="text-white/30">•</span>
        <span>24K: <strong className="text-[#f4bf2f]">₹{rates["24k"].toLocaleString('en-IN')}/g</strong></span>
      </span>
    </div>
  );
}
