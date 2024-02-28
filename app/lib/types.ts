export interface PricePoint {
  time: number;
  value: number;
}

interface TokenData {
  series: PricePoint[];
  priceChangePercentage: number;
  minValue: number;
  maxValue: number;
}

interface JsonData {
  [token: string]: TokenData;
}

interface Data {
  json: JsonData;
}

interface Result {
  data: Data;
}

export interface ApiResponse {
  result: Result;
}

export interface TokenDetailedPrices {
  averagePrice: number;
  minPrice: number;
  maxPrice: number;
}

export interface TokenPrices {
  atom: TokenDetailedPrices;
  ntrn: TokenDetailedPrices;
}
