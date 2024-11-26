
////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import dayjs from 'dayjs';
import { atTimezone } from '../src';

describe('atTimezone', () => {
  it('returns null if value is null', () => {
    expect(atTimezone(null)).toBeNull();
  });

  it('returns null if value is undefined', () => {
    expect(atTimezone(undefined)).toBeNull();
  });

  it('returns null if value is empty string', () => {
    expect(atTimezone('')).toBeNull();
  });

  it('work correctly for specified timezone', () => {
    const result = atTimezone('2025-01-01 00:00:00', 'Asia/Shanghai');
    expect(result.toISOString()).toBe('2024-12-31T16:00:00.000Z');
  });

  it('returns Day.js object for valid date string in local timezone', () => {
    const result = atTimezone('2024-12-31 00:00:00');
    expect(result.isValid()).toBe(true);
    expect(result.format()).toBe(dayjs('2024-12-31').format());
    console.log(result.toISOString());
  });

  it('returns Day.js object for valid date string in UTC timezone', () => {
    const result = atTimezone('2024-12-31 17:01:32', 'UTC');
    expect(result.isValid()).toBe(true);
    expect(result.toISOString()).toBe('2024-12-31T17:01:32.000Z');
  });

  it('returns Day.js object for valid date string in specified timezone', () => {
    const result = atTimezone('2024-12-31 12:31:22', 'Asia/Shanghai');
    expect(result.isValid()).toBe(true);
    expect(result.toISOString()).toBe('2024-12-31T04:31:22.000Z');
  });

  it('returns Day.js object for Date object', () => {
    const date = new Date('2024-12-31T00:00:00Z');
    const result = atTimezone(date);
    expect(result.isValid()).toBe(true);
    expect(result.toDate()).toEqual(date);
  });

  it('returns Day.js object for Day.js object', () => {
    const date = dayjs('2024-12-31');
    const result = atTimezone(date);
    expect(result.isValid()).toBe(true);
    expect(result).toEqual(date);
  });

  it('throw TypeError for invalid date string', () => {
    expect(() => atTimezone('invalid')).toThrow(TypeError);
  });
});
