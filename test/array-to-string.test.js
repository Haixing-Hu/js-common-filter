////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { arrayToString } from '../src';

/**
 * 单元测试 'src/array-to-string.js'
 *
 * @author 胡海星
 */
describe('src/array-to-string.js', () => {
  test('undefined', () => {
    expect(arrayToString(undefined))
      .toBe('');
  });
  test('null', () => {
    expect(arrayToString(null))
      .toBe('');
  });
  test('空数组', () => {
    expect(arrayToString([]))
      .toBe('');
  });
  test('单个元素的数组', () => {
    expect(arrayToString(['a']))
      .toBe('a');
  });
  test('普通数组', () => {
    expect(arrayToString(['a', 'b', 'c']))
      .toBe('a b c');
  });
  test('包含空字符串的数组', () => {
    expect(arrayToString(['a', '', 'c']))
      .toBe('a  c');
  });
  test('包含null的数组', () => {
    expect(arrayToString(['a', null, 'c']))
      .toBe('a null c');
  });
  test('使用自定义分隔符', () => {
    expect(arrayToString(['a', 'b', 'c'], ','))
      .toBe('a,b,c');
  });
  test('使用空的分隔符', () => {
    expect(arrayToString(['a', 'b', 'c'], ''))
      .toBe('a b c');
  });
  test('使用null分隔符', () => {
    expect(arrayToString(['a', 'b', 'c'], null))
      .toBe('a b c');
  });
});
