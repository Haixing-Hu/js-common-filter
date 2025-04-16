////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import formatDatetimeWithPattern from '../src/datetime-with-pattern';

describe('src/datetime-with-pattern.js', () => {
  test('null input', () => {
    expect(formatDatetimeWithPattern(null)).toBeNull();
  });

  test('undefined input', () => {
    expect(formatDatetimeWithPattern(undefined)).toBeNull();
  });

  test('empty string input', () => {
    expect(formatDatetimeWithPattern('')).toBeNull();
  });

  test('valid date with default pattern and timezone', () => {
    const date = new Date('2023-01-15T10:30:45');
    const result = formatDatetimeWithPattern(date);
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
  });

  test('valid date with custom pattern', () => {
    const date = new Date('2023-01-15T10:30:45');
    const result = formatDatetimeWithPattern(date, 'DD/MM/YYYY HH:mm');
    expect(result).toMatch(/^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/);
  });

  test('valid date with custom timezone', () => {
    const date = new Date('2023-01-15T10:30:45Z'); // UTC time
    const result = formatDatetimeWithPattern(date, 'YYYY-MM-DD HH:mm:ss', 'UTC');
    expect(result).toBe('2023-01-15 10:30:45');
  });
});
