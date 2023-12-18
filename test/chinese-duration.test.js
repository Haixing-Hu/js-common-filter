////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { chineseDuration } from '../src';

/**
 * 单元测试 'src/chinese-duration.js'，不指定precision
 *
 * @author 胡海星
 */
describe('src/chinese-duration.js，不指定precision', () => {
  test('undefined', () => {
    expect(chineseDuration(undefined))
      .toBe('无');
  });
  test('null', () => {
    expect(chineseDuration(null))
      .toBe('无');
  });
  test('空字符串', () => {
    expect(chineseDuration(''))
      .toBe('无');
  });
  test('非数字', () => {
    expect(chineseDuration('100'))
      .toBe('无');
  });
  test('负数', () => {
    expect(chineseDuration(-10))
      .toBe('无');
  });
  test('正数，小于1分钟', () => {
    expect(chineseDuration(24))
      .toBe('24秒');
  });
  test('正数，小于1小时', () => {
    expect(chineseDuration(124))
      .toBe('2分4秒');
  });
  test('正数，大于1小时', () => {
    expect(chineseDuration(40564))
      .toBe('11小时16分4秒');
  });
  test('正数带小数', () => {
    expect(chineseDuration(40564.54))
      .toBe('11小时16分5秒');
  });
  test('正数带小数，测试四舍五入', () => {
    expect(chineseDuration(30010 / 1000))
      .toBe('30秒');
    expect(chineseDuration(31010 / 1000))
      .toBe('31秒');
  });
  test('正数，大于1小时，分钟、秒都是0', () => {
    expect(chineseDuration(7200))
      .toBe('2小时');
  });
  test('正数，大于1小时，分钟不是0，秒是0', () => {
    expect(chineseDuration(7260))
      .toBe('2小时1分钟');
  });
  test('正数，大于1小时，分钟是0，秒不是0', () => {
    expect(chineseDuration(3606))
      .toBe('1小时0分6秒');
  });
  test('正数，小于1小时，分钟不是0，秒是0', () => {
    expect(chineseDuration(120))
      .toBe('2分钟');
  });
});

/**
 * 单元测试 'src/chinese-duration.js'，指定precision为'second'
 *
 * @author 胡海星
 */
 describe('src/chinese-duration.js，指定precision为"second"', () => {
  test('undefined, precision = "second"', () => {
    expect(chineseDuration(undefined, 'second'))
      .toBe('无');
  });
  test('null, precision = "second"', () => {
    expect(chineseDuration(null, 'second'))
      .toBe('无');
  });
  test('空字符串, precision = "second"', () => {
    expect(chineseDuration('', 'second'))
      .toBe('无');
  });
  test('非数字, precision = "second"', () => {
    expect(chineseDuration('100', 'second'))
      .toBe('无');
  });
  test('负数, precision = "second"', () => {
    expect(chineseDuration(-10, 'second'))
      .toBe('无');
  });
  test('正数，小于1分钟, precision = "second"', () => {
    expect(chineseDuration(24, 'second'))
      .toBe('24秒');
  });
  test('正数，小于1小时, precision = "second"', () => {
    expect(chineseDuration(124, 'second'))
      .toBe('2分4秒');
  });
  test('正数，大于1小时, precision = "second"', () => {
    expect(chineseDuration(40564, 'second'))
      .toBe('11小时16分4秒');
  });
  test('正数带小数, precision = "second"', () => {
    expect(chineseDuration(40564.54, 'second'))
      .toBe('11小时16分5秒');
  });
  test('正数带小数，测试四舍五入, precision = "second"', () => {
    expect(chineseDuration(30010 / 1000, 'second'))
      .toBe('30秒');
    expect(chineseDuration(31010 / 1000, 'second'))
      .toBe('31秒');
  });
  test('正数，大于1小时，分钟、秒都是0, precision = "second"', () => {
    expect(chineseDuration(7200, 'second'))
      .toBe('2小时');
  });
  test('正数，大于1小时，分钟不是0，秒是0, precision = "second"', () => {
    expect(chineseDuration(7260, 'second'))
      .toBe('2小时1分钟');
  });
  test('正数，大于1小时，分钟是0，秒不是0, precision = "second"', () => {
    expect(chineseDuration(3606, 'second'))
      .toBe('1小时0分6秒');
  });
  test('正数，小于1小时，分钟不是0，秒是0, precision = "second"', () => {
    expect(chineseDuration(120, 'second'))
      .toBe('2分钟');
  });
});

/**
 * 单元测试 'src/chinese-duration.js'，指定precision为'minute'。
 *
 * @author 胡海星
 */
 describe('src/chinese-duration.js，指定precision为"minute"', () => {
  test('undefined, precision = "minute"', () => {
    expect(chineseDuration(undefined, 'minute'))
      .toBe('无');
  });
  test('null, precision = "minute"', () => {
    expect(chineseDuration(null, 'minute'))
      .toBe('无');
  });
  test('空字符串, precision = "minute"', () => {
    expect(chineseDuration('', 'minute'))
      .toBe('无');
  });
  test('非数字, precision = "minute"', () => {
    expect(chineseDuration('100', 'minute'))
      .toBe('无');
  });
  test('负数, precision = "minute"', () => {
    expect(chineseDuration(-10, 'minute'))
      .toBe('无');
  });
  test('正数，小于30秒, precision = "minute"', () => {
    expect(chineseDuration(24, 'minute'))
      .toBe('0分钟');
  });
  test('正数，等于30秒, precision = "minute"', () => {
    expect(chineseDuration(30, 'minute'))
      .toBe('1分钟');
  });
  test('正数，大于30秒小于1分钟, precision = "minute"', () => {
    expect(chineseDuration(31, 'minute'))
      .toBe('1分钟');
  });
  test('正数，大于1分钟，零头小于30秒, precision = "minute"', () => {
    expect(chineseDuration(124, 'minute'))
      .toBe('2分钟');
  });
  test('正数，大于1分钟，零头等于30秒, precision = "minute"', () => {
    expect(chineseDuration(150, 'minute'))
      .toBe('3分钟');
  });
  test('正数，大于1分钟，零头大于30秒, precision = "minute"', () => {
    expect(chineseDuration(151, 'minute'))
      .toBe('3分钟');
  });
  test('正数，大于1小时, 零头小于30秒，precision = "minute"', () => {
    expect(chineseDuration(40564, 'minute'))
      .toBe('11小时16分钟');
  });
  test('正数，大于1小时, 零头等于30秒，precision = "minute"', () => {
    expect(chineseDuration(40590, 'minute'))
      .toBe('11小时17分钟');
  });
  test('正数，大于1小时, 零头大于30秒，precision = "minute"', () => {
    expect(chineseDuration(40591, 'minute'))
      .toBe('11小时17分钟');
  });
  test('正数，大于1小时，分钟、秒都是0, precision = "minute"', () => {
    expect(chineseDuration(7200, 'minute'))
      .toBe('2小时');
  });
  test('正数，大于1小时，分钟不是0，秒是0, precision = "minute"', () => {
    expect(chineseDuration(7260, 'minute'))
      .toBe('2小时1分钟');
  });
  test('正数，大于1小时，分钟是0，秒不是0，但小于30秒, precision = "minute"', () => {
    expect(chineseDuration(3606, 'minute'))
      .toBe('1小时');
  });
  test('正数，大于1小时，分钟是0，秒是30秒, precision = "minute"', () => {
    expect(chineseDuration(3630, 'minute'))
      .toBe('1小时1分钟');
  });
  test('正数，大于1小时，分钟是0，秒大于30秒, precision = "minute"', () => {
    expect(chineseDuration(3631, 'minute'))
      .toBe('1小时1分钟');
  });
  test('正数，小于1小时，分钟不是0，秒是0, precision = "minute"', () => {
    expect(chineseDuration(120, 'minute'))
      .toBe('2分钟');
  });
  test('正数，小于1小时，分钟不是0，秒不是0，小于30秒, precision = "minute"', () => {
    expect(chineseDuration(121, 'minute'))
      .toBe('2分钟');
  });
  test('正数，小于1小时，分钟不是0，秒等于30秒, precision = "minute"', () => {
    expect(chineseDuration(150, 'minute'))
      .toBe('3分钟');
  });
  test('正数，小于1小时，分钟不是0，秒大于30秒, precision = "minute"', () => {
    expect(chineseDuration(151, 'minute'))
      .toBe('3分钟');
  });
});

/**
 * 单元测试 'src/chinese-duration.js'，指定precision为'hour'。
 *
 * @author 胡海星
 */
 describe('src/chinese-duration.js，指定precision为"hour"', () => {
  test('undefined, precision = "hour"', () => {
    expect(chineseDuration(undefined, 'hour'))
      .toBe('无');
  });
  test('null, precision = "hour"', () => {
    expect(chineseDuration(null, 'hour'))
      .toBe('无');
  });
  test('空字符串, precision = "hour"', () => {
    expect(chineseDuration('', 'hour'))
      .toBe('无');
  });
  test('非数字, precision = "hour"', () => {
    expect(chineseDuration('100', 'hour'))
      .toBe('无');
  });
  test('负数, precision = "hour"', () => {
    expect(chineseDuration(-10, 'hour'))
      .toBe('无');
  });
  test('正数，小于60秒, precision = "hour"', () => {
    expect(chineseDuration(59, 'hour'))
      .toBe('0小时');
  });
  test('正数，小于30分钟, precision = "hour"', () => {
    expect(chineseDuration(1779, 'hour'))
      .toBe('0小时');
  });
  test('正数，小于30分钟, seconds === 0, precision = "hour"', () => {
    expect(chineseDuration(1740, 'hour'))
      .toBe('0小时');
  });
  test('正数，等于30分钟, precision = "hour"', () => {
    expect(chineseDuration(1800, 'hour'))
      .toBe('1小时');
  });
  test('正数，大于30分钟小于1小时, precision = "hour"', () => {
    expect(chineseDuration(1801, 'hour'))
      .toBe('1小时');
  });
  test('正数，大于1小时，零头小于30分钟, precision = "hour"', () => {
    expect(chineseDuration(5399, 'hour'))
      .toBe('1小时');
  });
  test('正数，大于1小时，零头等于30分钟, precision = "hour"', () => {
    expect(chineseDuration(5400, 'hour'))
      .toBe('2小时');
  });
  test('正数，大于1小时，零头大于30分钟, precision = "hour"', () => {
    expect(chineseDuration(5401, 'hour'))
      .toBe('2小时');
  });
  test('正数，大于1小时，分钟、秒都是0, precision = "hour"', () => {
    expect(chineseDuration(7200, 'hour'))
      .toBe('2小时');
  });
  test('正数，大于1小时，分钟不是0但小于30分钟，秒是0, precision = "hour"', () => {
    expect(chineseDuration(8940, 'hour'))
      .toBe('2小时');
  });
  test('正数，大于1小时，分钟是0，秒不是0，但小于30秒, precision = "hour"', () => {
    expect(chineseDuration(7229, 'hour'))
      .toBe('2小时');
  });
  test('正数，大于1小时，分钟是0，秒是30秒, precision = "hour"', () => {
    expect(chineseDuration(7230, 'hour'))
      .toBe('2小时');
  });
  test('正数，大于1小时，分钟是0，秒大于30秒, precision = "hour"', () => {
    expect(chineseDuration(7231, 'hour'))
      .toBe('2小时');
  });
  test('正数，小于1小时，分钟不是0但小于30，秒是0, precision = "hour"', () => {
    expect(chineseDuration(1799, 'hour'))
      .toBe('0小时');
  });
  test('正数，小于1小时，分钟小于30，秒不是0，小于30秒, precision = "hour"', () => {
    expect(chineseDuration(1769, 'hour'))
      .toBe('0小时');
  });
  test('正数，小于1小时，分钟小于30，秒不是0，等于30秒, precision = "hour"', () => {
    expect(chineseDuration(1770, 'hour'))
      .toBe('0小时');
  });
  test('正数，小于1小时，分钟是30，秒等于30秒, precision = "hour"', () => {
    expect(chineseDuration(1830, 'hour'))
      .toBe('1小时');
  });
  test('正数，小于1小时，分钟大于30，秒大于30秒, precision = "hour"', () => {
    expect(chineseDuration(1891, 'hour'))
      .toBe('1小时');
  });
});

/**
 * 单元测试 'src/chinese-duration.js'，指定precision不合法。
 *
 * @author 胡海星
 */
describe('src/chinese-duration.js，指定precision不合法', () => {
  test('undefined, precision = "xxx"', () => {
    expect(() => chineseDuration(undefined, 'xxx'))
      .toThrow('Unsupported precision');
  });
});


/**
 * 单元测试 'src/chinese-duration.js'，指定precision为'minute', preferNonZero为true。
 *
 * @author 胡海星
 */
 describe('src/chinese-duration.js，指定precision为"minute", preferNonZero为true', () => {
  test('undefined, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(undefined, 'minute', true))
      .toBe('无');
  });
  test('null, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(null, 'minute', true))
      .toBe('无');
  });
  test('空字符串, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration('', 'minute', true))
      .toBe('无');
  });
  test('非数字, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration('100', 'minute', true))
      .toBe('无');
  });
  test('负数, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(-10, 'minute', true))
      .toBe('无');
  });
  test('正数，小于30秒, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(24, 'minute', true))
      .toBe('24秒');
  });
  test('正数，等于30秒, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(30, 'minute', true))
      .toBe('30秒');
  });
  test('正数，大于30秒小于1分钟, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(31, 'minute', true))
      .toBe('31秒');
  });
  test('正数，大于1分钟，零头小于30秒, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(124, 'minute', true))
      .toBe('2分钟');
  });
  test('正数，大于1分钟，零头等于30秒, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(150, 'minute', true))
      .toBe('3分钟');
  });
  test('正数，大于1分钟，零头大于30秒, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(151, 'minute', true))
      .toBe('3分钟');
  });
  test('正数，大于1小时, 零头小于30秒，precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(40564, 'minute', true))
      .toBe('11小时16分钟');
  });
  test('正数，大于1小时, 零头等于30秒，precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(40590, 'minute', true))
      .toBe('11小时17分钟');
  });
  test('正数，大于1小时, 零头大于30秒，precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(40591, 'minute', true))
      .toBe('11小时17分钟');
  });
  test('正数，大于1小时，分钟、秒都是0, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(7200, 'minute', true))
      .toBe('2小时');
  });
  test('正数，大于1小时，分钟不是0，秒是0, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(7260, 'minute', true))
      .toBe('2小时1分钟');
  });
  test('正数，大于1小时，分钟是0，秒不是0，但小于30秒, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(3606, 'minute', true))
      .toBe('1小时');
  });
  test('正数，大于1小时，分钟是0，秒是30秒, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(3630, 'minute', true))
      .toBe('1小时1分钟');
  });
  test('正数，大于1小时，分钟是0，秒大于30秒, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(3631, 'minute', true))
      .toBe('1小时1分钟');
  });
  test('正数，小于1小时，分钟不是0，秒是0, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(120, 'minute', true))
      .toBe('2分钟');
  });
  test('正数，小于1小时，分钟不是0，秒不是0，小于30秒, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(121, 'minute', true))
      .toBe('2分钟');
  });
  test('正数，小于1小时，分钟不是0，秒等于30秒, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(150, 'minute', true))
      .toBe('3分钟');
  });
  test('正数，小于1小时，分钟不是0，秒大于30秒, precision = "minute", preferNonZero为true', () => {
    expect(chineseDuration(151, 'minute', true))
      .toBe('3分钟');
  });
});

/**
 * 单元测试 'src/chinese-duration.js'，指定precision为'hour'。
 *
 * @author 胡海星
 */
 describe('src/chinese-duration.js，指定precision为"hour", preferNonZero为true', () => {
  test('undefined, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(undefined, 'hour', true))
      .toBe('无');
  });
  test('null, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(null, 'hour', true))
      .toBe('无');
  });
  test('空字符串, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration('', 'hour', true))
      .toBe('无');
  });
  test('非数字, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration('100', 'hour', true))
      .toBe('无');
  });
  test('负数, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(-10, 'hour', true))
      .toBe('无');
  });
  test('正数，小于60秒, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(59, 'hour', true))
      .toBe('59秒');
  });
  test('正数，小于30分钟, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(1779, 'hour', true))
      .toBe('30分钟');
  });
  test('正数，小于30分钟, seconds === 0, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(1740, 'hour', true))
      .toBe('29分钟');
  });
  test('正数，等于30分钟, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(1800, 'hour', true))
      .toBe('30分钟');
  });
  test('正数，大于30分钟小于1小时, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(1801, 'hour', true))
      .toBe('30分钟');
  });
  test('正数，大于1小时，零头小于30分钟, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(5399, 'hour', true))
      .toBe('1小时');
  });
  test('正数，大于1小时，零头等于30分钟, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(5400, 'hour', true))
      .toBe('2小时');
  });
  test('正数，大于1小时，零头大于30分钟, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(5401, 'hour', true))
      .toBe('2小时');
  });
  test('正数，大于1小时，分钟、秒都是0, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(7200, 'hour', true))
      .toBe('2小时');
  });
  test('正数，大于1小时，分钟不是0但小于30分钟，秒是0, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(8940, 'hour', true))
      .toBe('2小时');
  });
  test('正数，大于1小时，分钟是0，秒不是0，但小于30秒, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(7229, 'hour', true))
      .toBe('2小时');
  });
  test('正数，大于1小时，分钟是0，秒是30秒, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(7230, 'hour', true))
      .toBe('2小时');
  });
  test('正数，大于1小时，分钟是0，秒大于30秒, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(7231, 'hour', true))
      .toBe('2小时');
  });
  test('正数，小于1小时，分钟不是0但小于30，秒是0, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(1799, 'hour', true))
      .toBe('30分钟');
  });
  test('正数，小于1小时，分钟小于30，秒不是0，小于30秒, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(1769, 'hour', true))
      .toBe('29分钟');
  });
  test('正数，小于1小时，分钟小于30，秒不是0，等于30秒, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(1770, 'hour', true))
      .toBe('30分钟');
  });
  test('正数，小于1小时，分钟是30，秒等于30秒, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(1830, 'hour', true))
      .toBe('31分钟');
  });
  test('正数，小于1小时，分钟大于30，秒大于30秒, precision = "hour", preferNonZero为true', () => {
    expect(chineseDuration(1891, 'hour', true))
      .toBe('32分钟');
  });
});
