////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { percent, PERCENT_SYMBOL } from '../src';

/**
 * 单元测试 'src/percent.js'
 *
 * @author 胡海星
 */
describe('src/percent.js', () => {
  test('undefined', () => {
    expect(percent(undefined)).toBe('');
  });
  test('null', () => {
    expect(percent(null)).toBe('');
  });
  test('""', () => {
    expect(percent('')).toBe('');
  });
  test('"xx"', () => {
    expect(percent('xx')).toBe('');
  });
  test('"0.123"', () => {
    expect(percent('0.123')).toBe(`12${PERCENT_SYMBOL}`);
  });
  test('"0.126"', () => {
    expect(percent('0.126')).toBe(`13${PERCENT_SYMBOL}`);
  });
  test('"0.123123", 2', () => {
    expect(percent('0.123123', 2)).toBe(`12.31${PERCENT_SYMBOL}`);
  });
  test('"1.2315", 1', () => {
    expect(percent('1.2315', 1)).toBe(`123.2${PERCENT_SYMBOL}`);
  });
  test('".315"', () => {
    expect(percent('.315')).toBe(`32${PERCENT_SYMBOL}`);
  });
  test('"0"', () => {
    expect(percent('0')).toBe(`0${PERCENT_SYMBOL}`);
  });
  test('"0", 2', () => {
    expect(percent('0', 2)).toBe(`0.00${PERCENT_SYMBOL}`);
  });

  test('0.123', () => {
    expect(percent(0.123)).toBe(`12${PERCENT_SYMBOL}`);
  });
  test('0.126', () => {
    expect(percent(0.126)).toBe(`13${PERCENT_SYMBOL}`);
  });
  test('0.123123, 2', () => {
    expect(percent(0.123123, 2)).toBe(`12.31${PERCENT_SYMBOL}`);
  });
  test('1.2315, 1', () => {
    expect(percent(1.2315, 1)).toBe(`123.2${PERCENT_SYMBOL}`);
  });
  test('.315', () => {
    expect(percent(0.315)).toBe(`32${PERCENT_SYMBOL}`);
  });
  test('0', () => {
    expect(percent(0)).toBe(`0${PERCENT_SYMBOL}`);
  });
  test('0, 2', () => {
    expect(percent(0, 2)).toBe(`0.00${PERCENT_SYMBOL}`);
  });

  test('-.315', () => {
    expect(percent(-0.315)).toBe(`-31${PERCENT_SYMBOL}`);
  });
  test('-.314', () => {
    expect(percent(-0.314)).toBe(`-31${PERCENT_SYMBOL}`);
  });
  test('-.319', () => {
    expect(percent(-0.319)).toBe(`-32${PERCENT_SYMBOL}`);
  });
});
