////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import * as filters from '../src/index';

describe('src/index.js', () => {
  test('应该导出所有过滤器函数', () => {
    expect(filters.arrayToString).toBeDefined();
    expect(filters.chineseDate).toBeDefined();
    expect(filters.chineseDatetime).toBeDefined();
    expect(filters.chineseDuration).toBeDefined();
    expect(filters.chineseDurationBetween).toBeDefined();
    expect(filters.chineseLocalDatetime).toBeDefined();
    expect(filters.date).toBeDefined();
    expect(filters.datetime).toBeDefined();
    expect(filters.yearMonth).toBeDefined();
    expect(filters.datetimeWithPattern).toBeDefined();
    expect(filters.privacyMask).toBeDefined();
    expect(filters.time).toBeDefined();
    expect(filters.timeRange).toBeDefined();
    expect(filters.yesNo).toBeDefined();
    expect(filters.yesNoUnknown).toBeDefined();
    expect(filters.hasHasnot).toBeDefined();
    expect(filters.removeMidSpace).toBeDefined();
    expect(filters.MONEY_PREFIX).toBeDefined();
    expect(filters.money).toBeDefined();
    expect(filters.duration).toBeDefined();
    expect(filters.PERCENT_SYMBOL).toBeDefined();
    expect(filters.percent).toBeDefined();
    expect(filters.durationBetween).toBeDefined();
    expect(filters.dateToStartTimestamp).toBeDefined();
    expect(filters.dateToEndTimestamp).toBeDefined();
    expect(filters.atTimezone).toBeDefined();
    expect(filters.toTimezone).toBeDefined();
  });

  test('导出的函数应该能正常工作', () => {
    // 测试几个导出函数的基本功能
    expect(filters.arrayToString(['a', 'b', 'c'])).toBe('a b c');
    expect(filters.yesNo(true)).toBe('是');
    expect(filters.yesNo(false)).toBe('否');
    expect(filters.money(123.45)).toBe('¥ 123.45');
    expect(filters.percent(0.1234)).toBe('12 %');
  });
}); 