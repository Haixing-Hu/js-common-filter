////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { formatLocalTime } from '@haixing_hu/common-util';
import { time } from '../src';

/**
 * Unit test of the 'src/time.js'
 *
 * @author Haixing Hu
 */
describe('src/time.js', () => {
  test('undefined', () => {
    expect(time(undefined))
      .toBeNull();
  });
  test('null', () => {
    expect(time(null))
      .toBeNull();
  });
  test('""', () => {
    expect(time(''))
      .toBeNull();
  });
  test('"2020-10-28T12:31:01Z", utc', () => {
    expect(time('2020-10-28T12:31:01Z', 'utc')).toBe('12:31:01');
  });
  test('"2020-10-28T12:03:00+08:00", utc', () => {
    expect(time('2020-10-28T12:03:00+08:00', 'utc')).toBe('04:03:00');
  });
  test('"2020-10-28T12:31:01Z", local timezone', () => {
    const str = '2020-10-28T12:31:11Z';
    const actual = time(str);
    const expected = formatLocalTime(new Date(str));
    expect(actual).toBe(expected);
  });
  test('"2020-10-28T12:03:00+08:00", local timezone', () => {
    const str = '2020-10-28T07:03:00+09:00';
    const actual = time(str);
    const expected = formatLocalTime(new Date(str));
    expect(actual).toBe(expected);
  });
  test('"2020-10-28T12:31:01Z", Asia/Ust-Nera (UTC+10)', () => {
    expect(time('2020-10-28T12:31:01Z', 'Asia/Ust-Nera')).toBe('22:31:01');
  });
  test('"2020-10-28T12:03:00+08:00", utc+10', () => {
    expect(time('2020-10-28T12:03:00+08:00', 'Asia/Ust-Nera')).toBe('14:03:00');
  });
});
