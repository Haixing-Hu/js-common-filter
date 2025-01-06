////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { round } from '@qubit-ltd/common-util';

/**
 * 默认的格式化选项。
 */
const DEFAULT_OPTIONS = {
  precision: 'second',
  full: false,
};

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
 * @param {Object} options
 *     格式化选项。目前支持下面属性：
 *     - `precision`: 格式化后时长的最高精度，可选值为'hour', 'minute'和'second'，
 *       默认值为'second'。
 *     - `full`: 是否使用全格式"HH:mm:ss"，即不省略前导的'0'，默认值为`false`。
 * @return
 *     对该时长的格式化字符串，形式为"HH:mm:ss"或"HH:mm"或"HH"，取决于精度。
 * @author 胡海星
 */
function formatDuration(seconds, options = DEFAULT_OPTIONS) {
  const precision = options?.precision ?? DEFAULT_OPTIONS.precision;
  const full = options?.full ?? DEFAULT_OPTIONS.full;
  if (!['hour', 'minute', 'second'].includes(precision)) {
    throw new Error('Unsupported precision: only "hour", "minute" and "second" is supported.');
  }
  if ((seconds === undefined)
      || (seconds === null)
      || (typeof seconds !== 'number')
      || (seconds < 0)) {
    if (full) {
      return '00:00:00';
    }
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
  let hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  let minutes = Math.floor(seconds / 60);
  seconds %= 60;
  switch (precision) {
    case 'hour':
      hours += (minutes >= 30 ? 1 : 0);
      if (full) {
        return `${twoDigits(hours)}:00:00`;
      }
      return `${twoDigits(hours)}`;
    case 'minute':
      minutes += (seconds >= 30 ? 1 : 0);
      if (full) {
        return `${twoDigits(hours)}:${twoDigits(minutes)}:00`;
      }
      if (hours === 0) {
        return `${twoDigits(minutes)}`;
      } else {
        return `${twoDigits(hours)}:${twoDigits(minutes)}`;
      }
    case 'second':
    default:
      if (full) {
        return `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
      }
      if (hours === 0) {
        return `${twoDigits(minutes)}:${twoDigits(seconds)}`;
      } else {
        return `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
      }
  }
}

export { DEFAULT_OPTIONS };

export default formatDuration;
