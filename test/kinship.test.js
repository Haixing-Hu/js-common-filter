////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { Kinship } from '@njzhyl/common-model';
import { kinship } from '../src';

/**
 * 单元测试 'src/kinship.js'
 *
 * @author 胡海星
 */
describe('src/kinship.js', () => {
  test('undefined', () => {
    expect(kinship(undefined))
      .toBe('未知');
  });
  test('null', () => {
    expect(kinship(null))
      .toBe('未知');
  });
  test('empty string', () => {
    expect(kinship(''))
      .toBe('未知');
  });
  test('SELF', () => {
    expect(kinship('SELF'))
      .toBe(Kinship.SELF.name);
  });
  test('PARENT', () => {
    expect(kinship('PARENT'))
      .toBe(Kinship.PARENT.name);
  });
  test('CHILD', () => {
    expect(kinship('CHILD'))
      .toBe(Kinship.CHILD.name);
  });
  test('SPOUSE', () => {
    expect(kinship('SPOUSE'))
      .toBe(Kinship.SPOUSE.name);
  });
  test('OTHER', () => {
    expect(kinship('OTHER'))
      .toBe(Kinship.OTHER.name);
  });
  test('XXX', () => {
    expect(kinship('XXX'))
      .toBe('XXX');
  });
});
