# @qubit-ltd/common-filter

[![npm包](https://img.shields.io/npm/v/@qubit-ltd/common-filter.svg)](https://npmjs.com/package/@qubit-ltd/common-filter)
[![许可证](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![English Document](https://img.shields.io/badge/Document-English-blue.svg)](README.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Haixing-Hu/js-common-filter/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Haixing-Hu/js-common-filter/tree/master)
[![测试覆盖率](https://coveralls.io/repos/github/Haixing-Hu/js-common-filter/badge.svg?branch=master)](https://coveralls.io/github/Haixing-Hu/js-common-filter?branch=master)

[@qubit-ltd/common-filter] 是一个JavaScript ES6库，提供各种常用的过滤和格式化功能，用于处理日期、时间、时长、货币值等多种数据类型。

## 目录

- [安装](#安装)
- [功能特点](#功能特点)
- [使用方法](#使用方法)
- [API概览](#api概览)
- [贡献](#贡献)
- [许可证](#许可证)

## <span id="安装">安装</span>

```bash
# 使用 npm
npm install @qubit-ltd/common-filter

# 使用 yarn
yarn add @qubit-ltd/common-filter
```

## <span id="功能特点">功能特点</span>

- 支持多种模式的日期和时间格式化
- 支持不同时区间的转换
- 支持多种样式的时长格式化（包括中文格式）
- 货币值格式化
- 是/否，有/无等布尔值过滤
- 敏感数据隐私保护遮罩
- 数组到字符串的转换
- 百分比格式化
- 以及更多...

## <span id="使用方法">使用方法</span>

```javascript
import { formatDate, formatMoney, formatChineseDuration } from '@qubit-ltd/common-filter';

// 格式化日期
const date = new Date();
console.log(formatDate(date)); // 例如: "2023-05-25"

// 格式化货币
console.log(formatMoney(1234.56)); // 例如: "1,234.56"

// 以中文格式化时长
console.log(formatChineseDuration(3661)); // 例如: "1小时1分1秒"
```

## <span id="api概览">API概览</span>

本库提供以下主要类别的过滤器：

### 日期和时间格式化

- `formatDate`: 格式化日期
- `formatDatetime`: 格式化带时间的日期
- `formatDatetimeWithPattern`: 使用自定义模式格式化日期
- `formatChineseDate`: 以中文风格格式化日期
- `formatChineseDatetime`: 以中文风格格式化带时间的日期
- `formatChineseLocalDatetime`: 以中文本地格式格式化带时间的日期

### 时区处理

- `formatAtTimezone`: 在特定时区格式化日期
- `formatToTimezone`: 转换并格式化日期到特定时区

### 时长格式化

- `formatDuration`: 格式化以秒为单位的时长
- `formatChineseDuration`: 以中文风格格式化时长
- `formatDurationBetween`: 格式化两个日期之间的时长
- `formatChineseDurationBetween`: 以中文风格格式化两个日期之间的时长

### 值格式化

- `formatMoney`: 格式化货币值
- `formatPercent`: 格式化百分比值
- `formatYesNo`: 将布尔值格式化为"是/否"
- `formatYesNoUnknown`: 将值格式化为"是/否/未知"
- `formatHasHasnot`: 将布尔值格式化为"有/无"

### 文本处理

- `formatPrivacyMask`: 遮罩敏感文本数据
- `formatRemoveMidSpace`: 移除文本中间的空格
- `formatArrayToString`: 将数组转换为字符串表示

完整的API文档，请参考`doc`目录中生成的JSDoc文档。

## <span id="贡献">贡献</span>

如果您发现任何问题或有改进建议，欢迎在[GitHub仓库]提出issue或提交pull request。

## <span id="许可证">许可证</span>

[@qubit-ltd/common-filter]基于Apache 2.0许可证发布。
详情请参阅[LICENSE](LICENSE)文件。

[@qubit-ltd/common-filter]: https://npmjs.com/package/@qubit-ltd/common-filter
[GitHub仓库]: https://github.com/Haixing-Hu/js-common-filter 