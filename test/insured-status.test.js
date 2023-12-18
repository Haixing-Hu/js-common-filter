////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { InsuredStatus } from '@njzhyl/common-model';
import { insuredstatus } from '../src';

/**
  * 单元测试 'src/insured-status.js'
  *
  * @author 胡海星
  */
describe('src/insured-status.js', () => {
  test('undefined', () => {
    expect(insuredstatus(undefined))
      .toBe('未知');
  });
  test('null', () => {
    expect(insuredstatus(null))
      .toBe('未知');
  });
  test('empty string', () => {
    expect(insuredstatus(''))
      .toBe('未知');
  });
  test('RECOVERY', () => {
    expect(insuredstatus('RECOVERY'))
      .toBe(InsuredStatus.RECOVERY.name);
  });
  test('UNDER_TREATMENT', () => {
    expect(insuredstatus('UNDER_TREATMENT'))
      .toBe(InsuredStatus.UNDER_TREATMENT.name);
  });
  test('DEATH', () => {
    expect(insuredstatus('DEATH'))
      .toBe(InsuredStatus.DEATH.name);
  });
  test('OTHER', () => {
    expect(insuredstatus('OTHER'))
      .toBe(InsuredStatus.OTHER.name);
  });
  test('XXX', () => {
    expect(insuredstatus('XXX'))
      .toBe('XXX');
  });
});
