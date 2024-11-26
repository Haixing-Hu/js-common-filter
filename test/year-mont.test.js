////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { yearMonth } from '../src';

describe('yearMonth', () => {
  it('returns null if dateTime is null', () => {
    expect(yearMonth(null)).toBeNull();
  });

  it('returns null if dateTime is undefined', () => {
    expect(yearMonth(undefined)).toBeNull();
  });

  it('returns null if dateTime is empty string', () => {
    expect(yearMonth('')).toBeNull();
  });

  it('returns correct year-month for valid date string in local timezone', () => {
    expect(yearMonth('2024-12-31 00:00:00')).toBe('2024-12');
  });

  it('returns correct year-month for valid date string with specified timezone', () => {
    expect(yearMonth('2024-12-31T24:00:00Z', 'Asia/Shanghai')).toBe('2025-01');
  });

  it('returns correct year-month for valid Date object', () => {
    expect(yearMonth(new Date('2024-12-31T00:00:00Z'))).toBe('2024-12');
  });

  it('returns correct year-month for valid date string with specified timezone', () => {
    expect(yearMonth('2025-01-01T00:00:00Z', 'Asia/Shanghai')).toBe('2025-01');
  });
});
