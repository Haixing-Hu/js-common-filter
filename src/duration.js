////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { round } from '@njzhyl/common-util';

/**
 * 将一个数字转换为字符串，如果数字转换后的字符串不足2位，在前面补'0'。
 *
 * @param {Number} num
 *     带转换的数字。
 * @returns
 *     转换结果。
 * @author 胡海星
 * @private
 */
function twoDigits(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
}

/**
 * 格式化一个时长。
 *
 * @param {Number} seconds
 *     表示时长的秒数。
 * @param {String} precision
 *     格式化后时长的最高精度，可选值为'hour', 'minute'和'second'，默认值为
 *     'second'。
 * @return
 *     对该时长的格式化字符串，形式为"HH:mm:ss"或"HH:mm"或"HH"，取决于精度。
 * @author 胡海星
 */
function formatDuration(seconds, precision = 'second') {
  if (!['hour', 'minute', 'second'].includes(precision)) {
    throw new Error('Unsupported precision: only "hour", "minute" and "second" is supported.');
  }
  if ((seconds === undefined)
      || (seconds === null)
      || (typeof seconds !== 'number')
      || (seconds < 0)) {
    switch (precision) {
      case 'hour':
        return '00';
      case 'minute':
      case 'second':
      default:
        return '00:00';
    }
  }
  if (!Number.isInteger(seconds)) {
    seconds = round(seconds);
  }
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;
  switch (precision) {
    case 'hour':
      return `${twoDigits(hours + (minutes >= 30 ? 1 : 0))}`;
    case 'minute':
      if (hours === 0) {
        return `${twoDigits(minutes + (seconds >= 30 ? 1 : 0))}`;
      } else {
        return `${twoDigits(hours)}:${twoDigits(minutes + (seconds >= 30 ? 1 : 0))}`;
      }
    case 'second':
    default:
      if (hours === 0) {
        return `${twoDigits(minutes)}:${twoDigits(seconds)}`;
      } else {
        return `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
      }
  }
}

export default formatDuration;
