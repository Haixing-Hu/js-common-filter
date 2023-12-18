////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { Gender } from '@njzhyl/common-model';
import { gender } from '../src';

/**
  * 单元测试 'src/gender.js'
  *
  * @author 胡海星
  */
describe('src/gender.js', () => {
  test('undefined', () => {
    expect(gender(undefined))
      .toBe('未知');
  });
  test('null', () => {
    expect(gender(null))
      .toBe('未知');
  });
  test('empty string', () => {
    expect(gender(''))
      .toBe('未知');
  });
  test('MALE', () => {
    expect(gender('MALE'))
      .toBe(Gender.MALE.name);
  });
  test('FEMALE', () => {
    expect(gender('FEMALE'))
      .toBe(Gender.FEMALE.name);
  });
  test('XXX', () => {
    expect(gender('XXX'))
      .toBe('XXX');
  });
});
