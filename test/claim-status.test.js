////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { ClaimStatus } from '@njzhyl/common-model';
import { claimstatus } from '../src';

/**
  * 单元测试 'src/claim-status.js'
  *
  * @author 胡海星
  */
describe('src/claim-status.js', () => {
  test('undefined', () => {
    expect(claimstatus(undefined))
      .toBe('未知');
  });
  test('null', () => {
    expect(claimstatus(null))
      .toBe('未知');
  });
  test('empty string', () => {
    expect(claimstatus(''))
      .toBe(ClaimStatus[''].name);
  });
  test('NOT_SUBMITTED', () => {
    expect(claimstatus('NOT_SUBMITTED'))
      .toBe(ClaimStatus.NOT_SUBMITTED.name);
  });
  test('CLAIM_APPLICATION_WAIT_AUDIT', () => {
    expect(claimstatus('CLAIM_APPLICATION_WAIT_AUDIT'))
      .toBe(ClaimStatus.CLAIM_APPLICATION_WAIT_AUDIT.name);
  });
  test('CLAIM_APPLICATION_AUDITED', () => {
    expect(claimstatus('CLAIM_APPLICATION_AUDITED'))
      .toBe(ClaimStatus.CLAIM_APPLICATION_AUDITED.name);
  });
  test('TEMPORARY_SAVED', () => {
    expect(claimstatus('TEMPORARY_SAVED'))
      .toBe(ClaimStatus.TEMPORARY_SAVED.name);
  });
  test('SYSTEM_AUDITED', () => {
    expect(claimstatus('SYSTEM_AUDITED'))
      .toBe(ClaimStatus.SYSTEM_AUDITED.name);
  });
  test('SYSTEM_REJECTED', () => {
    expect(claimstatus('SYSTEM_REJECTED'))
      .toBe(ClaimStatus.SYSTEM_REJECTED.name);
  });
  test('WAIT_INSURANCE_COMPANY_AUDITED', () => {
    expect(claimstatus('WAIT_INSURANCE_COMPANY_AUDITED'))
      .toBe(ClaimStatus.WAIT_INSURANCE_COMPANY_AUDITED.name);
  });
  test('INSURANCE_COMPANY_ACCEPTED', () => {
    expect(claimstatus('INSURANCE_COMPANY_ACCEPTED'))
      .toBe(ClaimStatus.INSURANCE_COMPANY_ACCEPTED.name);
  });
  test('INSURANCE_COMPANY_REJECTED', () => {
    expect(claimstatus('INSURANCE_COMPANY_REJECTED'))
      .toBe(ClaimStatus.INSURANCE_COMPANY_REJECTED.name);
  });
  test('INSURANCE_COMPANY_COMPLETED', () => {
    expect(claimstatus('INSURANCE_COMPANY_COMPLETED'))
      .toBe(ClaimStatus.INSURANCE_COMPANY_COMPLETED.name);
  });
  test('INSURANCE_COMPANY_ANNUL_OR_REFUSED', () => {
    expect(claimstatus('INSURANCE_COMPANY_ANNUL_OR_REFUSED'))
      .toBe(ClaimStatus.INSURANCE_COMPANY_ANNUL_OR_REFUSED.name);
  });
  test('CANCELED', () => {
    expect(claimstatus('CANCELED'))
      .toBe(ClaimStatus.CANCELED.name);
  });
  test('XXX', () => {
    expect(claimstatus('XXX'))
      .toBe('XXX');
  });
});
