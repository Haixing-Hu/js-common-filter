////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import dayjs from 'dayjs';

/**
 * Formats a date time in the specified time zone and reserve only its time part.
 *
 * @param {string|Date} dateTime
 *     a datetime value, either a string in the ISO-8601 format, or a {@link Date}
 *     object.
 * @return {string|null}
 *     the time part of the formatted date time, in the local time zone, or
 *     `null` if the input is `null` or `undefined` or empty string.
 * @author Haixing Hu
 */
function formatLocalTime(dateTime) {
  if (dateTime) {
    return dayjs(dateTime).format('HH:mm:ss');
  } else {
    return null;
  }
}

export default formatLocalTime;
