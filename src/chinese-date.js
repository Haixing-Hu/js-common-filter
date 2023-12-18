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
 *     the date part of the formatted date time, in the local timezone, displayed
 *     in the Chinese form.
 * @author Haixing Hu
 */
function formatDateInChinese(dateTime) {
  if (dateTime) {
    return dayjs(dateTime).format('YYYY年M月D日');
  } else {
    return null;
  }
}

export default formatDateInChinese;
