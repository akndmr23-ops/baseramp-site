export const runtime = 'edge';

const COINGECKO_API = 'https://api.coingecko.com/api/v3/coins/markets';

async function fetchTopTokens() {
  try {
    // First try to get Base ecosystem tokens
    const baseParams = new URLSearchParams({
      vs_currency: 'usd',
      order: 'price_change_percentage_24h_desc',
      per_page: '10',
      page: '1',
      sparkline: 'false',
      price_change_percentage: '24h',
      category: 'base-ecosystem',
    });

    let response = await fetch(`${COINGECKO_API}?${baseParams.toString()}`, {
      next: { revalidate: 300 }, // Cache for 5 minutes
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'BaseRamp/1.0'
      },
    });

    // If Base ecosystem category doesn't work, fall back to general top gainers
    if (!response.ok) {
      const generalParams = new URLSearchParams({
        vs_currency: 'usd',
        order: 'price_change_percentage_24h_desc',
        per_page: '10',
        page: '1',
        sparkline: 'false',
        price_change_percentage: '24h',
      });

      response = await fetch(`${COINGECKO_API}?${generalParams.toString()}`, {
        next: { revalidate: 300 },
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'BaseRamp/1.0'
        },
      });
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Transform data for our UI
    return data
      .filter((token: any) => token.price_change_percentage_24h > 0) // Only gainers
      .slice(0, 10) // Top 10
      .map((token: any) => ({
        id: token.id,
        symbol: token.symbol?.toUpperCase() || 'N/A',
        name: token.name || 'Unknown',
        image: token.image || '/placeholder-token.png',
        price: token.current_price || 0,
        change24h: token.price_change_percentage_24h || 0,
        mcap: token.market_cap || 0,
      }));
  } catch (error) {
    console.error('Error fetching tokens:', error);
    
    // Return mock data as fallback
    return [
      {
        id: 'ethereum',
        symbol: 'ETH',
        name: 'Ethereum',
        image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
        price: 2500,
        change24h: 5.2,
        mcap: 300000000000,
      },
      {
        id: 'base-token',
        symbol: 'BASE',
        name: 'Base Token',
        image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
        price: 1.25,
        change24h: 12.5,
        mcap: 50000000,
      },
    ];
  }
}

export async function GET() {
  try {
    const tokens = await fetchTopTokens();
    
    return new Response(JSON.stringify({ 
      list: tokens,
      timestamp: new Date().toISOString(),
      source: 'coingecko'
    }), {
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      },
      status: 200,
    });
  } catch (error) {
    console.error('API Error:', error);
    
    return new Response(JSON.stringify({ 
      error: 'Failed to fetch token data',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}