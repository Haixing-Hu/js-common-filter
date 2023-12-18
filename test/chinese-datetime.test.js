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
    expect(chineseDatetime(undefined))
      .toBe('');
  });
  test('null', () => {
    expect(chineseDatetime(null))
      .toBe('');
  });
  test('2020-10-28T12:32:11+08:00', () => {
    expect(chineseDatetime('2020-10-28T12:32:11+08:00'))
      .toBe('2020年10月28日12点32分11秒');
  });
  test('2020-10-28T12:32:01+8:00', () => {
    expect(chineseDatetime('2020-10-28T12:32:01+08:00'))
      .toBe('2020年10月28日12点32分1秒');
  });
  test('2020-10-28T12:03:00+08:00', () => {
    expect(chineseDatetime('2020-10-28T12:03:00+08:00'))
      .toBe('2020年10月28日12点3分');
  });
  test('2020-10-28T12:00:00Z', () => {
    expect(chineseDatetime('2020-10-28T12:00:00Z'))
      .toBe('2020年10月28日20点');
  });
  test('2020-10-28T16:00:00Z', () => {
    expect(chineseDatetime('2020-10-28T16:00:00Z'))
      .toBe('2020年10月29日0点');
  });
  // 添加测试用例
  test('2020-10-28 12:32:11', () => {
    expect(chineseDatetime('2020-10-28 12:32:11'))
      .toBe('2020年10月28日12点32分11秒');
  });
  test('2020-10-28 12:32:01', () => {
    expect(chineseDatetime('2020-10-28 12:32:01'))
      .toBe('2020年10月28日12点32分1秒');
  });
  test('2020-10-28 12:03:00', () => {
    expect(chineseDatetime('2020-10-28 12:03:00'))
      .toBe('2020年10月28日12点3分');
  });
  test('2020-10-28 12:00:00', () => {
    expect(chineseDatetime('2020-10-28 12:00:00'))
      .toBe('2020年10月28日12点');
  });
  test('2020-10-28 16:00:00', () => {
    expect(chineseDatetime('2020-10-28 16:00:00'))
      .toBe('2020年10月28日16点');
  });
  test('2020-10-28 24:00:00', () => {
    expect(chineseDatetime('2020-10-28 24:00:00'))
      .toBe('2020年10月29日0点');
  });
  test('2020-10-29 00:00:00', () => {
    expect(chineseDatetime('2020-10-29 00:00:00'))
      .toBe('2020年10月29日0点');
  });
});
