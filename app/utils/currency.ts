// Currency utility for dual pricing (USD/GHS)

export interface PriceData {
  usd: number;
  ghs: number;
  currency: 'USD' | 'GHS';
}

export interface DualPrice {
  usd: string;
  ghs: string;
  display: string;
}

// Current exchange rate (update as needed)
const USD_TO_GHS_RATE = 12.0; // 1 USD = 12 GHS (approximate)

export const convertPrice = (usdPrice: number): PriceData => {
  return {
    usd: usdPrice,
    ghs: Math.round(usdPrice * USD_TO_GHS_RATE),
    currency: 'USD'
  };
};

export const formatDualPrice = (usdPrice: number): DualPrice => {
  const priceData = convertPrice(usdPrice);
  
  return {
    usd: `$${priceData.usd}`,
    ghs: `₵${priceData.ghs.toLocaleString()}`,
    display: `$${priceData.usd} / ₵${priceData.ghs.toLocaleString()}`
  };
};

export const formatPriceRange = (minUsd: number, maxUsd?: number): DualPrice => {
  if (maxUsd) {
    const minPrice = convertPrice(minUsd);
    const maxPrice = convertPrice(maxUsd);
    
    return {
      usd: `$${minPrice.usd} - $${maxPrice.usd}`,
      ghs: `₵${minPrice.ghs.toLocaleString()} - ₵${maxPrice.ghs.toLocaleString()}`,
      display: `$${minPrice.usd}-${maxPrice.usd} / ₵${minPrice.ghs.toLocaleString()}-${maxPrice.ghs.toLocaleString()}`
    };
  }
  
  return formatDualPrice(minUsd);
};

// Service pricing with dual currency
export const servicePricing = {
  'web-development': {
    starter: { usd: 500, ghs: 6000 },
    business: { usd: 1200, ghs: 14400 },
    enterprise: { usd: 2500, ghs: 30000 }
  },
  'graphic-design': {
    logo: { usd: 150, ghs: 1800 },
    brand: { usd: 400, ghs: 4800 },
    marketing: { usd: 800, ghs: 9600 }
  },
  'mobile-apps': {
    basic: { usd: 1200, ghs: 14400 },
    business: { usd: 2500, ghs: 30000 },
    enterprise: { usd: 5000, ghs: 60000 }
  },
  'video-editing': {
    basic: { usd: 200, ghs: 2400 },
    professional: { usd: 500, ghs: 6000 },
    premium: { usd: 1000, ghs: 12000 }
  },
  'social-media': {
    starter: { usd: 300, ghs: 3600 },
    growth: { usd: 600, ghs: 7200 },
    enterprise: { usd: 1200, ghs: 14400 }
  },
  'digital-marketing': {
    starter: { usd: 400, ghs: 4800 },
    growth: { usd: 800, ghs: 9600 },
    enterprise: { usd: 1500, ghs: 18000 }
  }
};

export const getCurrencySymbol = (currency: 'USD' | 'GHS'): string => {
  return currency === 'USD' ? '$' : '₵';
};

export const formatCurrency = (amount: number, currency: 'USD' | 'GHS'): string => {
  const symbol = getCurrencySymbol(currency);
  const formattedAmount = currency === 'GHS' ? amount.toLocaleString() : amount.toString();
  return `${symbol}${formattedAmount}`;
};