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
      crypto: quoteOfframpDto.sourceCurrencyISO3,
      cryptoAmount: quoteOfframpDto.targetAmount
        ? undefined
        : quoteOfframpDto.sourceAmount,
      calcByFiat: !!quoteOfframpDto.targetAmount,
      fiat: quoteOfframpDto.targetCurrencyISO3,
      fiatAmount: quoteOfframpDto.targetAmount,
      payment: quoteOfframpDto.targetMethod,
      region: quoteOfframpDto.targetRegionISO2,
    });
    return {
      processingFee: ParseUtils.toNumber(response.processingFee),
      amountOut: ParseUtils.toNumber(response.amountOut),
      amountIn: ParseUtils.toNumber(response.amountIn),
      exchangeRate: ParseUtils.toNumber(response.exchangeRate),
      fiatBaseAmount: ParseUtils.toNumber(response.fiatBaseAmount),
      markupFee: ParseUtils.toNumber(response.markupFee),
    };
  }
}
