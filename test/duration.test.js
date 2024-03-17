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
    expect(duration(undefined, { precision: 'second' }))
      .toBe('00:00');
  });
  test('null，指定precision为"second"', () => {
    expect(duration(null, { precision: 'second' }))
      .toBe('00:00');
  });
  test('空字符串，指定precision为"second"', () => {
    expect(duration('', { precision: 'second' }))
      .toBe('00:00');
  });
  test('非数字，指定precision为"second"', () => {
    expect(duration('100', { precision: 'second' }))
      .toBe('00:00');
  });
  test('负数，指定precision为"second"', () => {
    expect(duration(-10, { precision: 'second' }))
      .toBe('00:00');
  });
  test('正数，小于1小时，指定precision为"second"', () => {
    expect(duration(124, { precision: 'second' }))
      .toBe('02:04');
  });
  test('正数，大于1小时小于10小时，指定precision为"second"', () => {
    expect(duration(33364, { precision: 'second' }))
      .toBe('09:16:04');
  });
  test('正数带小数，大于10小时，指定precision为"second"', () => {
    expect(duration(40564.54, { precision: 'second' }))
      .toBe('11:16:05');
  });
  test('正数带小数，大于100小时，指定precision为"second"', () => {
    expect(duration(400564.54, { precision: 'second' }))
      .toBe('111:16:05');
  });
  test('正数带小数，小于1小时，指定precision为"second"', () => {
    expect(duration(30010 / 1000, { precision: 'second' }))
      .toBe('00:30');
    expect(duration(31010 / 1000, { precision: 'second' }))
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
    expect(duration(undefined, { precision: 'minute' }))
      .toBe('00:00');
  });
  test('null，指定precision为"minute"', () => {
    expect(duration(null, { precision: 'minute' }))
      .toBe('00:00');
  });
  test('空字符串，指定precision为"minute"', () => {
    expect(duration('', { precision: 'minute' }))
      .toBe('00:00');
  });
  test('非数字，指定precision为"minute"', () => {
    expect(duration('100', { precision: 'minute' }))
      .toBe('00:00');
  });
  test('负数，指定precision为"minute"', () => {
    expect(duration(-10, { precision: 'minute' }))
      .toBe('00:00');
  });
  test('正数，小于1小时，零头小于30秒，指定precision为"minute"', () => {
    expect(duration(124, { precision: 'minute' }))
      .toBe('02');
  });
  test('正数，小于1小时，零头等于30秒，指定precision为"minute"', () => {
    expect(duration(150, { precision: 'minute' }))
      .toBe('03');
  });
  test('正数，小于1小时，零头大于30秒，指定precision为"minute"', () => {
    expect(duration(151, { precision: 'minute' }))
      .toBe('03');
  });
  test('正数，大于1小时小于10小时，零头小于30秒，指定precision为"minute"', () => {
    expect(duration(33389, { precision: 'minute' }))
      .toBe('09:16');
  });
  test('正数，大于1小时小于10小时，零头等于30秒，指定precision为"minute"', () => {
    expect(duration(33390, { precision: 'minute' }))
      .toBe('09:17');
  });
  test('正数，大于1小时小于10小时，零头大于30秒，指定precision为"minute"', () => {
    expect(duration(33391, { precision: 'minute' }))
      .toBe('09:17');
  });
  test('正数带小数，大于10小时，零头小于30秒，指定precision为"minute"', () => {
    expect(duration(40564.54, { precision: 'minute' }))
      .toBe('11:16');
  });
  test('正数带小数，大于10小时，零头等于30秒，指定precision为"minute"', () => {
    expect(duration(40589.54, { precision: 'minute' }))
      .toBe('11:17');
  });
  test('正数带小数，大于10小时，零头大于30秒，指定precision为"minute"', () => {
    expect(duration(40590.54, { precision: 'minute' }))
      .toBe('11:17');
  });
  test('正数带小数，大于100小时，零头小于30秒，指定precision为"minute"', () => {
    expect(duration(400564.54, { precision: 'minute' }))
      .toBe('111:16');
  });
  test('正数带小数，大于100小时，零头等于30秒，指定precision为"minute"', () => {
    expect(duration(400589.54, { precision: 'minute' }))
      .toBe('111:17');
  });
  test('正数带小数，大于100小时，零头大于30秒，指定precision为"minute"', () => {
    expect(duration(400590.54, { precision: 'minute' }))
      .toBe('111:17');
  });
  test('正数带小数，小于1分钟，指定precision为"minute"', () => {
    expect(duration(29.499, { precision: 'minute' }))
      .toBe('00');
    expect(duration(29.50, { precision: 'minute' }))
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
    expect(duration(undefined, { precision: 'hour' }))
      .toBe('00');
  });
  test('null，指定precision为"hour"', () => {
    expect(duration(null, { precision: 'hour' }))
      .toBe('00');
  });
  test('空字符串，指定precision为"hour"', () => {
    expect(duration('', { precision: 'hour' }))
      .toBe('00');
  });
  test('非数字，指定precision为"hour"', () => {
    expect(duration('100', { precision: 'hour' }))
      .toBe('00');
  });
  test('负数，指定precision为"hour"', () => {
    expect(duration(-10, { precision: 'hour' }))
      .toBe('00');
  });
  test('正数，小于1小时，零头小于30分，指定precision为"hour"', () => {
    expect(duration(124, { precision: 'hour' }))
      .toBe('00');
  });
  test('正数，小于1小时，零头等于30分，指定precision为"hour"', () => {
    expect(duration(1800, { precision: 'hour' }))
      .toBe('01');
  });
  test('正数，小于1小时，零头大于30分，指定precision为"hour"', () => {
    expect(duration(1801, { precision: 'hour' }))
      .toBe('01');
  });
  test('正数，大于1小时小于10小时，零头小于30分，指定precision为"hour"', () => {
    expect(duration(30599, { precision: 'hour' }))
      .toBe('08');
  });
  test('正数，大于1小时小于10小时，零头等于30分，指定precision为"hour"', () => {
    expect(duration(30600, { precision: 'hour' }))
      .toBe('09');
  });
  test('正数，大于1小时小于10小时，零头大于30秒，指定precision为"hour"', () => {
    expect(duration(30660, { precision: 'hour' }))
      .toBe('09');
  });
  test('正数带小数，大于10小时，零头小于30分，指定precision为"hour"', () => {
    expect(duration(37799.49, { precision: 'hour' }))
      .toBe('10');
  });
  test('正数带小数，大于10小时，零头等于30分，指定precision为"hour"', () => {
    expect(duration(37799.50, { precision: 'hour' }))
      .toBe('11');
  });
  test('正数带小数，大于10小时，零头大于30分，指定precision为"hour"', () => {
    expect(duration(37860.54, { precision: 'hour' }))
      .toBe('11');
  });
  test('正数带小数，大于100小时，零头小于30分，指定precision为"hour"', () => {
    expect(duration(433799.49, { precision: 'hour' }))
      .toBe('120');
  });
  test('正数带小数，大于100小时，零头等于30秒，指定precision为"hour"', () => {
    expect(duration(433799.50, { precision: 'hour' }))
      .toBe('121');
  });
  test('正数带小数，大于100小时，零头大于30秒，指定precision为"hour"', () => {
    expect(duration(433860.54, { precision: 'hour' }))
      .toBe('121');
  });
  test('正数带小数，小于1分钟，指定precision为"hour"', () => {
    expect(duration(29.499, { precision: 'hour' }))
      .toBe('00');
    expect(duration(29.50, { precision: 'hour' }))
      .toBe('00');
  });
});

/**
 * 单元测试 'src/duration.js'，指定precision不合法。
 *
 * @author 胡海星
 */
describe('src/duration.js，指定precision不合法', () => {
  test('invalid precision', () => {
    expect(() => duration(29.499, { precision: 'xxx' }))
      .toThrow('Unsupported precision: only "hour", "minute" and "second" is supported.');
  });
  test('unsupported precision', () => {
    expect(() => duration(100, { precision: 'millisecond' }))
      .toThrow('Unsupported precision: only "hour", "minute" and "second" is supported.');
  });
});

/**
 * 单元测试 'src/duration.js'，指定options.full
 *
 * @author 胡海星
 */
describe('src/duration.js，指定options.full', () => {
  test('正数，小于1小时，零头小于30分，指定options.full', () => {
    expect(duration(124, { full: true }))
      .toBe('00:02:04');
  });
  test('正数，小于1小时，零头等于30分，指定options.full', () => {
    expect(duration(1800, { full: true }))
      .toBe('00:30:00');
  });
  test('正数，小于1小时，零头大于30分，指定options.full', () => {
    expect(duration(1801, { full: true }))
      .toBe('00:30:01');
  });
  test('正数，大于1小时小于10小时，零头小于30分，指定options.full', () => {
    expect(duration(30599, { full: true }))
      .toBe('08:29:59');
  });
  test('正数，大于1小时小于10小时，零头等于30分，指定options.full', () => {
    expect(duration(30600, { full: true }))
      .toBe('08:30:00');
  });
  test('正数，大于1小时小于10小时，零头大于30秒，指定options.full', () => {
    expect(duration(30660, { full: true }))
      .toBe('08:31:00');
  });
});

/**
 * 单元测试 'src/duration.js'，覆盖源码的64，84，90行
 *
 * @author 胡海星
 */
describe('src/duration.js，覆盖源码的64，84，90行', () => {
  // 测试62行
  test('测试62行', () => {
    expect(duration(undefined, { precision: 'second', full: true }))
      .toBe('00:00:00');
    expect(duration(null, { precision: 'second', full: true }))
      .toBe('00:00:00');
    expect(duration('x', { precision: 'second', full: true }))
      .toBe('00:00:00');
  });
  // 测试84行
  test('测试84行', () => {
    expect(duration(1800, { precision: 'hour', full: true }))
      .toBe('01:00:00');
    expect(duration(3780, { precision: 'hour', full: true }))
      .toBe('01:00:00');
    expect(duration(5401, { precision: 'hour', full: true }))
      .toBe('02:00:00');
  });
  // 测试90行
  test('测试90行', () => {
    expect(duration(667, { precision: 'minute', full: true }))
      .toBe('00:11:00');
    expect(duration(3600, { precision: 'minute', full: true }))
      .toBe('01:00:00');
    expect(duration(3667, { precision: 'minute', full: true }))
      .toBe('01:01:00');
  });

  // // 测试64行，需要一个非整数的秒数
  // test('非整数秒数，指定精度为"second"', () => {
  //   expect(duration(123.5, { precision: 'second' }))
  //     .toBe('02:03:24');
  // });

  // // 测试84行，需要一个小时数为0的时间
  // test('小时数为0，指定精度为"minute"', () => {
  //   expect(duration(59, { precision: 'minute' }))
  //     .toBe('01');
  // });

  // // 测试90行，需要一个小时数不为0的时间
  // test('小时数不为0，指定精度为"minute"', () => {
  //   expect(duration(3601, { precision: 'minute' }))
  //     .toBe('01:00');
  // });
  // // 测试62行，需要一个非整数的秒数
  // test('非整数秒数，指定精度为"second"，full为true', () => {
  //   expect(duration(123.5, { precision: 'second', full: true }))
  //     .toBe('00:02:03.500');
  // });

  // // 测试84行，需要一个小时数为0的时间
  // test('小时数为0，指定精度为"minute"，full为true', () => {
  //   expect(duration(59, { precision: 'minute', full: true }))
  //     .toBe('00:59:00');
  // });

  // // 测试90行，需要一个小时数不为0的时间
  // test('小时数不为0，指定精度为"minute"，full为true', () => {
  //   expect(duration(3601, { precision: 'minute', full: true }))
  //     .toBe('01:00:01');
  // });

  // // 测试84行，需要一个小时数为0的时间
  // test('小时数为0，指定精度为"minute"，full为true', () => {
  //   expect(duration(59, { precision: 'minute', full: true }))
  //     .toBe('00:59:00');
  // });
});
