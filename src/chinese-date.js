////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import toDayjs from './impl/to-dayjs';

/**
 * Formats a date time in the specified time zone and reserve only its date part,
 * displaying in Chinese.
 *
 * @param {string|Date} dateTime
 *     a datetime value, either a string in the ISO-8601 format, or a {@link Date}
 *     object.
 * @param {string|undefined} tz
 *     the specified timezone. If it is `undefined`, or `null`, or empty strings,
 *     the local timezone is used. Default value of this argument is `undefined`.
 * @returns {string}
 *     the date part of the formatted date time, in the local timezone, displayed
 *     in the Chinese form.
 * @author Haixing Hu
 */
function formatDateInChinese(dateTime, tz = undefined) {
  if (dateTime) {
    return toDayjs(dateTime, tz).format('YYYY年M月D日');
  } else {
    return null;
  }
}

export default formatDateInChinese;
