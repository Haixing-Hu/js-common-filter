////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { privacyMask } from '../src';

/**
 * 单元测试 'src/privacy-mask.js'
 *
 * @author 胡海星
 */
describe('src/privacy-mask.js', () => {
  test('1个字符', () => {
    expect(privacyMask('张')).toBe('张');
  });
  test('2个字符', () => {
    expect(privacyMask('张三')).toBe('张*');
  });
  test('3个字符', () => {
    expect(privacyMask('张三丰')).toBe('张*丰');
  });
  test('4个字符', () => {
    expect(privacyMask('张三丰无')).toBe('张**无');
  });
  test('5个字符', () => {
    expect(privacyMask('张三丰无极')).toBe('张三**极');
  });
  test('6个字符', () => {
    expect(privacyMask('张三丰无极少')).toBe('张三***少');
  });
  test('7个字符', () => {
    expect(privacyMask('张三丰无极少林')).toBe('张三***少林');
  });
  test('8个字符', () => {
    expect(privacyMask('张三丰无极少林和')).toBe('张三****林和');
  });
  test('9个字符', () => {
    expect(privacyMask('张三丰无极少林和尚')).toBe('张三丰****和尚');
  });
  test('身份证号码', () => {
    expect(privacyMask('320103197001111518')).toBe('32010*********1518');
  });
  test('手机号码', () => {
    expect(privacyMask('18602543764')).toBe('186*****764');
  });
  test('带空格的英文名字1', () => {
    expect(privacyMask('Zhang San')).toBe('Zha****an');
  });
  test('带空格的英文名字2', () => {
    expect(privacyMask('Bill Gates')).toBe('Bil*****es');
  });
  test('null', () => {
    expect(privacyMask(null)).toBe('');
  });
  test('undefined', () => {
    expect(privacyMask(undefined)).toBe('');
  });
  test('empty string', () => {
    expect(privacyMask('')).toBe('');
  });
});
