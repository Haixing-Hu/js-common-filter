////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import formatChineseDurationBetween from '../src/chinese-duration-between';

describe('src/chinese-duration-between.js', () => {
  test('相同时间点', () => {
    const start = new Date('2023-01-15T10:00:00');
    const end = new Date('2023-01-15T10:00:00');
    expect(formatChineseDurationBetween(start, end)).toBe('0秒');
  });

  test('相差不足一分钟', () => {
    const start = new Date('2023-01-15T10:00:00');
    const end = new Date('2023-01-15T10:00:30');
    expect(formatChineseDurationBetween(start, end)).toBe('30秒');
  });

  test('相差一分钟', () => {
    const start = new Date('2023-01-15T10:00:00');
    const end = new Date('2023-01-15T10:01:00');
    expect(formatChineseDurationBetween(start, end)).toBe('1分钟');
  });

  test('相差一分钟三十秒', () => {
    const start = new Date('2023-01-15T10:00:00');
    const end = new Date('2023-01-15T10:01:30');
    expect(formatChineseDurationBetween(start, end)).toBe('1分30秒');
  });

  test('相差一小时', () => {
    const start = new Date('2023-01-15T10:00:00');
    const end = new Date('2023-01-15T11:00:00');
    expect(formatChineseDurationBetween(start, end)).toBe('1小时');
  });

  test('相差一小时三十分钟', () => {
    const start = new Date('2023-01-15T10:00:00');
    const end = new Date('2023-01-15T11:30:00');
    expect(formatChineseDurationBetween(start, end)).toBe('1小时30分钟');
  });

  test('使用precision=minute', () => {
    const start = new Date('2023-01-15T10:00:00');
    const end = new Date('2023-01-15T11:30:45');
    expect(formatChineseDurationBetween(start, end, 'minute')).toBe('1小时31分钟');
  });

  test('使用precision=hour', () => {
    const start = new Date('2023-01-15T10:00:00');
    const end = new Date('2023-01-15T11:30:45');
    expect(formatChineseDurationBetween(start, end, 'hour')).toBe('2小时');
  });

  test('使用preferNonZero=true', () => {
    const start = new Date('2023-01-15T10:00:00');
    const end = new Date('2023-01-15T10:00:45');
    expect(formatChineseDurationBetween(start, end, 'minute', true)).toBe('45秒');
  });

  test('开始时间晚于结束时间', () => {
    const start = new Date('2023-01-15T11:00:00');
    const end = new Date('2023-01-15T10:00:00');
    expect(formatChineseDurationBetween(start, end)).toBe('无');
  });

  test('使用字符串格式的时间', () => {
    expect(formatChineseDurationBetween('2023-01-15T10:00:00', '2023-01-15T11:30:45')).toBe('1小时30分45秒');
  });
}); 