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
 * Formats a datetime in the specified time zone and reserve only its date part.
 *
 * @param {string|Date}dateTime
 *     a datetime value, either a string in the ISO-8601 format, or a {@link Date}
 *     object.
 * @returns {string}
 *     the formatted date time, in the local timezone, displayed in the Chinese
 *     form.
 * @author Haixing Hu
 */
function formatDatetimeInChinese(dateTime) {
  if (!dateTime) {
    return '';
  }
  const time = dayjs(dateTime);
  let datetimeFormat = DATETIME_FORMAT_HOUR;
  if (time.second() !== 0) {
    datetimeFormat = DATETIME_FORMAT_SECOND;
  } else if (time.minute() !== 0) {
    datetimeFormat = DATETIME_FORMAT_MINUTE;
  }
  return time.format(datetimeFormat);
}

export default formatDatetimeInChinese;
