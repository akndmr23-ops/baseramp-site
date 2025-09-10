// Data layer for BaseRamp - all live API fetchers
// No mocked data - if API fails, sections are hidden

export interface BasePair {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: string;
  baseToken: {
    address: string;
    name: string;
    symbol: string;
  };
  quoteToken: {
    address: string;
    name: string;
    symbol: string;
  };
  priceNative: string;
  priceUsd?: string;
  txns: {
    m5: { buys: number; sells: number };
    h1: { buys: number; sells: number };
    h6: { buys: number; sells: number };
    h24: { buys: number; sells: number };
  };
  volume: {
    h24: number;
    h6: number;
    h1: number;
    m5: number;
  };
  priceChange: {
    m5: number;
    h1: number;
    h6: number;
    h24: number;
  };
  liquidity?: {
    usd: number;
    base: number;
    quote: number;
  };
  fdv?: number;
  pairCreatedAt?: number;
}

export interface ProcessedToken {
  pairAddress: string;
  baseTokenAddress: string;
  name: string;
  symbol: string;
  priceUsd: number;
  change24h: number;
  change1h: number;
  volume24h: number;
  liquidity: number;
  dexscreenerUrl: string;
  basescanUrl: string;
  addedAgo?: string;
}

export interface GlobalCoin {
  id: string;
  symbol: string;
  name: string;
  image?: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  coingeckoUrl?: string;
}

export interface FearGreedData {
  value: string;
  value_classification: string;
  timestamp: string;
  time_until_update?: string;
}

export interface NFTCollection {
  id: string;
  name: string;
  image?: string;
  floorAsk?: {
    price?: {
      amount?: {
        decimal: number;
      };
    };
  };
  volume?: {
    '1day': number;
    '7day': number;
  };
  tokenCount?: number;
  ownerCount?: number;
}

// Base Pairs from Dexscreener
export async function getBasePairs(): Promise<BasePair[]> {
  try {
    const response = await fetch('https://api.dexscreener.com/latest/dex/search/?q=base', {
      next: { revalidate: 300 }, // 5 minutes
      headers: {
        'User-Agent': 'BaseRamp/1.0'
      }
    });

    if (!response.ok) {
      throw new Error(`Dexscreener API error: ${response.status}`);
    }

    const data = await response.json();
    // Filter for Base chain pairs from search results
    const basePairs = data.pairs?.filter((pair: any) => 
      pair.chainId === 'base' || 
      pair.chainId === '8453' ||
      (pair.url && pair.url.includes('/base/'))
    ) || [];
    return basePairs;
  } catch (error) {
    console.error('Error fetching Base pairs:', error);
    return [];
  }
}

// Process pairs into gainers and losers
export async function getTopGainersLosers(): Promise<{
  gainers: ProcessedToken[];
  losers: ProcessedToken[];
}> {
  try {
    const pairs = await getBasePairs();
    
    // Filter valid pairs
    const validPairs = pairs.filter(pair => 
      pair.priceUsd && 
      parseFloat(pair.priceUsd) > 0 &&
      pair.volume?.h24 > 0 &&
      pair.liquidity?.usd && 
      pair.liquidity.usd > 30000 &&
      pair.priceChange?.h24 !== undefined &&
      pair.baseToken?.name &&
      pair.baseToken?.symbol
    );

    // Process into our format
    const processedTokens: ProcessedToken[] = validPairs.map(pair => ({
      pairAddress: pair.pairAddress,
      baseTokenAddress: pair.baseToken.address,
      name: pair.baseToken.name,
      symbol: pair.baseToken.symbol,
      priceUsd: parseFloat(pair.priceUsd!),
      change24h: pair.priceChange.h24,
      change1h: pair.priceChange.h1 || 0,
      volume24h: pair.volume.h24,
      liquidity: pair.liquidity!.usd,
      dexscreenerUrl: `https://dexscreener.com/base/${pair.pairAddress}`,
      basescanUrl: `https://basescan.org/token/${pair.baseToken.address}`
    }));

    // Sort and get top gainers and losers
    const gainers = processedTokens
      .filter(token => token.change24h > 0)
      .sort((a, b) => b.change24h - a.change24h)
      .slice(0, 50);

    const losers = processedTokens
      .filter(token => token.change24h < 0)
      .sort((a, b) => a.change24h - b.change24h)
      .slice(0, 50);

    return { gainers, losers };
  } catch (error) {
    console.error('Error processing gainers/losers:', error);
    return { gainers: [], losers: [] };
  }
}

// Get new Base tokens
export async function getNewBaseTokens(): Promise<ProcessedToken[]> {
  try {
    const pairs = await getBasePairs();
    const now = Date.now();
    const oneDayAgo = now - (24 * 60 * 60 * 1000);
    const threeDaysAgo = now - (72 * 60 * 60 * 1000);

    // Filter pairs created in last 24h, fallback to 72h if few results
    let newPairs = pairs.filter(pair => 
      pair.pairCreatedAt && 
      pair.pairCreatedAt * 1000 > oneDayAgo &&
      pair.priceUsd && 
      parseFloat(pair.priceUsd) > 0 &&
      pair.baseToken?.name &&
      pair.baseToken?.symbol
    );

    // Fallback to 72h if less than 5 results
    if (newPairs.length < 5) {
      newPairs = pairs.filter(pair => 
        pair.pairCreatedAt && 
        pair.pairCreatedAt * 1000 > threeDaysAgo &&
        pair.priceUsd && 
        parseFloat(pair.priceUsd) > 0 &&
        pair.baseToken?.name &&
        pair.baseToken?.symbol
      );
    }

    // Process and sort by newest first
    const processedTokens: ProcessedToken[] = newPairs
      .map(pair => {
        const createdAt = pair.pairCreatedAt! * 1000;
        const hoursAgo = Math.floor((now - createdAt) / (60 * 60 * 1000));
        
        return {
          pairAddress: pair.pairAddress,
          baseTokenAddress: pair.baseToken.address,
          name: pair.baseToken.name,
          symbol: pair.baseToken.symbol,
          priceUsd: parseFloat(pair.priceUsd!),
          change24h: pair.priceChange?.h24 || 0,
          change1h: pair.priceChange?.h1 || 0,
          volume24h: pair.volume?.h24 || 0,
          liquidity: pair.liquidity?.usd || 0,
          dexscreenerUrl: `https://dexscreener.com/base/${pair.pairAddress}`,
          basescanUrl: `https://basescan.org/token/${pair.baseToken.address}`,
          addedAgo: hoursAgo < 1 ? 'Just now' : `${hoursAgo}h ago`
        };
      })
      .sort((a, b) => {
        const aCreated = pairs.find(p => p.pairAddress === a.pairAddress)?.pairCreatedAt || 0;
        const bCreated = pairs.find(p => p.pairAddress === b.pairAddress)?.pairCreatedAt || 0;
        return bCreated - aCreated;
      })
      .slice(0, 20);

    return processedTokens;
  } catch (error) {
    console.error('Error fetching new Base tokens:', error);
    return [];
  }
}

// Global Top 10 crypto
export async function getGlobalTop10(): Promise<GlobalCoin[]> {
  try {
    // Try CoinGecko first if API key is available
    if (process.env.COINGECKO_API_KEY) {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
        {
          next: { revalidate: 600 }, // 10 minutes
          headers: {
            'x-cg-pro-api-key': process.env.COINGECKO_API_KEY,
            'User-Agent': 'BaseRamp/1.0'
          }
        }
      );

      if (response.ok) {
        const data = await response.json();
        return data.map((coin: any, index: number) => ({
          id: coin.id,
          symbol: coin.symbol.toUpperCase(),
          name: coin.name,
          image: coin.image,
          current_price: coin.current_price,
          market_cap: coin.market_cap,
          market_cap_rank: index + 1,
          price_change_percentage_24h: coin.price_change_percentage_24h,
          coingeckoUrl: `https://www.coingecko.com/en/coins/${coin.id}`
        }));
      }
    }

    // Fallback to CoinCap
    const response = await fetch('https://api.coincap.io/v2/assets', {
      next: { revalidate: 600 },
      headers: {
        'User-Agent': 'BaseRamp/1.0'
      }
    });

    if (!response.ok) {
      throw new Error(`CoinCap API error: ${response.status}`);
    }

    const data = await response.json();
    return data.data?.slice(0, 10).map((asset: any, index: number) => ({
      id: asset.id,
      symbol: asset.symbol,
      name: asset.name,
      current_price: parseFloat(asset.priceUsd),
      market_cap: parseFloat(asset.marketCapUsd),
      market_cap_rank: index + 1,
      price_change_percentage_24h: parseFloat(asset.changePercent24Hr)
    })) || [];
  } catch (error) {
    console.error('Error fetching global top 10:', error);
    return [];
  }
}

// Fear & Greed Index
export async function getFearGreedIndex(): Promise<FearGreedData | null> {
  try {
    const response = await fetch('https://api.alternative.me/fng/', {
      next: { revalidate: 1800 }, // 30 minutes
      headers: {
        'User-Agent': 'BaseRamp/1.0'
      }
    });

    if (!response.ok) {
      throw new Error(`Fear & Greed API error: ${response.status}`);
    }

    const data = await response.json();
    return data.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching Fear & Greed Index:', error);
    return null;
  }
}

// NFT Collections (gated by API key)
export async function getNFTCollections(): Promise<NFTCollection[]> {
  if (!process.env.RESERVOIR_API_KEY) {
    return [];
  }

  try {
    const response = await fetch(
      'https://api.reservoir.tools/collections/v7?chains=base&sortBy=7DayVolume&limit=20',
      {
        next: { revalidate: 1800 }, // 30 minutes
        headers: {
          'x-api-key': process.env.RESERVOIR_API_KEY,
          'User-Agent': 'BaseRamp/1.0'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Reservoir API error: ${response.status}`);
    }

    const data = await response.json();
    return data.collections || [];
  } catch (error) {
    console.error('Error fetching NFT collections:', error);
    return [];
  }
}

// Feature gating functions
export function hasNFTSupport(): boolean {
  return !!process.env.RESERVOIR_API_KEY;
}

export function hasCoinGeckoKey(): boolean {
  return !!process.env.COINGECKO_API_KEY;
}