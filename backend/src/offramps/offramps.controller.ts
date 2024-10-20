import { Controller, Post, Res, HttpStatus, Query } from "@nestjs/common";
import { OfframpsService } from "./offramps.service";
import { QuoteOfframpRequest } from "./dto/quote-offramp.request";

@Controller("offramps")
export class OfframpsController {
  constructor(private readonly offrampsService: OfframpsService) {}

  @Post("/quote")
  async quote(@Query() quoteOfframpDto: QuoteOfframpRequest, @Res() res) {
    console.log("Quote offramp dto: ", quoteOfframpDto);
    const quoteResponse = await this.offrampsService.quote(quoteOfframpDto);
    return res.status(HttpStatus.OK).json(quoteResponse);
  }
}
