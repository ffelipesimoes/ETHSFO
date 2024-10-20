export class QuoteOfframpRequest {
  partnerAccountId: string;
  fiatAmount: number;
  payment: string;
  fiat: string;
  crypto: string;
  region: string;
  calcByFiat: string;
  cryptoAmount: number;
}
