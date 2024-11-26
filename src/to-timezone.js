////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import { ISO8601_REGEXP } from './impl/regexp.js';

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Creates a Day.js object from a string representation of a time value,
 * convert it to the specified timezone.
 *
 * @param {string|Date|dayjs} datetime
 *     a datetime value, either a string in the ISO-8601 format, or a {@link Date}
 *     object, or a {@link dayjs} object.
 * @param {string|undefined} tz
 *     the specified timezone. If it is `undefined`, or `null`, or empty strings,
 *     the local timezone is used. If it is `'UTC'` (case-insensitively) , the
 *     UTC timezone is used. The default value of this argument is `undefined`.
 * @return {dayjs|null}
 *     a Day.js object represent the same datetime as the argument `datetime`,
 *     but convert its internal timezone to the specified timezone. If
 * @author Haixing Hu
 */
function toTimezone(datetime, tz = undefined) {
  if (datetime === null || datetime === undefined || datetime === '') {
    return null;
  }
  if (typeof datetime === 'string' || (datetime instanceof String)) {
    if (!ISO8601_REGEXP.test(datetime)) {
      throw new TypeError(`The datetime string is not in the loose ISO-8601 format: ${datetime}`);
    }
  } else if (!(datetime instanceof Date) && !dayjs.isDayjs(datetime)) {
    throw new TypeError(`The datetime must be a string, a Date object, or a Day.js object: ${datetime}`);
  }
  let result = dayjs(datetime);
  if (!result.isValid()) {
    throw new TypeError(`The datetime is not valid: ${datetime}`);
  }
  if (tz) {
    if (tz.trim().toLowerCase() === 'utc') {
      result = result.utc();
    } else {
      result = result.tz(tz);
    }
  }
  return result;
}

export default toTimezone;
