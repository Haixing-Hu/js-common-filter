////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import dayjs from 'dayjs';
import { toTimezone } from '../src';

describe('toTimezone', () => {
  it('returns null if value is null', () => {
    expect(toTimezone(null)).toBeNull();
  });

  it('returns null if value is undefined', () => {
    expect(toTimezone(undefined)).toBeNull();
  });

  it('returns null if value is empty string', () => {
    expect(toTimezone('')).toBeNull();
  });

  it('work correctly for specified timezone', () => {
    const result = toTimezone('2025-01-01T00:00:00.000Z', 'Asia/Shanghai');
    expect(result.toISOString()).toBe('2025-01-01T00:00:00.000Z');
    expect(result.format('YYYY-MM-DD HH:mm:ss')).toBe('2025-01-01 08:00:00');
  });

  it('returns correct timestamp for valid date string with specified timezone', () => {
    const result = toTimezone('2025-01-01T00:00:00.000Z', 'Asia/Tokyo');
    expect(result.format('YYYY-MM-DD HH:mm:ss')).toBe('2025-01-01 09:00:00');
  });

  it('work correctly for specified timezone with non-standard ISO timestamp format', () => {
    const result = toTimezone('2025-01-01T10:00:00Z', 'Asia/Shanghai');
    expect(result.toISOString()).toBe('2025-01-01T10:00:00.000Z');
    expect(result.format('YYYY-MM-DD HH:mm:ss')).toBe('2025-01-01 18:00:00');
  });

  it('returns correct UTC timestamp for valid date string in UTC timezone', () => {
    const result = toTimezone('2025-01-01T00:00:00.000Z', 'UTC');
    expect(result.toISOString()).toBe('2025-01-01T00:00:00.000Z');
    expect(result.format('YYYY-MM-DD HH:mm:ss')).toBe('2025-01-01 00:00:00');
  });

  it('returns correct local timestamp for valid date string in local timezone', () => {
    const result = toTimezone('2025-01-01T00:00:00.000Z');
    expect(result.toISOString()).toBe('2025-01-01T00:00:00.000Z');
    // expect(result.format('YYYY-MM-DD HH:mm:ss')).toBe('2025-01-01 08:00:00');
  });

  it('work correctly for Date object', () => {
    const datetime = new Date('2025-01-01T00:00:00.000Z');
    const result = toTimezone(datetime, 'Asia/Shanghai');
    expect(result.toISOString()).toBe('2025-01-01T00:00:00.000Z');
    expect(result.format('YYYY-MM-DD HH:mm:ss')).toBe('2025-01-01 08:00:00');
  });

  it('returns correct timestamp for valid Date object with specified timezone', () => {
    const datetime = new Date('2025-01-01T00:00:00.000Z');
    const result = toTimezone(datetime, 'Asia/Tokyo');
    expect(result.toISOString()).toBe('2025-01-01T00:00:00.000Z');
    expect(result.format('YYYY-MM-DD HH:mm:ss')).toBe('2025-01-01 09:00:00');
  });

  it('work correctly for dayjs object', () => {
    const datetime = dayjs('2025-01-01T00:00:00.000Z');
    const result = toTimezone(datetime, 'Asia/Shanghai');
    expect(result.toISOString()).toBe('2025-01-01T00:00:00.000Z');
    expect(result.format('YYYY-MM-DD HH:mm:ss')).toBe('2025-01-01 08:00:00');
  });

  it('returns correct timestamp for valid dayjs object with specified timezone', () => {
    const datetime = dayjs('2025-01-01T00:00:00.000Z');
    const result = toTimezone(datetime, 'Asia/Tokyo');
    expect(result.toISOString()).toBe('2025-01-01T00:00:00.000Z');
    expect(result.format('YYYY-MM-DD HH:mm:ss')).toBe('2025-01-01 09:00:00');
  });

  it('throws TypeError for non-ISO-8601 string', () => {
    expect(() => toTimezone('2025-31-12')).toThrow(TypeError);
  });

  it('throws TypeError for invalid data type', () => {
    expect(() => toTimezone(12345)).toThrow(TypeError);
  });

  it('throws TypeError for invalid Date object', () => {
    const datetime = new Date('2025-31-12 00:00:000');
    expect(() => toTimezone(datetime)).toThrow(TypeError);
  });
});
