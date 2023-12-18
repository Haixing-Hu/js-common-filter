////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * The format of the input local datetime.
 */
const DATETIME_REGEXP = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2}) (?<hour>\d{2}):(?<minute>\d{2}):(?<second>\d{2})/u;

/**
 * Formats a datetime in the specified time zone and reserve only its date part.
 *
 * @param {string} dateTime
 *     a datetime value, represented as a string of local datetime, with the
 *     format of 'YYYY-MM-DD HH:mm:ss'.
 * @returns {string}
 *     the formatted date time, in the local timezone, displayed in the Chinese
 *     form.
 * @author Haixing Hu
 */
function formatDatetimeInChinese(dateTime) {
  if (!dateTime) {
    return '';
  }
  const result = DATETIME_REGEXP.exec(dateTime);
  const year = Number.parseInt(result.groups.year, 10);
  const month = Number.parseInt(result.groups.month, 10);
  const day = Number.parseInt(result.groups.day, 10);
  const hour = Number.parseInt(result.groups.hour, 10);
  const minute = Number.parseInt(result.groups.minute, 10);
  const second = Number.parseInt(result.groups.second, 10);
  if (second !== 0) {
    return `${year}年${month}月${day}日${hour}点${minute}分${second}秒`;
  } else if (minute !== 0) {
    return `${year}年${month}月${day}日${hour}点${minute}分`;
  } else {
    return `${year}年${month}月${day}日${hour}点`;
  }
}

export default formatDatetimeInChinese;
