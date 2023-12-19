////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { duration } from '../src';

/**
 * 单元测试 'src/duration.js'，不指定precision
 *
 * @author 胡海星
 */
describe('src/duration.js，不指定precision', () => {
  test('undefined', () => {
    expect(duration(undefined))
      .toBe('00:00');
  });
  test('null', () => {
    expect(duration(null))
      .toBe('00:00');
  });
  test('空字符串', () => {
    expect(duration(''))
      .toBe('00:00');
  });
  test('非数字', () => {
    expect(duration('100'))
      .toBe('00:00');
  });
  test('负数', () => {
    expect(duration(-10))
      .toBe('00:00');
  });
  test('正数，小于1小时', () => {
    expect(duration(124))
      .toBe('02:04');
  });
  test('正数，大于1小时小于10小时', () => {
    expect(duration(33364))
      .toBe('09:16:04');
  });
  test('正数带小数，大于10小时', () => {
    expect(duration(40564.54))
      .toBe('11:16:05');
  });
  test('正数带小数，大于100小时', () => {
    expect(duration(400564.54))
      .toBe('111:16:05');
  });
  test('正数带小数，小于1小时', () => {
    expect(duration(30010 / 1000))
      .toBe('00:30');
    expect(duration(31010 / 1000))
      .toBe('00:31');
  });
});

/**
 * 单元测试 'src/duration.js'，指定precision为"second"
 *
 * @author 胡海星
 */
describe('src/duration.js，指定precision为"second"', () => {
  test('undefined，指定precision为"second"', () => {
    expect(duration(undefined, 'second'))
      .toBe('00:00');
  });
  test('null，指定precision为"second"', () => {
    expect(duration(null, 'second'))
      .toBe('00:00');
  });
  test('空字符串，指定precision为"second"', () => {
    expect(duration('', 'second'))
      .toBe('00:00');
  });
  test('非数字，指定precision为"second"', () => {
    expect(duration('100', 'second'))
      .toBe('00:00');
  });
  test('负数，指定precision为"second"', () => {
    expect(duration(-10, 'second'))
      .toBe('00:00');
  });
  test('正数，小于1小时，指定precision为"second"', () => {
    expect(duration(124, 'second'))
      .toBe('02:04');
  });
  test('正数，大于1小时小于10小时，指定precision为"second"', () => {
    expect(duration(33364, 'second'))
      .toBe('09:16:04');
  });
  test('正数带小数，大于10小时，指定precision为"second"', () => {
    expect(duration(40564.54, 'second'))
      .toBe('11:16:05');
  });
  test('正数带小数，大于100小时，指定precision为"second"', () => {
    expect(duration(400564.54, 'second'))
      .toBe('111:16:05');
  });
  test('正数带小数，小于1小时，指定precision为"second"', () => {
    expect(duration(30010 / 1000, 'second'))
      .toBe('00:30');
    expect(duration(31010 / 1000, 'second'))
      .toBe('00:31');
  });
});

/**
 * 单元测试 'src/duration.js'，指定precision为"minute"
 *
 * @author 胡海星
 */
describe('src/duration.js，指定precision为"minute"', () => {
  test('undefined，指定precision为"minute"', () => {
    expect(duration(undefined, 'minute'))
      .toBe('00:00');
  });
  test('null，指定precision为"minute"', () => {
    expect(duration(null, 'minute'))
      .toBe('00:00');
  });
  test('空字符串，指定precision为"minute"', () => {
    expect(duration('', 'minute'))
      .toBe('00:00');
  });
  test('非数字，指定precision为"minute"', () => {
    expect(duration('100', 'minute'))
      .toBe('00:00');
  });
  test('负数，指定precision为"minute"', () => {
    expect(duration(-10, 'minute'))
      .toBe('00:00');
  });
  test('正数，小于1小时，零头小于30秒，指定precision为"minute"', () => {
    expect(duration(124, 'minute'))
      .toBe('02');
  });
  test('正数，小于1小时，零头等于30秒，指定precision为"minute"', () => {
    expect(duration(150, 'minute'))
      .toBe('03');
  });
  test('正数，小于1小时，零头大于30秒，指定precision为"minute"', () => {
    expect(duration(151, 'minute'))
      .toBe('03');
  });
  test('正数，大于1小时小于10小时，零头小于30秒，指定precision为"minute"', () => {
    expect(duration(33389, 'minute'))
      .toBe('09:16');
  });
  test('正数，大于1小时小于10小时，零头等于30秒，指定precision为"minute"', () => {
    expect(duration(33390, 'minute'))
      .toBe('09:17');
  });
  test('正数，大于1小时小于10小时，零头大于30秒，指定precision为"minute"', () => {
    expect(duration(33391, 'minute'))
      .toBe('09:17');
  });
  test('正数带小数，大于10小时，零头小于30秒，指定precision为"minute"', () => {
    expect(duration(40564.54, 'minute'))
      .toBe('11:16');
  });
  test('正数带小数，大于10小时，零头等于30秒，指定precision为"minute"', () => {
    expect(duration(40589.54, 'minute'))
      .toBe('11:17');
  });
  test('正数带小数，大于10小时，零头大于30秒，指定precision为"minute"', () => {
    expect(duration(40590.54, 'minute'))
      .toBe('11:17');
  });
  test('正数带小数，大于100小时，零头小于30秒，指定precision为"minute"', () => {
    expect(duration(400564.54, 'minute'))
      .toBe('111:16');
  });
  test('正数带小数，大于100小时，零头等于30秒，指定precision为"minute"', () => {
    expect(duration(400589.54, 'minute'))
      .toBe('111:17');
  });
  test('正数带小数，大于100小时，零头大于30秒，指定precision为"minute"', () => {
    expect(duration(400590.54, 'minute'))
      .toBe('111:17');
  });
  test('正数带小数，小于1分钟，指定precision为"minute"', () => {
    expect(duration(29.499, 'minute'))
      .toBe('00');
    expect(duration(29.50, 'minute'))
      .toBe('01');
  });
});

/**
 * 单元测试 'src/duration.js'，指定precision为"hour"
 *
 * @author 胡海星
 */
describe('src/duration.js，指定precision为"hour"', () => {
  test('undefined，指定precision为"hour"', () => {
    expect(duration(undefined, 'hour'))
      .toBe('00');
  });
  test('null，指定precision为"hour"', () => {
    expect(duration(null, 'hour'))
      .toBe('00');
  });
  test('空字符串，指定precision为"hour"', () => {
    expect(duration('', 'hour'))
      .toBe('00');
  });
  test('非数字，指定precision为"hour"', () => {
    expect(duration('100', 'hour'))
      .toBe('00');
  });
  test('负数，指定precision为"hour"', () => {
    expect(duration(-10, 'hour'))
      .toBe('00');
  });
  test('正数，小于1小时，零头小于30分，指定precision为"hour"', () => {
    expect(duration(124, 'hour'))
      .toBe('00');
  });
  test('正数，小于1小时，零头等于30分，指定precision为"hour"', () => {
    expect(duration(1800, 'hour'))
      .toBe('01');
  });
  test('正数，小于1小时，零头大于30分，指定precision为"hour"', () => {
    expect(duration(1801, 'hour'))
      .toBe('01');
  });
  test('正数，大于1小时小于10小时，零头小于30分，指定precision为"hour"', () => {
    expect(duration(30599, 'hour'))
      .toBe('08');
  });
  test('正数，大于1小时小于10小时，零头等于30分，指定precision为"hour"', () => {
    expect(duration(30600, 'hour'))
      .toBe('09');
  });
  test('正数，大于1小时小于10小时，零头大于30秒，指定precision为"hour"', () => {
    expect(duration(30660, 'hour'))
      .toBe('09');
  });
  test('正数带小数，大于10小时，零头小于30分，指定precision为"hour"', () => {
    expect(duration(37799.49, 'hour'))
      .toBe('10');
  });
  test('正数带小数，大于10小时，零头等于30分，指定precision为"hour"', () => {
    expect(duration(37799.50, 'hour'))
      .toBe('11');
  });
  test('正数带小数，大于10小时，零头大于30分，指定precision为"hour"', () => {
    expect(duration(37860.54, 'hour'))
      .toBe('11');
  });
  test('正数带小数，大于100小时，零头小于30分，指定precision为"hour"', () => {
    expect(duration(433799.49, 'hour'))
      .toBe('120');
  });
  test('正数带小数，大于100小时，零头等于30秒，指定precision为"hour"', () => {
    expect(duration(433799.50, 'hour'))
      .toBe('121');
  });
  test('正数带小数，大于100小时，零头大于30秒，指定precision为"hour"', () => {
    expect(duration(433860.54, 'hour'))
      .toBe('121');
  });
  test('正数带小数，小于1分钟，指定precision为"hour"', () => {
    expect(duration(29.499, 'hour'))
      .toBe('00');
    expect(duration(29.50, 'hour'))
      .toBe('00');
  });
});

/**
 * 单元测试 'src/duration.js'，指定precision不合法。
 *
 * @author 胡海星
 */
describe('src/duration.js，指定precision不合法', () => {
  test('undefined, precision = "xxx"', () => {
    expect(() => duration(undefined, 'xxx'))
      .toThrow('Unsupported precision');
  });
});
