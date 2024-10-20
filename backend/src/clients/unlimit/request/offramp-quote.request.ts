export class OfframpQuoteRequest {
    fiatAmount?: number;
    payment: string;
    fiat: string;
    crypto: string;
    region: string;
    calcByFiat: boolean;
    cryptoAmount?:number;
}
