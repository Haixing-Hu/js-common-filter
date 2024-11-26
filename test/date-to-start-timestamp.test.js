////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { dateToStartTimestamp } from '../src';

describe('dateToStartTimestamp', () => {
  it('returns empty string if date is null', () => {
    expect(dateToStartTimestamp(null)).toBe('');
  });

  it('returns empty string if date is undefined', () => {
    expect(dateToStartTimestamp(undefined)).toBe('');
  });

  it('returns empty string if date is empty string', () => {
    expect(dateToStartTimestamp('')).toBe('');
  });

  it('returns correct UTC timestamp for valid date in specified timezone', () => {
    expect(dateToStartTimestamp('2024-12-31', 'Asia/Shanghai')).toBe('2024-12-30T16:00:00.000Z');
  });

  it('throws TypeError for invalid date string', () => {
    expect(() => dateToStartTimestamp('invalid-date')).toThrow(TypeError);
  });

  // it('throws TypeError for invalid date format', () => {
  //   expect(() => dateToStartTimestamp('2024-31-12')).toThrow(TypeError);
  // });
});
