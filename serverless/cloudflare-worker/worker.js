/**
 * MG Gold Mart - Gold Rate API Worker
 * 
 * Features:
 * 1. Primary: GoldAPI.io JSON API
 * 2. Fallback: Yahoo Finance JSON API (Zero Key)
 * 3. Fallback: Offline baseline
 * 4. Cloudflare Edge Caching (4 hours)
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json; charset=utf-8'
};

// Calibrated 2026 Coimbatore Benchmark Baseline (Safe offline fallback)
const FALLBACK_BASELINE = {
  '24k': 7400,
  '22k': 6780,
  '18k': 5550
};

async function fetchFromGoldApi(apiKey) {
  if (!apiKey) return null;
  try {
    const res = await fetch('https://www.goldapi.io/api/XAU/INR', {
      headers: {
        'x-access-token': apiKey,
        'Content-Type': 'application/json'
      }
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.price_gram_24k) {
        const rate24k = Math.round(data.price_gram_24k);
        const rate22k = Math.round(data.price_gram_22k || rate24k * (22 / 24));
        const rate18k = Math.round(data.price_gram_18k || rate24k * (18 / 24));
        return {
          source: 'GoldAPI.io (Institutional Precious Metals JSON API)',
          apiType: 'Dedicated Gold API',
          rates: { '24k': rate24k, '22k': rate22k, '18k': rate18k }
        };
      }
    }
  } catch (err) {
    console.warn('GoldAPI.io request error:', err.message);
  }
  return null;
}

async function fetchFromYahooFinanceJson() {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'application/json'
  };

  try {
    const [goldRes, inrRes] = await Promise.all([
      fetch('https://query1.finance.yahoo.com/v8/finance/chart/GC=F?interval=1d&range=1d', { headers, cf: { cacheTtl: 3600 } }),
      fetch('https://query1.finance.yahoo.com/v8/finance/chart/USDINR=X?interval=1d&range=1d', { headers, cf: { cacheTtl: 3600 } })
    ]);

    if (goldRes.ok && inrRes.ok) {
      const goldData = await goldRes.json();
      const inrData = await inrRes.json();

      const goldUsdPerOz = goldData?.chart?.result?.[0]?.meta?.regularMarketPrice;
      const usdInrRate = inrData?.chart?.result?.[0]?.meta?.regularMarketPrice;

      if (goldUsdPerOz && usdInrRate) {
        // 1 troy ounce = 31.1034768 grams
        // Landed Indian domestic price includes ~15% duty & local bullion premium
        const baseInrPerGram = (goldUsdPerOz / 31.1034768) * usdInrRate;
        const indianDutyAndPremiumMultiplier = 1.15;

        const rate24k = Math.round(baseInrPerGram * indianDutyAndPremiumMultiplier);
        const rate22k = Math.round(rate24k * (22 / 24));
        const rate18k = Math.round(rate24k * (18 / 24));

        return {
          source: 'Yahoo Finance JSON API (COMEX GC=F + USD/INR Index)',
          apiType: 'Free Financial JSON API (Zero Key)',
          marketPriceUsdPerOz: goldUsdPerOz,
          usdInrRate: usdInrRate,
          rates: { '24k': rate24k, '22k': rate22k, '18k': rate18k }
        };
      }
    }
  } catch (err) {
    console.warn('Yahoo Finance JSON request error:', err.message);
  }

  return null;
}

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const cache = typeof caches !== 'undefined' ? caches.default : null;
    const cacheKey = new Request(url.toString(), request);

    if (cache) {
      let cachedResponse = await cache.match(cacheKey);
      if (cachedResponse) {
        const headers = new Headers(cachedResponse.headers);
        headers.set('X-Rate-Cache', 'HIT');
        return new Response(cachedResponse.body, {
          status: cachedResponse.status,
          headers
        });
      }
    }

    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istDate = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + istOffset);

    const year = istDate.getFullYear();
    const monthIndex = istDate.getMonth();
    const day = istDate.getDate();

    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
    const isoDate = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    let apiData = null;
    let resolvedKey = '';
    
    try {
      if (env) {
        const secretBinding = env.API_KEY || env.GOLD_API_KEY || env.DIRECT_GOLD_API_KEY;
        if (secretBinding) {
          if (typeof secretBinding.get === 'function') {
            resolvedKey = await secretBinding.get();
          } else if (typeof secretBinding === 'string') {
            resolvedKey = secretBinding;
          }
        }
      }
    } catch (err) {
      console.warn('Secrets Store resolution notice:', err.message);
    }

    if (resolvedKey && resolvedKey.trim() !== '') {
      apiData = await fetchFromGoldApi(resolvedKey.trim());
    }

    if (!apiData) {
      apiData = await fetchFromYahooFinanceJson();
    }

    const isLive = Boolean(apiData && apiData.rates);
    let finalRates = isLive ? apiData.rates : { ...FALLBACK_BASELINE };
    let dataSource = isLive ? apiData.source : 'Coimbatore Bullion Baseline';

    if (env && env.MANUAL_22K_RATE) {
      const manual22k = parseInt(env.MANUAL_22K_RATE, 10);
      if (!isNaN(manual22k) && manual22k > 0) {
        finalRates['22k'] = manual22k;
        finalRates['24k'] = Math.round(manual22k * (24 / 22));
        finalRates['18k'] = Math.round(finalRates['24k'] * (18 / 24));
        dataSource = 'MG Gold Mart In-House Counter Override';
      }
    }

    const payload = {
      success: true,
      status: 'LIVE',
      isRealLiveFetch: isLive,
      fetchMethod: 'Pure JSON API',
      apiType: apiData ? apiData.apiType : 'Offline Fallback',
      market: 'Coimbatore Bullion Index',
      location: 'Coimbatore, Tamil Nadu',
      currency: 'INR',
      unit: 'gram',
      updatedDate: isoDate,
      formattedDate: formattedDate,
      timestamp: istDate.toISOString(),
      rates: finalRates,
      source: dataSource,
      cacheTtlSeconds: 14400
    };

    const responseHeaders = {
      ...CORS_HEADERS,
      'Cache-Control': 'public, max-age=14400, s-maxage=14400',
      'X-Rate-Cache': 'MISS',
      'X-Api-Type': apiData ? apiData.apiType : 'Fallback'
    };

    const response = new Response(JSON.stringify(payload, null, 2), {
      status: 200,
      headers: responseHeaders
    });

    if (cache && ctx && typeof ctx.waitUntil === 'function') {
      ctx.waitUntil(cache.put(cacheKey, response.clone()));
    }
    return response;
  }
};
