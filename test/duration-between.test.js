////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import formatDurationBetween from '../src/duration-between';

describe('src/duration-between.js', () => {
  test('同一时间点', () => {
    const start = new Date('2023-01-15T10:00:00');
    const end = new Date('2023-01-15T10:00:00');
    expect(formatDurationBetween(start, end)).toBe('00:00');
  });

  test('相差一分钟', () => {
    const start = new Date('2023-01-15T10:00:00');
    const end = new Date('2023-01-15T10:01:00');
    expect(formatDurationBetween(start, end)).toBe('01:00');
  });

  test('相差一小时', () => {
    const start = new Date('2023-01-15T10:00:00');
    const end = new Date('2023-01-15T11:00:00');
    expect(formatDurationBetween(start, end)).toBe('01:00:00');
  });

  test('相差一天', () => {
    const start = new Date('2023-01-15T10:00:00');
    const end = new Date('2023-01-16T10:00:00');
    expect(formatDurationBetween(start, end)).toBe('24:00:00');
  });

  test('使用precision选项', () => {
    const start = new Date('2023-01-15T10:00:00');
    const end = new Date('2023-01-15T11:30:45');
    expect(formatDurationBetween(start, end, { precision: 'minute' })).toBe('01:31');
  });

  test('使用full选项', () => {
    const start = new Date('2023-01-15T10:00:00');
    const end = new Date('2023-01-15T10:05:03');
    expect(formatDurationBetween(start, end, { full: true })).toBe('00:05:03');
  });

  test('开始时间大于结束时间', () => {
    const start = new Date('2023-01-15T11:00:00');
    const end = new Date('2023-01-15T10:00:00');
    expect(formatDurationBetween(start, end)).toBe('00:00');
  });

  test('使用字符串格式的时间', () => {
    expect(formatDurationBetween('2023-01-15T10:00:00', '2023-01-15T11:30:45')).toBe('01:30:45');
  });
}); 