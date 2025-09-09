// app/api/top-tokens/route.ts
export const runtime = 'edge'; // hızlı ve ucuz
const CG = 'https://api.coingecko.com/api/v3/coins/markets';

async function fetchTop10() {
  const paramsBase = new URLSearchParams({
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: '10',
    page: '1',
    sparkline: 'false',
    price_change_percentage: '24h',
    category: 'base-ecosystem', // varsa bunu kullan
  });

  // 1) Base ekosistemi dene
  let res = await fetch(`${CG}?${paramsBase.toString()}`, {
    // 5 dakikada bir yeniden doğrula
    next: { revalidate: 300 },
    headers: { 'x-cg-demo': 'baseramp' },
  });

  // 2) Kategori desteklenmiyorsa genel top 10'a düş
  if (!res.ok) {
    const paramsGlobal = new URLSearchParams({
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: '10',
      page: '1',
      sparkline: 'false',
      price_change_percentage: '24h',
    });
    res = await fetch(`${CG}?${paramsGlobal.toString()}`, {
      next: { revalidate: 300 },
      headers: { 'x-cg-demo': 'baseramp' },
    });
  }

  const data = await res.json();
  // UI için küçültülmüş cevap
  return data.map((c: any) => ({
    id: c.id,
    symbol: c.symbol?.toUpperCase(),
    name: c.name,
    image: c.image,
    price: c.current_price,
    change24h: c.price_change_percentage_24h,
    mcap: c.market_cap,
  }));
}

export async function GET() {
  try {
    const list = await fetchTop10();
    return new Response(JSON.stringify({ list }), {
      headers: { 'content-type': 'application/json' },
      status: 200,
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'fetch_failed' }), { status: 500 });
  }
}
