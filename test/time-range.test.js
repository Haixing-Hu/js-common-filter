////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
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
  test('"2020-10-28T12:31:01", null', () => {
    expect(timeRange('2020-10-28T12:31:01', null))
      .toBe('12:31:01 至 --');
  });
  test('"", "2020-10-28T03:01:01"', () => {
    expect(timeRange('', '2020-10-28T03:01:01'))
      .toBe('-- 至 03:01:01');
  });
  test('"2020-10-28T12:03:00+08:00", "2020-10-28T14:12:01+08:00"', () => {
    expect(timeRange('2020-10-28T12:03:00+08:00', '2020-10-28T14:12:01+08:00'))
      .toBe('12:03:00 至 14:12:01');
  });
  test('"2020-10-28T12:03:00+08:00", "2020-10-29T04:12:01+08:00"', () => {
    expect(timeRange('2020-10-28T12:03:00+08:00', '2020-10-29T04:12:01+08:00'))
      .toBe('12:03:00 至 04:12:01');
  });
});
