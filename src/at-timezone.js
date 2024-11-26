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
 *     a datetime value, represented as a string in the specified timezone.
 * @param {string|undefined} tz
 *     the specified timezone. If it is `undefined`, or `null`, or empty strings,
 *     the local timezone is used. If it is `'UTC'` (case-insensitively) , the
 *     UTC timezone is used. The default value of this argument is `undefined`.
 * @return {dayjs|null}
 *     a Day.js object created from the value, in the specified timezone. If the
 *     value is `null`, `undefined`, or an empty string, this function returns
 *     `null`.
 * @author Haixing Hu
 */
function atTimezone(value, tz = undefined) {
  if (value === null || value === undefined || value === '') {
    return null;
  }
  let result;
  if (tz) {
    if (tz.trim().toLowerCase() === 'utc') {
      result = dayjs.utc(value);
    } else {
      result = dayjs.tz(value, tz);
    }
  } else {  // local timezone
    result = dayjs(value);
  }
  if (!result.isValid()) {
    throw new TypeError(`The value is not a valid datetime: ${value}`);
  }
  return result;
}

export default atTimezone;
