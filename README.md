# @qubit-ltd/common-filter

[![npm package](https://img.shields.io/npm/v/@qubit-ltd/common-filter.svg)](https://npmjs.com/package/@qubit-ltd/common-filter)
[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![中文文档](https://img.shields.io/badge/文档-中文版-blue.svg)](README.zh_CN.md)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Haixing-Hu/js-common-filter/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/Haixing-Hu/js-common-filter/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/Haixing-Hu/js-common-filter/badge.svg?branch=master)](https://coveralls.io/github/Haixing-Hu/js-common-filter?branch=master)

[@qubit-ltd/common-filter] is a JavaScript ES6 library of common filtering and formatting functions designed to handle various data types including dates, times, durations, monetary values, and more.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [API Overview](#api-overview)
- [Contributing](#contributing)
- [License](#license)

## <span id="installation">Installation</span>

```bash
# Using npm
npm install @qubit-ltd/common-filter

# Using yarn
yarn add @qubit-ltd/common-filter
```

## <span id="features">Features</span>

- Format and filter date and time values with various patterns
- Convert between different time zones
- Format durations in different styles (including Chinese language support)
- Format monetary values
- Handle yes/no, has/hasn't type filtering 
- Support privacy masking for sensitive data
- Convert arrays to string representation
- Support percentage formatting
- And more...

## <span id="usage">Usage</span>

```javascript
import { formatDate, formatMoney, formatChineseDuration } from '@qubit-ltd/common-filter';

// Format a date
const date = new Date();
console.log(formatDate(date)); // e.g., "2023-05-25"

// Format money
console.log(formatMoney(1234.56)); // e.g., "1,234.56"

// Format duration in Chinese
console.log(formatChineseDuration(3661)); // e.g., "1小时1分1秒"
```

## <span id="api-overview">API Overview</span>

The library provides the following main categories of filters:

### Date and Time Formatting

- `formatDate`: Format a date
- `formatDatetime`: Format a date with time
- `formatDatetimeWithPattern`: Format a date using a custom pattern
- `formatChineseDate`: Format a date in Chinese style
- `formatChineseDatetime`: Format a date with time in Chinese style
- `formatChineseLocalDatetime`: Format a date with time in Chinese local format

### Time Zone Handling

- `formatAtTimezone`: Format a date in a specific timezone
- `formatToTimezone`: Convert and format a date to a specific timezone

### Duration Formatting

- `formatDuration`: Format a duration in seconds
- `formatChineseDuration`: Format a duration in Chinese style
- `formatDurationBetween`: Format the duration between two dates
- `formatChineseDurationBetween`: Format the duration between two dates in Chinese style

### Value Formatting

- `formatMoney`: Format money values
- `formatPercent`: Format percentage values
- `formatYesNo`: Format boolean values as Yes/No
- `formatYesNoUnknown`: Format values as Yes/No/Unknown
- `formatHasHasnot`: Format boolean values as Has/Hasn't

### Text Processing

- `formatPrivacyMask`: Mask sensitive text data
- `formatRemoveMidSpace`: Remove middle spaces from text
- `formatArrayToString`: Convert arrays to string representation

For complete API documentation, please refer to the generated JSDoc in the `doc` directory.

## <span id="contributing">Contributing</span>

If you find any issues or have suggestions for improvements, please feel free
to open an issue or submit a pull request to the [GitHub repository].

## <span id="license">License</span>

[@qubit-ltd/common-filter] is distributed under the Apache 2.0 license.
See the [LICENSE](LICENSE) file for more details.

[@qubit-ltd/common-filter]: https://npmjs.com/package/@qubit-ltd/common-filter
[GitHub repository]: https://github.com/Haixing-Hu/js-common-filter
