////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { stringToFloat } from '@haixing_hu/common-util';
import { NumberRule } from '@haixing_hu/common-validation-rule';

const MONEY_PREFIX = '¥ ';

/**
 * 格式化金额值，加上人民币符号，并且保留两位小数。
 *
 * @param {string|number} value
 *     待格式化的金额数值，必须是一个数字，或者是一个表示浮点数的字符串(允许前后有空白)。
 * @return {string}
 *     格式化后的结果；如果参数不是数字，也不是个合法的浮点数字符串表示，则返回空字符串。
 * @author 胡海星
 */
function formatMoney(value) {
  if (value === undefined || value === null) {
    return '';
  }
  switch (typeof value) {
    case 'number':
      return MONEY_PREFIX + (Math.round(value * 100) / 100).toFixed(2);
    case 'string':
      if (NumberRule.isValid(value)) {
        return MONEY_PREFIX + (Math.round(stringToFloat(value) * 100) / 100).toFixed(2);
      } else {
        return '';
      }
    default:
      return '';
  }
}

export {
  MONEY_PREFIX,
  formatMoney as money,
};

export default formatMoney;
