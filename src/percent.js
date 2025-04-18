////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2023.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { NumberRule } from '@qubit-ltd/common-validation-rule';
import round from './impl/round';

const PERCENT_SYMBOL = ' %';

/**
 * 格式化百分比。
 *
 * @param {string|number} value
 *     待格式化的数值，以小数形式表示；必须是一个浮点数，或者是一个表示浮
 *     点数的字符串(允许前后有空白)。
 * @param {number} digits
 *     小数点后数字的个数；介于0到20（包括）之间，实现环境可能支持更大范围。如果
 *     忽略该参数，则默认为0。
 * @param {string} percentSymbol
 *     百分号符号，默认为" %"。
 * @return {string}
 *     格式化后的结果；如果参数不是数字，也不是个合法的浮点数字符串表示，则返回空
 *     字符串。
 * @author 胡海星
 */
function formatPercent(value, digits = 0, percentSymbol = PERCENT_SYMBOL) {
  if (value === undefined || value === null) {
    return '';
  }
  if ((typeof value === 'number') || (value instanceof Number)) {
    return round(value * 100, digits).toFixed(digits) + percentSymbol;
  } else if ((typeof value === 'string') || (value instanceof String)) {
    if (NumberRule.isValid(value)) {
      const v = parseFloat(value);
      return round(v * 100, digits).toFixed(digits) + percentSymbol;
    } else {
      return '';
    }
  } else {
    return '';
  }
}

export {
  PERCENT_SYMBOL,
  formatPercent as percent,
};

export default formatPercent;
