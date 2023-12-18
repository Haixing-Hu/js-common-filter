////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { chineseLocalDatetime } from '../src';

/**
 * 单元测试 'src/chinese-local-datetime.js'
 *
 * @author 胡海星
 */
describe('src/chinese-datetime.js', () => {
  test('undefined', () => {
    expect(chineseLocalDatetime(undefined))
      .toBe('');
  });
  test('null', () => {
    expect(chineseLocalDatetime(null))
      .toBe('');
  });
  test('2020-10-28 12:32:11', () => {
    expect(chineseLocalDatetime('2020-10-28 12:32:11'))
      .toBe('2020年10月28日12点32分11秒');
  });
  test('2020-10-28 12:32:01', () => {
    expect(chineseLocalDatetime('2020-10-28 12:32:01'))
      .toBe('2020年10月28日12点32分1秒');
  });
  test('2020-10-28 12:03:00', () => {
    expect(chineseLocalDatetime('2020-10-28 12:03:00'))
      .toBe('2020年10月28日12点3分');
  });
  test('2020-10-28 12:00:00', () => {
    expect(chineseLocalDatetime('2020-10-28 12:00:00'))
      .toBe('2020年10月28日12点');
  });
  test('2020-10-28 16:00:00', () => {
    expect(chineseLocalDatetime('2020-10-28 16:00:00'))
      .toBe('2020年10月28日16点');
  });
  test('2020-10-28 24:00:00', () => {
    expect(chineseLocalDatetime('2020-10-28 24:00:00'))
      .toBe('2020年10月28日24点');
  });
  test('2020-10-29 00:00:00', () => {
    expect(chineseLocalDatetime('2020-10-29 00:00:00'))
      .toBe('2020年10月29日0点');
  });
});
