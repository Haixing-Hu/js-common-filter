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
 * The format of local datetime, which the full precision to seconds.
 */
const DATETIME_FORMAT_SECOND = 'YYYY年M月D日H点m分s秒';

/**
 * The format of local datetime, which the precision to minutes.
 */
const DATETIME_FORMAT_MINUTE = 'YYYY年M月D日H点m分';

/**
 * The format of local datetime, which the precision to hours.
 */
const DATETIME_FORMAT_HOUR = 'YYYY年M月D日H点';

/**
 * Formats a date time in the specified time zone and reserve its date time part,
 * displaying in Chinese.
 *
 * @param {string|Date}dateTime
 *     a datetime value, either a string in the ISO-8601 format, or a {@link Date}
 *     object.
 * @param {string|undefined} tz
 *     the specified timezone. If it is `undefined`, or `null`, or empty strings,
 *     the local timezone is used. Default value of this argument is `undefined`.
 * @returns {string}
 *     the formatted date time, in the local timezone, displayed in the Chinese
 *     form.
 * @author Haixing Hu
 */
function formatDatetimeInChinese(dateTime, tz = undefined) {
  if (!dateTime) {
    return '';
  }
  const time = toDayjs(dateTime, tz);
  let format = DATETIME_FORMAT_HOUR;
  if (time.second() !== 0) {
    format = DATETIME_FORMAT_SECOND;
  } else if (time.minute() !== 0) {
    format = DATETIME_FORMAT_MINUTE;
  }
  return time.format(format);
}

export default formatDatetimeInChinese;
