////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { chineseDate } from '../src';

/**
 * Unit test of the 'src/chinese-date.js'
 *
 * @author Haixing Hu
 */
describe('src/chineseDate.js', () => {
  test('undefined', () => {
    expect(chineseDate(undefined)).toBeNull();
  });
  test('null', () => {
    expect(chineseDate(null)).toBeNull();
  });
  test('""', () => {
    expect(chineseDate('')).toBeNull();
  });

  test('"2020-10-28T12:31:01Z", utc', () => {
    const str = '2020-10-28T12:31:01Z';
    expect(chineseDate(str, 'utc')).toBe('2020年10月28日');
  });
  test('"2020-10-28T07:03:00+08:00", utc', () => {
    const str = '2020-10-28T07:03:00+08:00';
    expect(chineseDate(str, 'utc')).toBe('2020年10月27日');
  });
  test('"2020-08-28T12:03:00+08:00", utc', () => {
    const str = '2020-08-28T07:03:00+08:00';
    expect(chineseDate(str, 'utc')).toBe('2020年8月27日');
  });
  test('"2020-08-08T09:03:00+10:00", utc', () => {
    const str = '2020-08-08T09:03:00+10:00';
    expect(chineseDate(str, 'utc')).toBe('2020年8月7日');
  });

  function expectedChineseLocalDate(str) {
    const date = new Date(str);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
  }

  test('"2020-10-28T12:31:01Z", local timezone', () => {
    const str = '2020-10-28T12:31:01Z';
    const expected = expectedChineseLocalDate(str);
    expect(chineseDate(str)).toBe(expected);
  });
  test('"2020-10-28T12:03:00+09:00", local timezone', () => {
    const str = '2020-10-28T12:03:00+09:00';
    const expected = expectedChineseLocalDate(str);
    expect(chineseDate(str)).toBe(expected);
  });
  test('"2020-08-28T08:03:00+10:00", local timezone', () => {
    const str = '2020-08-28T08:03:00+10:00';
    const expected = expectedChineseLocalDate(str);
    expect(chineseDate(str)).toBe(expected);
  });
  test('"2020-08-08T07:03:00+08:00", local timezone', () => {
    const str = '2020-08-08T07:03:00+08:00';
    const expected = expectedChineseLocalDate(str);
    expect(chineseDate(str)).toBe(expected);
  });

  test('"2020-10-28T14:31:01Z", Asia/Ust-Nera (UTC+10)', () => {
    const str = '2020-10-28T14:31:01Z';
    expect(chineseDate(str, 'Asia/Ust-Nera')).toBe('2020年10月29日');
  });
  test('"2020-10-28T12:03:00+08:00", Asia/Ust-Nera (UTC+10)', () => {
    const str = '2020-10-28T07:03:00+09:00';
    expect(chineseDate(str, 'Asia/Ust-Nera')).toBe('2020年10月28日');
  });
  test('"2020-08-28T12:03:00+08:00", Asia/Ust-Nera (UTC+10)', () => {
    const str = '2020-08-28T12:03:00+08:00';
    expect(chineseDate(str, 'Asia/Ust-Nera')).toBe('2020年8月28日');
  });
  test('"2020-08-08T12:03:00+08:00", Asia/Ust-Nera (UTC+10)', () => {
    const str = '2020-08-08T12:03:00+08:00';
    expect(chineseDate(str, 'Asia/Ust-Nera')).toBe('2020年8月8日');
  });
});
