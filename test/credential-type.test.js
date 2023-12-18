////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { CredentialType } from '@njzhyl/common-model';
import { credentialtype } from '../src';

/**
  * 单元测试 'src/credential-type.js'
  *
  * @author 胡海星
  */
describe('src/credential-type.js', () => {
  test('undefined', () => {
    expect(credentialtype(undefined))
      .toBe('未知');
  });
  test('null', () => {
    expect(credentialtype(null))
      .toBe('未知');
  });
  test('empty string', () => {
    expect(credentialtype(''))
      .toBe('未知');
  });
  test('IDENTITY_CARD', () => {
    expect(credentialtype('IDENTITY_CARD'))
      .toBe(CredentialType.IDENTITY_CARD.name);
  });
  test('PASSPORT', () => {
    expect(credentialtype('PASSPORT'))
      .toBe(CredentialType.PASSPORT.name);
  });
  test('OFFICER_CARD', () => {
    expect(credentialtype('OFFICER_CARD'))
      .toBe(CredentialType.OFFICER_CARD.name);
  });
  test('POLICE_CARD', () => {
    expect(credentialtype('POLICE_CARD'))
      .toBe(CredentialType.POLICE_CARD.name);
  });
  test('TAIWAN_RETURN_PERMIT', () => {
    expect(credentialtype('TAIWAN_RETURN_PERMIT'))
      .toBe(CredentialType.TAIWAN_RETURN_PERMIT.name);
  });
  test('FOREIGNER_PERMANENT_RESIDENCE_PERMIT', () => {
    expect(credentialtype('FOREIGNER_PERMANENT_RESIDENCE_PERMIT'))
      .toBe(CredentialType.FOREIGNER_PERMANENT_RESIDENCE_PERMIT.name);
  });
  test('OTHER', () => {
    expect(credentialtype('OTHER'))
      .toBe(CredentialType.OTHER.name);
  });
  test('XXX', () => {
    expect(credentialtype('XXX'))
      .toBe('XXX');
  });
});
