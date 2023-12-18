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
 * Formats a datetime in the specified time zone.
 *
 * @param {string|Date}dateTime
 *     a datetime value, either a string in the ISO-8601 format, or a {@link Date}
 *     object.
 * @return {string}
 *     the formatted date time, in the local time zone.
 * @author Haixing Hu
 */
function formatDatetime(dateTime) {
  if (dateTime) {
    return dayjs(dateTime).format('YYYY-MM-DD HH:mm:ss');
  } else {
    return null;
  }
}

export default formatDatetime;
