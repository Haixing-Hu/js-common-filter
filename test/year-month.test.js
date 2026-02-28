import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import { yearMonth } from '../src';

dayjs.extend(utc);
dayjs.extend(timezone);

describe('src/year-month.js', () => {
  test('undefined', () => {
    expect(yearMonth(undefined)).toBeNull();
  });
  test('null', () => {
    expect(yearMonth(null)).toBeNull();
  });
  test('""', () => {
    expect(yearMonth('')).toBeNull();
  });
  test('"2020-10-28T12:31:01Z", utc', () => {
    expect(yearMonth('2020-10-28T12:31:01Z', 'utc')).toBe('2020-10');
  });
  test('"2020-10-28T12:03:00+08:00", utc', () => {
    expect(yearMonth('2020-10-28T12:03:00+08:00', 'utc')).toBe('2020-10');
  });
  test('"2020-10-28T12:31:01Z", local timezone', () => {
    expect(yearMonth('2020-10-28T12:31:01Z')).toBe(dayjs('2020-10-28T12:31:01Z').format('YYYY-MM'));
  });
  test('"2020-10-28T12:03:00+08:00", local timezone', () => {
    expect(yearMonth('2020-10-28T12:03:00+08:00')).toBe(dayjs('2020-10-28T12:03:00+08:00').format('YYYY-MM'));
  });
  test('"2020-10-28T12:31:01Z", Asia/Ust-Nera (UTC+10)', () => {
    expect(yearMonth('2020-10-28T12:31:01Z', 'Asia/Ust-Nera')).toBe('2020-10');
  });
  test('"2020-10-28T12:03:00+08:00", utc+10', () => {
    expect(yearMonth('2020-10-28T12:03:00+08:00', 'Asia/Ust-Nera')).toBe('2020-10');
  });
});
