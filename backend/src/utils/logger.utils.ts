/* istanbul ignore file */
import { createLogger, format, transports } from 'winston';
import DateUtils from './date.utils';

const { combine } = format;

const { NODE_ENV, ENV } = process.env;
const isLocal = !!NODE_ENV;

const appendData = format((info) => {
  if (!isLocal) {
    info.timestamp = DateUtils.localMoment().toDate();
    info.level = info.level.toUpperCase();
    info.env = ENV;
  }
  return info;
});

const logger = createLogger({
  format: combine(appendData(), isLocal ? format.simple() : format.json()),
  transports: [new transports.Console()],
});

export default logger;
