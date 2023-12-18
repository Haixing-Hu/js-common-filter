////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { MedicareType } from '@njzhyl/common-model';
import { medicaretype } from '../src';

/**
  * 单元测试 'src/insured-status.js'
  *
  * @author 胡海星
  */
describe('src/insured-status.js', () => {
  test('undefined', () => {
    expect(medicaretype(undefined))
      .toBe('未知');
  });
  test('null', () => {
    expect(medicaretype(null))
      .toBe('未知');
  });
  test('empty string', () => {
    expect(medicaretype(''))
      .toBe('未知');
  });
  test('EMPLOYEE', () => {
    expect(medicaretype('EMPLOYEE'))
      .toBe(MedicareType.EMPLOYEE.name);
  });
  test('RESIDENT', () => {
    expect(medicaretype('RESIDENT'))
      .toBe(MedicareType.RESIDENT.name);
  });
  test('NEW_RURAL_COOPERATIVE', () => {
    expect(medicaretype('NEW_RURAL_COOPERATIVE'))
      .toBe(MedicareType.NEW_RURAL_COOPERATIVE.name);
  });
  test('OTHER', () => {
    expect(medicaretype('OTHER'))
      .toBe(MedicareType.OTHER.name);
  });
  test('XXX', () => {
    expect(medicaretype('XXX'))
      .toBe('XXX');
  });
});
