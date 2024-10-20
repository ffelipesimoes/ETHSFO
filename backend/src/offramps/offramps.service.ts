import { Injectable } from "@nestjs/common";

import { QuoteOfframpRequest } from "./dto/quote-offramp.request";
import { UnlimitClient } from "../clients/unlimit/unlimit.client";
import { QuoteOfframpResponse } from "./dto/quote-offramp.response";
import ParseUtils from "../utils/parse.utils";

@Injectable()
export class OfframpsService {
  constructor(private readonly unlimitClient: UnlimitClient) {}

  async quote(
    quoteOfframpDto: QuoteOfframpRequest
  ): Promise<QuoteOfframpResponse> {
    const response = await this.unlimitClient.quote({
      crypto: quoteOfframpDto.crypto,
      cryptoAmount: quoteOfframpDto.cryptoAmount,
      calcByFiat: quoteOfframpDto.calcByFiat === "true",
      fiat: quoteOfframpDto.fiat,
      fiatAmount: quoteOfframpDto.fiatAmount,
      payment: quoteOfframpDto.payment,
      region: quoteOfframpDto.region,
    });
    return {
      processingFee: ParseUtils.toNumber(response.processingFee) || 0,
      amountOut: ParseUtils.toNumber(response.amountOut),
      amountIn: ParseUtils.toNumber(response.amountIn),
      exchangeRate: ParseUtils.toNumber(response.exchangeRate),
      fiatBaseAmount: ParseUtils.toNumber(response.fiatBaseAmount),
      markupFee: ParseUtils.toNumber(response.markupFee),
    };
  }
}
