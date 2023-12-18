////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { time } from '../src';

/**
 * 单元测试 'src/time.js'
 *
 * @author 胡海星
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
  test('"2020-10-28T12:31:01"', () => {
    expect(time('2020-10-28T12:31:01'))
      .toBe('12:31:01');
  });
  test('"2020-10-28T12:03:00+08:00"', () => {
    expect(time('2020-10-28T12:03:00+08:00'))
      .toBe('12:03:00');
  });
});
