////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import formatLocalTime from './time';

/**
 * 格式化一个时间区间。
 *
 * @param {String|Date} startTime
 *    开始时间，可以是 ISO-8601 格式的字符串表示形式，或者是一个 {@link Date} 对象。
 * @param {String|Date} endTime
 *    结束时间，可以是 ISO-8601 格式的字符串表示形式，或者是一个 {@link Date} 对象。
 * @return
 *    对该时间区间的格式化字符串，形式为"HH:mm:ss 至 HH:mm:ss"。
 * @author 胡海星
 */
function formatTimeRange(startTime, endTime) {
  const start = formatLocalTime(startTime) || '--';
  const end = formatLocalTime(endTime) || '--';
  return `${start} 至 ${end}`;
}

export default formatTimeRange;
