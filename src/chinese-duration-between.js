////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import dayjs from 'dayjs';
import formatChineseDuration from './chinese-duration';

/**
 * 格式化两个时间点之间的时长，以中文形式显示，形式为"H小时m分s秒"。
 *
 * @param {string|Date} startTime
 *     The start time point.
 * @param {string|Date} endTime
 *     The end time point.
 * @param {string} precision
 *     The precision of the formatted duration, which can be 'hour', 'minute' or
 *    'second', default value is 'second'.
 * @param {Boolean} preferNonZero
 *     Whether to prefer the last non-zero field. For example, if the precision
 *     is `'minute'` and the actual duration is 43 seconds, if this parameter is
 *     set to `false`, then the formatted duration should be `"1分钟"` (rounding
 *     43 seconds to 1 minute); if this parameter is set to `true`, then the
 *     formatted duration should be `"43秒"`.
 * @returns {string}
 *     The formatted duration between the two time points, in Chinese form, which
 *     has the form of `"H小时m分s秒"`.
 * @author Haixing Hu
 */
function formatChineseDurationBetween(
    startTime,
    endTime,
    precision = 'second',
    preferNonZero = false,
) {
  const start = dayjs(startTime);
  const end = dayjs(endTime);
  const diff = end.diff(start, 'second');
  return formatChineseDuration(diff, precision, preferNonZero);
}

export default formatChineseDurationBetween;
