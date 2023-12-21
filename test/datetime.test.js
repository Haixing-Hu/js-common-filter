////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { formatLocalDatetime } from '@haixing_hu/common-util';
import { datetime } from '../src';

/**
 * Unit test of the 'src/datetime.js'
 *
 * @author Haixing Hu
 */
describe('src/datetime.js', () => {
  test('undefined', () => {
    expect(datetime(undefined)).toBeNull();
  });
  test('null', () => {
    expect(datetime(null)).toBeNull();
  });
  test('""', () => {
    expect(datetime('')).toBeNull();
  });
  test('"2020-10-28T12:31:01Z", utc', () => {
    expect(datetime('2020-10-28T12:31:01Z', 'utc'))
      .toBe('2020-10-28 12:31:01');
  });
  test('"2020-10-28T12:03:00+08:00", utc', () => {
    expect(datetime('2020-10-28T07:03:00+08:00', 'utc'))
      .toBe('2020-10-27 23:03:00');
  });
  test('"2020-10-28T12:31:11Z", local timezone', () => {
    const str = '2020-10-28T12:31:11Z';
    const actual = datetime(str);
    const expected = formatLocalDatetime(new Date(str));
    expect(actual).toBe(expected);
  });
  test('"2020-10-28T12:03:00+08:00", local timezone', () => {
    const str = '2020-10-28T07:03:00+09:00';
    const actual = datetime(str);
    const expected = formatLocalDatetime(new Date(str));
    expect(actual).toBe(expected);
  });
  test('"2020-10-28T14:31:01Z", Asia/Ust-Nera (UTC+10)', () => {
    expect(datetime('2020-10-28T14:31:01Z', 'Asia/Ust-Nera')).toBe('2020-10-29 00:31:01');
  });
  test('"2020-10-28T12:03:00-08:00", utc+10', () => {
    expect(datetime('2020-10-28T12:03:00-08:00', 'Asia/Ust-Nera')).toBe('2020-10-29 06:03:00');
  });
});
