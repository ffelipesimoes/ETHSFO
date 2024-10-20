import { MOMENT_TZ_UTC } from "./constants.utils";
import logger from "./logger.utils";
import { configDotenv } from "dotenv";

process.env.TZ = MOMENT_TZ_UTC;

process.setMaxListeners(0);
process.on("uncaughtException", (error) => {
  console.log(error);
});
const NODE_ENV =
  process.env.stage || process.env.ENV || process.env.NODE_ENV || "local";
if (NODE_ENV)
  configDotenv({
    path: `.env.${NODE_ENV}`,
  });

const {
  REQUEST_TIMEOUT,
  UNLIMIT_BASE_URL,
  UNLIMIT_API_KEY,
  UNLIMIT_SIGNATURE,
  UNLIMIT_PARTNER_ACCOUNT_ID,
} = process.env;

export default class EnvUtils {
  static get requestTimeout(): number {
    return parseInt(REQUEST_TIMEOUT);
  }

  static get nodeEnv(): string {
    return NODE_ENV;
  }

  static get unlimitBaseUrl(): string {
    return UNLIMIT_BASE_URL;
  }

  static get unlimitApiKey(): string {
    return UNLIMIT_API_KEY;
  }

  static get unlimitSignature(): string {
    return UNLIMIT_SIGNATURE;
  }

  static get unlimitPartnerAccountId(): string {
    return UNLIMIT_PARTNER_ACCOUNT_ID;
  }

  static delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  static retry = async (
    method: () => Promise<any>,
    times = 2,
    delay: number = EnvUtils.requestTimeout,
    throws: boolean = true,
    exception = null
  ) => {
    try {
      if (times) {
        return await method();
      }
    } catch (e) {
      times--;
      await EnvUtils.delay(delay);
      return await EnvUtils.retry(method, times, delay, throws, e);
    }
    if (throws) throw exception;
    else logger.error(exception.message);
  };
}