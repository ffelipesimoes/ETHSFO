export class QuoteOfframpRequest {
  targetMethod: string;
  targetCurrencyISO3: string;
  targetRegionISO2: string;
  targetAmount?: number;
  sourceCurrencyISO3: string;
  sourceAmount?: number;
}
