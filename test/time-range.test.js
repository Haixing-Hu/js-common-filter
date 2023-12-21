////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { formatLocalTime } from '@haixing_hu/common-util';
import { timeRange } from '../src';

/**
 * 单元测试 'src/time-range.js'
 *
 * @author 胡海星
 */
describe('src/time-range.js', () => {
  test('undefined, undefined', () => {
    expect(timeRange(undefined, undefined))
      .toBe('-- 至 --');
  });
  test('null, null', () => {
    expect(timeRange(null, null))
      .toBe('-- 至 --');
  });
  test('"", ""', () => {
    expect(timeRange('', ''))
      .toBe('-- 至 --');
  });
  test('"2020-10-28T12:31:01Z", null, "utc"', () => {
    expect(timeRange('2020-10-28T12:31:01Z', null, 'utc'))
      .toBe('12:31:01 至 --');
  });
  test('"", "2020-10-28T03:01:01Z", "utc"', () => {
    expect(timeRange('', '2020-10-28T03:01:01Z', 'utc'))
      .toBe('-- 至 03:01:01');
  });
  test('"2020-10-28T12:03:00+08:00", "2020-10-28T14:12:01+08:00", "utc"', () => {
    expect(timeRange('2020-10-28T12:03:00+08:00', '2020-10-28T14:12:01+08:00', 'utc'))
      .toBe('04:03:00 至 06:12:01');
  });
  test('"2020-10-28T12:03:00+08:00", "2020-10-29T04:12:01+08:00", "utc"', () => {
    expect(timeRange('2020-10-28T12:03:00+08:00', '2020-10-29T04:12:01+08:00', 'utc'))
      .toBe('04:03:00 至 20:12:01');
  });

  test('"2020-10-28T12:31:01Z", null', () => {
    const start = '2020-10-28T12:31:01Z';
    const expected = formatLocalTime(new Date(start));
    expect(timeRange(start, null)).toBe(`${expected} 至 --`);
  });
  test('"", "2020-10-28T03:01:01Z"', () => {
    const end = '2020-10-28T03:01:01Z';
    const expected = formatLocalTime(new Date(end));
    expect(timeRange('', end)).toBe(`-- 至 ${expected}`);
  });
  test('"2020-10-28T12:03:00+08:00", "2020-10-28T14:12:01+08:00"', () => {
    const start = '2020-10-28T12:03:00+08:00';
    const expectedStart = formatLocalTime(new Date(start));
    const end = '2020-10-28T14:12:01+08:00';
    const expectedEnd = formatLocalTime(new Date(end));
    expect(timeRange(start, end)).toBe(`${expectedStart} 至 ${expectedEnd}`);
  });
  test('"2020-10-28T12:03:00+08:00", "2020-10-29T04:12:01+08:00"', () => {
    const start = '2020-10-28T12:03:00+08:00';
    const expectedStart = formatLocalTime(new Date(start));
    const end = '2020-10-29T04:12:01+08:00';
    const expectedEnd = formatLocalTime(new Date(end));
    expect(timeRange(start, end)).toBe(`${expectedStart} 至 ${expectedEnd}`);
  });

  test('"2020-10-28T12:31:01Z", null, Asia/Ust-Nera (UTC+10)', () => {
    const start = '2020-10-28T12:31:01Z';
    expect(timeRange(start, null, 'Asia/Ust-Nera')).toBe('22:31:01 至 --');
  });
  test('"", "2020-10-28T03:01:01Z", Asia/Ust-Nera (UTC+10)', () => {
    const end = '2020-10-28T03:01:01Z';
    expect(timeRange('', end, 'Asia/Ust-Nera')).toBe('-- 至 13:01:01');
  });
  test('"2020-10-28T12:03:00+08:00", "2020-10-28T14:12:01+08:00", Asia/Ust-Nera (UTC+10)', () => {
    const start = '2020-10-28T12:03:00+08:00';
    const end = '2020-10-28T14:12:01+08:00';
    expect(timeRange(start, end, 'Asia/Ust-Nera')).toBe('14:03:00 至 16:12:01');
  });
  test('"2020-10-28T12:03:00+08:00", "2020-10-29T04:12:01+08:00", Asia/Ust-Nera (UTC+10)', () => {
    const start = '2020-10-28T12:03:00+08:00';
    const end = '2020-10-29T04:12:01+08:00';
    expect(timeRange(start, end, 'Asia/Ust-Nera')).toBe('14:03:00 至 06:12:01');
  });
});
