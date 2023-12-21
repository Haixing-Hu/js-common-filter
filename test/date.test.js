////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { date } from '../src';

/**
 * Unit test of the 'src/date.js'
 *
 * @author Haixing Hu
 */
describe('src/date.js', () => {
  test('undefined', () => {
    expect(date(undefined))
      .toBeNull();
  });
  test('null', () => {
    expect(date(null))
      .toBeNull();
  });
  test('""', () => {
    expect(date(''))
      .toBeNull();
  });
  test('"2020-10-28T12:31:01Z", utc', () => {
    const str = '2020-10-28T12:31:01Z';
    expect(date(str, 'utc')).toBe('2020-10-28');
  });
  test('"2020-10-28T12:03:00+08:00", utc', () => {
    const str = '2020-10-28T07:03:00+09:00';
    expect(date(str, 'utc')).toBe('2020-10-27');
  });
  test('"2020-10-28T12:31:01Z", local timezone', () => {
    const str = '2020-10-28T12:31:01Z';
    const actual = date(str);
    const value = new Date(str);
    const expected = `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`;
    expect(actual).toBe(expected);
  });
  test('"2020-10-28T12:03:00+08:00", local timezone', () => {
    const str = '2020-10-28T07:03:00+09:00';
    const actual = date(str);
    const value = new Date(str);
    const expected = `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`;
    expect(actual).toBe(expected);
  });
  test('"2020-10-28T14:31:01Z", Asia/Ust-Nera (UTC+10)', () => {
    expect(date('2020-10-28T14:31:01Z', 'Asia/Ust-Nera')).toBe('2020-10-29');
  });
  test('"2020-10-28T12:03:00-08:00", utc+10', () => {
    expect(date('2020-10-28T12:03:00-08:00', 'Asia/Ust-Nera')).toBe('2020-10-29');
  });
});
