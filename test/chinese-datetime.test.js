////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { chineseDatetime } from '../src';

/**
 * 单元测试 'src/chinese-datetime.js'
 *
 * @author 胡海星
 */
describe('src/chinese-datetime.js', () => {
  test('undefined', () => {
    expect(chineseDatetime(undefined)).toBe('');
  });
  test('null', () => {
    expect(chineseDatetime(null)).toBe('');
  });

  test('2020-10-28T12:32:11+08:00, utc', () => {
    const str = '2020-10-28T12:32:11+08:00';
    expect(chineseDatetime(str, 'utc')).toBe('2020年10月28日4点32分11秒');
  });
  test('2020-10-28T08:32:01+8:00, utc', () => {
    const str = '2020-10-28T08:32:01+08:00';
    expect(chineseDatetime(str, 'utc')).toBe('2020年10月28日0点32分1秒');
  });
  test('2020-10-28T07:03:00+08:00, utc', () => {
    const str = '2020-10-28T07:03:00+08:00';
    expect(chineseDatetime(str, 'utc')).toBe('2020年10月27日23点3分');
  });
  test('2020-10-28T12:00:00Z, utc', () => {
    const str = '2020-10-28T12:00:00Z';
    expect(chineseDatetime(str, 'utc')).toBe('2020年10月28日12点');
  });
  test('2020-10-28T16:00:00Z, utc', () => {
    const str = '2020-10-28T16:00:00Z';
    expect(chineseDatetime(str, 'utc')).toBe('2020年10月28日16点');
  });

  function expectedChineseLocalDatetime(str) {
    const date = new Date(str);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const hourStr = `${hour}点`;
    const minuteStr = ((minute > 0 || second > 0) ? `${minute}分` : '');
    const secondStr = (second > 0 ? `${second}秒` : '');
    return `${year}年${month}月${day}日${hourStr}${minuteStr}${secondStr}`;
  }

  test('2020-10-28T12:32:11+08:00, local timezone', () => {
    const str = '2020-10-28T12:32:11+08:00';
    const expected = expectedChineseLocalDatetime(str);
    expect(chineseDatetime(str)).toBe(expected);
  });
  test('2020-10-28T08:32:01+8:00, local timezone', () => {
    const str = '2020-10-28T08:32:01+08:00';
    const expected = expectedChineseLocalDatetime(str);
    expect(chineseDatetime(str)).toBe(expected);
  });
  test('2020-10-28T07:03:00+08:00, local timezone', () => {
    const str = '2020-10-28T07:03:00+08:00';
    const expected = expectedChineseLocalDatetime(str);
    expect(chineseDatetime(str)).toBe(expected);
  });
  test('2020-10-28T12:00:00Z, local timezone', () => {
    const str = '2020-10-28T12:00:00Z';
    const expected = expectedChineseLocalDatetime(str);
    expect(chineseDatetime(str)).toBe(expected);
  });
  test('2020-10-28T16:00:00Z, local timezone', () => {
    const str = '2020-10-28T16:00:00Z';
    const expected = expectedChineseLocalDatetime(str);
    expect(chineseDatetime(str)).toBe(expected);
  });


  test('2020-10-28T12:32:11+08:00, Asia/Ust-Nera (UTC+10)', () => {
    const str = '2020-10-28T12:32:11+08:00';
    expect(chineseDatetime(str, 'Asia/Ust-Nera')).toBe('2020年10月28日14点32分11秒');
  });
  test('2020-10-28T08:32:01+8:00, Asia/Ust-Nera (UTC+10)', () => {
    const str = '2020-10-28T08:32:01+08:00';
    expect(chineseDatetime(str, 'Asia/Ust-Nera')).toBe('2020年10月28日10点32分1秒');
  });
  test('2020-10-28T07:03:00+08:00, Asia/Ust-Nera (UTC+10)', () => {
    const str = '2020-10-28T07:03:00+08:00';
    expect(chineseDatetime(str, 'Asia/Ust-Nera')).toBe('2020年10月28日9点3分');
  });
  test('2020-10-28T12:00:00Z, Asia/Ust-Nera (UTC+10)', () => {
    const str = '2020-10-28T12:00:00Z';
    expect(chineseDatetime(str, 'Asia/Ust-Nera')).toBe('2020年10月28日22点');
  });
  test('2020-10-28T16:00:00Z, Asia/Ust-Nera (UTC+10)', () => {
    const str = '2020-10-28T16:00:00Z';
    expect(chineseDatetime(str, 'Asia/Ust-Nera')).toBe('2020年10月29日2点');
  });

  // additional test cases
  test('2020-10-28 12:32:11', () => {
    const str = '2020-10-28 12:32:11';
    const expected = expectedChineseLocalDatetime(str);
    expect(chineseDatetime(str)).toBe(expected);
  });
  test('2020-10-28 12:32:01', () => {
    const str = '2020-10-28 12:32:01';
    const expected = expectedChineseLocalDatetime(str);
    expect(chineseDatetime(str)).toBe(expected);
  });
  test('2020-10-28 12:03:00', () => {
    const str = '2020-10-28 12:03:00';
    const expected = expectedChineseLocalDatetime(str);
    expect(chineseDatetime(str)).toBe(expected);
  });
  test('2020-10-28 12:00:00', () => {
    const str = '2020-10-28 12:00:00';
    const expected = expectedChineseLocalDatetime(str);
    expect(chineseDatetime(str)).toBe(expected);
  });
  test('2020-10-28 16:00:00', () => {
    const str = '2020-10-28 16:00:00';
    const expected = expectedChineseLocalDatetime(str);
    expect(chineseDatetime(str)).toBe(expected);
  });
  test('2020-10-28 24:00:00', () => {
    const str = '2020-10-28 24:00:00';
    const expected = expectedChineseLocalDatetime(str);
    expect(chineseDatetime(str)).toBe(expected);
  });
  test('2020-10-29 00:00:00', () => {
    const str = '2020-10-29 00:00:00';
    const expected = expectedChineseLocalDatetime(str);
    expect(chineseDatetime(str)).toBe(expected);
  });

});
