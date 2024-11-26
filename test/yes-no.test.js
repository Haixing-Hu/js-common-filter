////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { yesNo } from '../src';

describe('formatYesNo', () => {
  it('returns "是" for true value', () => {
    expect(yesNo(true)).toBe('是');
  });

  it('returns "否" for false value', () => {
    expect(yesNo(false)).toBe('否');
  });

  it('returns "否" for null value', () => {
    expect(yesNo(null)).toBe('否');
  });

  it('returns "否" for undefined value', () => {
    expect(yesNo(undefined)).toBe('否');
  });

  it('returns "否" for non-boolean value', () => {
    expect(yesNo('string')).toBe('否');
    expect(yesNo(123)).toBe('否');
    expect(yesNo({})).toBe('否');
    expect(yesNo([])).toBe('否');
  });
});
