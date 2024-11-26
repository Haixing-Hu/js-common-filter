////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import toTimezone from './to-timezone';

/**
 * Formats a date time in the specified time zone and reserve only its year-month part.
 *
 * @param {string|Date} dateTime
 *     a datetime value, either a string in the ISO-8601 format, or a {@link Date}
 *     object.
 * @param {string|undefined} tz
 *     the specified timezone. If it is `undefined`, or `null`, or empty strings,
 *     the local timezone is used. Default value of this argument is `undefined`.
 * @returns {string|null}
 *     the year-month part of the formatted date time, in the predefined format.
 *     If the input is `null` or `undefined` or empty string, this function
 *     returns `null`.
 * @author Haixing Hu
 */
function formatYearMonth(dateTime, tz = undefined) {
  if (dateTime) {
    return toTimezone(dateTime, tz).format('YYYY-MM');
  } else {
    return null;
  }
}

export default formatYearMonth;
