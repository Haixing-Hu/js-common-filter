////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import dayjs from 'dayjs';
import formatDuration, { DEFAULT_OPTIONS } from './duration';

/**
 * 格式化两个时间点之间的时长，形式为"HH:mm:ss"。
 *
 * @param {string|Date} startTime
 *     开始时间点。
 * @param {string|Date} endTime
 *     结束时间点。
 * @param {Object} options
 *     格式化选项。目前支持下面属性：
 *     - `precision`: 格式化后时长的最高精度，可选值为'hour', 'minute'和'second'，
 *       默认值为'second'。
 *     - `full`: 是否使用全格式"HH:mm:ss"，即不省略前导的'0'，默认值为`false`。
 * @return {stirng}
 *     对该两个时间点之间时长的格式化字符串，形式为"HH:mm:ss"。
 * @author 胡海星
 */
function formatDurationBetween(startTime, endTime, options = DEFAULT_OPTIONS) {
  const start = dayjs(startTime);
  const end = dayjs(endTime);
  const diff = end.diff(start, 'second');
  return formatDuration(diff, options);
}

export default formatDurationBetween;
