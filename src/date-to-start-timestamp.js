////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import atTimezone from './at-timezone';
import { DATE_REGEXP } from './impl/regexp';

/**
 * Converts a date in the specified timezone to a UTC timestamp, which represents
 * the start time point of the date.
 *
 * @param {string} date
 *     the date to convert, represented as a string of local date, with the
 *     format of 'YYYY-MM-DD'. This date represents a time in the local timezone.
 *     If the input is `null` or `undefined` or empty string, this function returns
 *     an empty string.
 * @param {string|undefined} tz
 *     the specified timezone. If it is `undefined`, or `null`, or empty strings,
 *     the local timezone is used. Default value of this argument is `undefined`.
 * @return {string}
 *     the converted UTC timestamp, which represents the start of the day in the
 *     local timezone; or an empty string if the input is `null` or `undefined` or
 *     empty string.
 */
function dateToStartTimestamp(date, tz = undefined) {
  if (date === null || date === undefined || date === '') {
    return '';
  }
  if (!DATE_REGEXP.test(date)) {
    throw new TypeError(`The date must be in the format of "YYYY-MM-DD": ${date}`);
  }
  const startOfDay = `${date} 00:00:00`;
  // use day.js to parse the local date, and calculate the end of the day
  const time = atTimezone(startOfDay, tz);
  // convert the end of the day to the UTC timestamp
  return time.toISOString();
}

export default dateToStartTimestamp;
