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
 * 格式化一个时长，以中文形式显示。
 *
 * @param {Number} seconds
 *     表示时长的秒数。
 * @param {String} precision
 *     格式化后时长的最高精度，可选值为'hour', 'minute'和'second'，默认值为
 *     'second'。
 * @param {Boolean} preferNonZero
 *     是否保留最后一个非零字段。例如，要求精度是'minute'，实际时长是43秒，如果
 *     此参数设置为false，则应显示"1分钟"（四舍五入43秒为1分钟）；如果此参数设
 *     为true，则应显示43秒。
 * @return
 *     对该时长的格式化字符串，形式为"H小时m分s秒"。
 * @author 胡海星
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
  if (hours === 0 && minutes === 0) {
    // hours === 0, minutes === 0, seconds ?== 0
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
  } else if (hours === 0) {
    if (seconds === 0) {
       // hours === 0, minutes !== 0, seconds === 0
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
    } else {
      // hours === 0, minutes !== 0, seconds !== 0
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
  } else {                  // hours !== 0
    if (minutes === 0 && seconds === 0) {
      // hours !== 0, minutes === 0, seconds === 0
      return `${hours}小时`;
    } else if (seconds === 0) {
      // hours !== 0, minutes !== 0, seconds === 0
      switch (precision) {
        case 'hour':
          return `${hours + (minutes >= 30 ? 1 : 0)}小时`;
        case 'minute':
        case 'second':
        default:
          return `${hours}小时${minutes}分钟`;
      }
    } else if (minutes === 0) {
      // hours !== 0, minutes === 0, seconds !== 0
      switch (precision) {
        case 'hour':
          return `${hours}小时`;
        case 'minute':
          return `${hours}小时${(seconds >= 30 ? '1分钟' : '')}`;
        case 'second':
        default:
          return `${hours}小时${minutes}分${seconds}秒`;
      }
    } else {
      // hours !== 0, minutes !== 0, seconds !== 0
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
  }
}

export default formatChineseDuration;
