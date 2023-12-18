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
 * Formats a date time in the specified time zone and reserve only its date part.
 *
 * @param {string|Date} dateTime
 *     a datetime value, either a string in the ISO-8601 format, or a {@link Date}
 *     object.
 * @returns {string}
 *     the date part of the formatted date time, in the predefined format.
 * @author Haixing Hu
 */
function formatDate(dateTime) {
  if (dateTime) {
    return dayjs(dateTime).format('YYYY-MM-DD');
  } else {
    return null;
  }
}

export default formatDate;
