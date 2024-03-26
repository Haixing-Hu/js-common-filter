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

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Creates a Day.js object from a value, in the specified timezone.
 *
 * @param {string|Date|dayjs} value
 *     a datetime value, either a string in the ISO-8601 format, or a {@link Date}
 *     object, or a {@link dayjs} object.
 * @param {string|undefined} tz
 *     the specified timezone. If it is `undefined`, or `null`, or empty strings,
 *     the local timezone is used. If it is `'UTC'` (case-insensitively) , the
 *     UTC timezone is used. The default value of this argument is `undefined`.
 */
function toDayjs(value, tz = undefined) {
  let result = dayjs(value);
  if (tz) {
    if (tz.trim().toLowerCase() === 'utc') {
      result = result.utc();
    } else {
      result = result.tz(tz);
    }
  }
  return result;
}

export default toDayjs;
