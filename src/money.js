////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { round, stringToFloat } from '@haixing_hu/common-util';
import { NumberRule } from '@haixing_hu/common-validation-rule';

const MONEY_PREFIX = '¥ ';

/**
 * 格式化金额值，加上人民币符号，并且保留两位小数。
 *
 * @param {string|number} value
 *     待格式化的金额数值，必须是一个数字，或者是一个表示浮点数的字符串(允许前后有空白)。
 * @param {number} digits
 *     小数点后数字的个数；介于0到20（包括）之间，实现环境可能支持更大范围。如果
 *     忽略该参数，则默认为2。
 * @param {string} moneyPrefix
 *     金额前缀，默认为人民币符号"¥"加一个空格。
 * @param {string} moneySuffix
 *     金额后缀，默认为空字符串。
 * @return {string}
 *     格式化后的结果；如果参数不是数字，也不是个合法的浮点数字符串表示，则返回空字符串。
 * @author 胡海星
 */
function formatMoney(value, digits = 2, moneyPrefix = MONEY_PREFIX, moneySuffix = '') {
  if (value === undefined || value === null) {
    return '';
  }
  if ((typeof value === 'number') || (value instanceof Number)) {
    return moneyPrefix + round(value, digits).toFixed(digits) + moneySuffix;
  } else if ((typeof value === 'string') || (value instanceof String)) {
    if (NumberRule.isValid(value)) {
      return moneyPrefix + round(stringToFloat(value), digits).toFixed(digits) + moneySuffix;
    } else {
      return '';
    }
  } else {
    return '';
  }
}

export {
  MONEY_PREFIX,
  formatMoney as money,
};

export default formatMoney;
