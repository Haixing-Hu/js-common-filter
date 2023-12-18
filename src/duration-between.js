////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import dayjs from 'dayjs';
import formatDuration from './duration';

/**
 * 格式化两个时间点之间的时长，形式为"HH:mm:ss"。
 *
 * @param {string|Date} startTime
 *     开始时间点。
 * @param {string|Date} endTime
 *     结束时间点。
 * @return {stirng}
 *     对该两个时间点之间时长的格式化字符串，形式为"HH:mm:ss"。
 * @author 胡海星
 */
function formatDurationBetween(startTime, endTime) {
  const start = dayjs(startTime);
  const end = dayjs(endTime);
  const diff = end.diff(start, 'second');
  return formatDuration(diff);
}

export default formatDurationBetween;
