////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import formatTime from './time';

/**
 * Formats a date time in the specified time zone and reserve only its time part.
 *
 * @param {string|Date} startTime
 *     the starting time, either a string in the ISO-8601 format, or a {@link Date}
 *     object.
 * @param {string|Date} endTime
 *     the ending time, either a string in the ISO-8601 format, or a {@link Date}
 *     object.
 * @param {string|undefined} tz
 *     the specified timezone. If it is `undefined`, or `null`, or empty strings,
 *     the local timezone is used. Default value of this argument is `undefined`.
 * @returns {string|null}
 *     the formatted time range, in the predefined format.
 * @author Haixing Hu
 */
function formatTimeRange(startTime, endTime, tz = undefined) {
  const start = formatTime(startTime, tz) || '--';
  const end = formatTime(endTime, tz) || '--';
  return `${start} 至 ${end}`;
}

export default formatTimeRange;
