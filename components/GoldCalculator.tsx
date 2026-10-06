"use client";

import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";

interface GoldRates {
  "24k": number;
  "22k": number;
  "18k": number;
}

export default function GoldCalculator() {
  const [weight, setWeight] = useState<string>("");
  const [purity, setPurity] = useState<keyof GoldRates>("22k");
  const [rates, setRates] = useState<GoldRates | null>(null);
  
  useEffect(() => {
    async function fetchRates() {
      try {
        const workerUrl = process.env.NEXT_PUBLIC_GOLD_RATE_API || "https://mggoldmart-gold-rate.olivegoldsnj.workers.dev/";
        const res = await fetch(workerUrl, { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.rates) {
            setRates(data.rates);
            return;
          }
        }
      } catch (err) {
        console.error("Failed to fetch rates for calculator", err);
      }
      setRates({ "24k": 7400, "22k": 6780, "18k": 5550 }); // Fallback
    }
    fetchRates();
  }, []);

  const currentRate = rates ? rates[purity] : 0;
  const estimatedValue = currentRate * (parseFloat(weight) || 0);

  return (
    <section className="bg-[#f0ede4] py-24 px-5" id="calculator">
      <div className="max-w-[1100px] mx-auto bg-white shadow-xl overflow-hidden border border-[#30000b]/10" data-reveal>
        <div className="grid md:grid-cols-[0.9fr_1.1fr]">
          <div className="p-10 md:p-14 lg:p-16 bg-[#30000b] text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f4bf2f]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <span className="eyebrow !text-[#f4bf2f] mb-6 tracking-widest">Interactive Tool</span>
            <h2 className="display-font text-[clamp(2.5rem,4vw,3.5rem)] leading-[0.9] mb-8 font-medium">Estimate Your <br/><em>Gold&apos;s Value</em></h2>
            <p className="text-white/70 leading-relaxed mb-10 max-w-sm text-[0.92rem]">
              Use our live-rate calculator to get a clear estimate. The final valuation is based on a precise XRF laser test in our Coimbatore lounge, with zero melting deductions.
            </p>
            <div className="bg-black/20 p-6 border border-white/5 flex gap-4 items-start shadow-inner">
              <AlertCircle className="text-[#f4bf2f] shrink-0 mt-0.5" size={20} />
              <p className="text-[0.82rem] text-white/80 leading-relaxed">
                This is an estimated value based on today&apos;s live market rate. The final payout depends on the exact weight and purity measured during our free evaluation.
              </p>
            </div>
          </div>
          
          <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <label className="block text-[0.82rem] font-bold text-[#30000b] mb-3 uppercase tracking-widest">Select Gold Purity</label>
                <div className="grid grid-cols-3 gap-3">
                  {(["24k", "22k", "18k"] as const).map((k) => (
                    <button
                      key={k}
                      onClick={() => setPurity(k)}
                      className={`py-3 text-sm font-bold rounded-sm border transition-all ${
                        purity === k 
                          ? "bg-[#30000b] text-[#f4bf2f] border-[#30000b]" 
                          : "bg-white text-[#77776f] border-[#e6e2d7] hover:border-[#f4bf2f]"
                      }`}
                    >
                      {k.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-[0.82rem] font-bold text-[#30000b] mb-3 uppercase tracking-widest">Enter Weight (Grams)</label>
                <div className="relative">
                  <input 
                    type="number" 
                    min="0"
                    step="0.1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 10"
                    className="w-full bg-[#fbf8f2] border border-[#e6e2d7] rounded-sm py-[1.1rem] px-5 text-lg focus:outline-none focus:border-[#790019] focus:ring-1 focus:ring-[#790019] transition-all"
                  />
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[#77776f] font-bold">g</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <p className="text-sm text-[#77776f] mb-1">Estimated Value</p>
                <div className="flex items-baseline gap-2 text-[#30000b]">
                  <span className="text-3xl font-bold">₹</span>
                  <span className="text-5xl display-font font-bold">
                    {estimatedValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                {rates && (
                  <p className="text-xs text-[#77776f] mt-2 font-medium">
                    Based on live rate: ₹{currentRate.toLocaleString('en-IN')}/g
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
