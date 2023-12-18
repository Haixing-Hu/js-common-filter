////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { removeMidSpace } from '../src';

/**
 * 单元测试 'src/remove-mid-space.js'
 *
 * @author 胡海星
 */
describe('src/remove-mid-space.js', () => {
  test('undefined', () => {
    expect(removeMidSpace(undefined))
      .toBe('');
  });
  test('null', () => {
    expect(removeMidSpace(null))
      .toBe('');
  });
  test('空字符串', () => {
    expect(removeMidSpace(''))
      .toBe('');
  });
  test('全部是空格', () => {
    expect(removeMidSpace(' 　'))
      .toBe('');
  });
  test('头尾、中间含空格', () => {
    expect(removeMidSpace(' 中　文　'))
      .toBe('中文');
  });
});
