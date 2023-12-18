////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { money, MONEY_PREFIX } from '../src';

/**
 * 单元测试 'src/money.js'
 *
 * @author 胡海星
 */
describe('src/money.js', () => {
  test('undefined', () => {
    expect(money(undefined)).toBe('');
  });
  test('null', () => {
    expect(money(null)).toBe('');
  });
  test('""', () => {
    expect(money('')).toBe('');
  });
  test('"xx"', () => {
    expect(money('xx')).toBe('');
  });
  test('"12.3"', () => {
    expect(money('12.3')).toBe(`${MONEY_PREFIX}12.30`);
  });
  test('"123"', () => {
    expect(money('123')).toBe(`${MONEY_PREFIX}123.00`);
  });
  test('"12.3123"', () => {
    expect(money('12.3123')).toBe(`${MONEY_PREFIX}12.31`);
  });
  test('"12.315"', () => {
    expect(money('12.315')).toBe(`${MONEY_PREFIX}12.32`);
  });
  test('".315"', () => {
    expect(money('.315')).toBe(`${MONEY_PREFIX}0.32`);
  });

  test('12.3', () => {
    expect(money(12.3)).toBe(`${MONEY_PREFIX}12.30`);
  });
  test('123', () => {
    expect(money(123)).toBe(`${MONEY_PREFIX}123.00`);
  });
  test('12.3123', () => {
    expect(money(12.3123)).toBe(`${MONEY_PREFIX}12.31`);
  });
  test('12.315', () => {
    expect(money(12.315)).toBe(`${MONEY_PREFIX}12.32`);
  });
  test('.315', () => {
    expect(money(0.315)).toBe(`${MONEY_PREFIX}0.32`);
  });
  test('-.315', () => {
    expect(money(-0.315)).toBe(`${MONEY_PREFIX}-0.31`);
  });
  test('-.314', () => {
    expect(money(-0.314)).toBe(`${MONEY_PREFIX}-0.31`);
  });
  test('-.319', () => {
    expect(money(-0.319)).toBe(`${MONEY_PREFIX}-0.32`);
  });
});
