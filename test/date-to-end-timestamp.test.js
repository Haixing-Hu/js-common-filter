////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { dateToEndTimestamp } from '../src';

describe('dateToEndTimestamp', () => {
  it('returns empty string if date is null', () => {
    expect(dateToEndTimestamp(null)).toBe('');
  });

  it('returns empty string if date is undefined', () => {
    expect(dateToEndTimestamp(undefined)).toBe('');
  });

  it('returns empty string if date is empty string', () => {
    expect(dateToEndTimestamp('')).toBe('');
  });

  it('returns correct UTC timestamp for valid date in specified timezone', () => {
    expect(dateToEndTimestamp('2024-12-31', 'Asia/Shanghai')).toBe('2024-12-31T15:59:59.999Z');
  });

  it('throws TypeError for invalid date string', () => {
    expect(() => dateToEndTimestamp('invalid-date')).toThrow(TypeError);
  });

  // it('throws TypeError for invalid date format', () => {
  //   expect(() => dateToEndTimestamp('2024-31-12')).toThrow(TypeError);
  // });
});
