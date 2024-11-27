////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { yesNoUnknown } from '../src';

describe('formatYesNo', () => {
  it('returns "是" for true value', () => {
    expect(yesNoUnknown(true)).toBe('是');
  });

  it('returns "否" for false value', () => {
    expect(yesNoUnknown(false)).toBe('否');
  });

  it('returns "未知" for null value', () => {
    expect(yesNoUnknown(null)).toBe('未知');
  });

  it('returns "未知" for undefined value', () => {
    expect(yesNoUnknown(undefined)).toBe('未知');
  });

  it('returns "未知" for non-boolean value', () => {
    expect(yesNoUnknown('string')).toBe('未知');
    expect(yesNoUnknown(123)).toBe('未知');
    expect(yesNoUnknown({})).toBe('未知');
    expect(yesNoUnknown([])).toBe('未知');
  });
});
