import { Injectable } from "@nestjs/common";
import { OfframpQuoteRequest } from "./request/offramp-quote.request";
import { OfframpQuoteResponse } from "./response/offramp-quote.response";
import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";
import EnvUtils from "../../utils/env.utils";
import ParseUtils from "../../utils/parse.utils";

@Injectable()
export class UnlimitClient {
  static unlimitApi: AxiosInstance = axios.create({
    baseURL: `https://api-sandbox.gatefi.com/`,
    timeout: EnvUtils.requestTimeout,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": `${EnvUtils.unlimitApiKey}`,
      signature: `${EnvUtils.unlimitSignature}`,
    },
  } as CreateAxiosDefaults);

  async quote(
    offrampQuoteRequest: OfframpQuoteRequest
  ): Promise<OfframpQuoteResponse> {
    try {
      const response = await UnlimitClient.unlimitApi.get<OfframpQuoteResponse>(
        "offramp/v1/quotes",
        {
          params: {
            ...offrampQuoteRequest,
            partnerAccountId: EnvUtils.unlimitPartnerAccountId,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Quote error: ", error.response.data);
    }
  }
}
