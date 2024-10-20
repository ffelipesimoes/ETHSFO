import * as moment from 'moment-timezone';
import { MOMENT_TZ_UTC } from './constants.utils';
import {Moment} from "moment-timezone";

moment.tz.setDefault(MOMENT_TZ_UTC);

export default class DateUtils {
  static localMoment(): Moment {
    return moment().tz(MOMENT_TZ_UTC);
  }

  static newDateUtc(date?): Date {
    return moment(date || new Date())
      .utc(true)
      .toDate();
  }
}
