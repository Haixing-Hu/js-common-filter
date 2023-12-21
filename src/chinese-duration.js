////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { round } from '@haixing_hu/common-util';

/**
 * Formats a duration and display it in Chinese.
 *
 * @param {number} seconds
 *     The seconds of the duration, which is in the range of [0, 60).
 * @param {string} precision
 *     The highest precision of the formatted duration. Available values are
 *     `'hour'`, `'minute'` and `'second'`.
 * @param {boolean} preferNonZero
 *     Whether to retain the last non-zero field. For example, assume the required
 *     precision is `'minute'`, and the actual duration is 43 seconds. If this
 *     argument is set to `false`, `1 minute` should be displayed (that is, 43
 *     seconds is rounded to 1 minute); if this argument is set to `true`, `43
 *     seconds` should be displayed.
 * @returns {string}
 *     The format string of the duration, in the form of `H hours m minutes s seconds`.
 * @author Haixing Hu
 * @private
 */
function formatForSeconds(seconds, precision, preferNonZero) {
  if (preferNonZero) {
    return `${seconds}秒`;
  } else {
    switch (precision) {
      case 'hour':
        return '0小时';
      case 'minute':
        return `${seconds >= 30 ? 1 : 0}分钟`;
      case 'second':
      default:
        return `${seconds}秒`;
    }
  }
}

/**
 * Formats a duration and display it in Chinese.
 *
 * @param {number} minutes
 *     The minutes of the duration, which is in the range of [0, 60).
 * @param {string} precision
 *     The highest precision of the formatted duration. Available values are
 *     `'hour'`, `'minute'` and `'second'`.
 * @param {boolean} preferNonZero
 *     Whether to retain the last non-zero field. For example, assume the required
 *     precision is `'minute'`, and the actual duration is 43 seconds. If this
 *     argument is set to `false`, `1 minute` should be displayed (that is, 43
 *     seconds is rounded to 1 minute); if this argument is set to `true`, `43
 *     seconds` should be displayed.
 * @returns {string}
 *     The format string of the duration, in the form of `H hours m minutes s seconds`.
 * @author Haixing Hu
 * @private
 */
function formatForMinutes(minutes, precision, preferNonZero) {
  if (preferNonZero) {
    return `${minutes}分钟`;
  } else {
    switch (precision) {
      case 'hour':
        return `${minutes >= 30 ? 1 : 0}小时`;
      case 'minute':
      case 'second':
      default:
        return `${minutes}分钟`;
    }
  }
}

/**
 * Formats a duration and display it in Chinese.
 *
 * @param {number} minutes
 *     The minutes of the duration, which is in the range of [0, 60).
 * @param {number} seconds
 *     The seconds of the duration, which is in the range of [0, 60).
 * @param {string} precision
 *     The highest precision of the formatted duration. Available values are
 *     `'hour'`, `'minute'` and `'second'`.
 * @param {boolean} preferNonZero
 *     Whether to retain the last non-zero field. For example, assume the required
 *     precision is `'minute'`, and the actual duration is 43 seconds. If this
 *     argument is set to `false`, `1 minute` should be displayed (that is, 43
 *     seconds is rounded to 1 minute); if this argument is set to `true`, `43
 *     seconds` should be displayed.
 * @returns {string}
 *     The format string of the duration, in the form of `H hours m minutes s seconds`.
 * @author Haixing Hu
 * @private
 */
function formatForMinutesSeconds(minutes, seconds, precision, preferNonZero) {
  if (preferNonZero) {
    switch (precision) {
      case 'hour':
      case 'minute':
        return `${minutes + (seconds >= 30 ? 1 : 0)}分钟`;
      case 'second':
      default:
        return `${minutes}分${seconds}秒`;
    }
  } else {
    switch (precision) {
      case 'hour':
        return `${minutes >= 30 ? 1 : 0}小时`;
      case 'minute':
        return `${minutes + (seconds >= 30 ? 1 : 0)}分钟`;
      case 'second':
      default:
        return `${minutes}分${seconds}秒`;
    }
  }
}

/**
 * Formats a duration and display it in Chinese.
 *
 * @param {number} hours
 *     The hours of the duration, which is non-zero.
 * @param {number} minutes
 *     The minutes of the duration, which is in the range of [0, 60).
 * @param {string} precision
 *     The highest precision of the formatted duration. Available values are
 *     `'hour'`, `'minute'` and `'second'`.
 * @returns {string}
 *     The format string of the duration, in the form of `H hours m minutes s seconds`.
 * @author Haixing Hu
 * @private
 */
function formatForHoursMinutes(hours, minutes, precision) {
  switch (precision) {
    case 'hour':
      return `${hours + (minutes >= 30 ? 1 : 0)}小时`;
    case 'minute':
    case 'second':
    default:
      return `${hours}小时${minutes}分钟`;
  }
}

/**
 * Formats a duration and display it in Chinese.
 *
 * @param {number} hours
 *     The hours of the duration, which is non-zero.
 * @param {number} seconds
 *     The seconds of the duration, which is in the range of [0, 60).
 * @param {string} precision
 *     The highest precision of the formatted duration. Available values are
 *     `'hour'`, `'minute'` and `'second'`.
 * @returns {string}
 *     The format string of the duration, in the form of `H hours m minutes s seconds`.
 * @author Haixing Hu
 * @private
 */
function formatForHoursSeconds(hours, seconds, precision) {
  switch (precision) {
    case 'hour':
      return `${hours}小时`;
    case 'minute':
      return `${hours}小时${(seconds >= 30 ? '1分钟' : '')}`;
    case 'second':
    default:
      return `${hours}小时0分${seconds}秒`;
  }
}

/**
 * Formats a duration and display it in Chinese.
 *
 * @param {number} hours
 *     The hours of the duration, which is non-zero.
 * @param {number} minutes
 *     The minutes of the duration, which is in the range of [0, 60).
 * @param {number} seconds
 *     The seconds of the duration, which is in the range of [0, 60).
 * @param {string} precision
 *     The highest precision of the formatted duration. Available values are
 *     `'hour'`, `'minute'` and `'second'`.
 * @returns {string}
 *     The format string of the duration, in the form of `H hours m minutes s seconds`.
 * @author Haixing Hu
 * @private
 */
function formatForHoursMinutesSeconds(hours, minutes, seconds, precision) {
  switch (precision) {
    case 'hour':
      return `${hours + (minutes >= 30 ? 1 : 0)}小时`;
    case 'minute':
      return `${hours}小时${minutes + (seconds >= 30 ? 1 : 0)}分钟`;
    case 'second':
    default:
      return `${hours}小时${minutes}分${seconds}秒`;
  }
}

/**
 * Formats a duration and display it in Chinese.
 *
 * @param {number} seconds
 *     The duration in seconds.
 * @param {string} precision
 *     The highest precision of the formatted duration. Available values are
 *     `'hour'`, `'minute'` and `'second'`. The default value is `'second'`.
 * @param {boolean} preferNonZero
 *     Whether to retain the last non-zero field. For example, assume the required
 *     precision is `'minute'`, and the actual duration is 43 seconds. If this
 *     argument is set to `false`, `1 minute` should be displayed (that is, 43
 *     seconds is rounded to 1 minute); if this argument is set to `true`, `43
 *     seconds` should be displayed. The default value of this argument is `false`.
 * @return
 *     The format string of the duration, in the form of `H hours m minutes s seconds`.
 * @author Haixing Hu
 */
function formatChineseDuration(seconds, precision = 'second', preferNonZero = false) {
  if (!['hour', 'minute', 'second'].includes(precision)) {
    throw new Error('Unsupported precision: only "hour", "minute" and "second" is supported.');
  }
  if ((seconds === undefined)
      || (seconds === null)
      || (typeof seconds !== 'number')
      || (seconds < 0)) {
    return '无';
  }
  if (!Number.isInteger(seconds)) {
    seconds = round(seconds);
  }
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;
  if (hours === 0 && minutes === 0) {           // hours === 0, minutes === 0, seconds ?== 0
    return formatForSeconds(seconds, precision, preferNonZero);
  } else if (hours === 0) {
    if (seconds === 0) {                        // hours === 0, minutes !== 0, seconds === 0
      return formatForMinutes(minutes, precision, preferNonZero);
    } else {                                    // hours === 0, minutes !== 0, seconds !== 0
      return formatForMinutesSeconds(minutes, seconds, precision, preferNonZero);
    }
  } else if (minutes === 0 && seconds === 0) {  // hours !== 0, minutes === 0, seconds === 0
    return `${hours}小时`;
  } else if (seconds === 0) {                   // hours !== 0, minutes !== 0, seconds === 0
    return formatForHoursMinutes(hours, minutes, precision);
  } else if (minutes === 0) {                   // hours !== 0, minutes === 0, seconds !== 0
    return formatForHoursSeconds(hours, seconds, precision);
  } else {                                      // hours !== 0, minutes !== 0, seconds !== 0
    return formatForHoursMinutesSeconds(hours, minutes, seconds, precision);
  }
}

export default formatChineseDuration;
