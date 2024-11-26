////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { hasHasnot } from '../src';

describe('formathasHasnot', () => {
  it('returns "有" for true value', () => {
    expect(hasHasnot(true)).toBe('有');
  });

  it('returns "无" for false value', () => {
    expect(hasHasnot(false)).toBe('无');
  });

  it('returns "无" for null value', () => {
    expect(hasHasnot(null)).toBe('无');
  });

  it('returns "无" for undefined value', () => {
    expect(hasHasnot(undefined)).toBe('无');
  });

  it('returns "无" for non-boolean value', () => {
    expect(hasHasnot('string')).toBe('无');
    expect(hasHasnot(123)).toBe('无');
    expect(hasHasnot({})).toBe('无');
    expect(hasHasnot([])).toBe('无');
  });
});
